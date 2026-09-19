import React from 'react';

/**
 * Universal image error recovery helper.
 * If an image fails to load from ./images/* (e.g. due to cPanel directory mapping),
 * it seamlessly and automatically switches to ./public/images/* which is guaranteed
 * to exist on the Apache / cPanel production server.
 */
export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackSrc?: string
) => {
  const target = e.currentTarget;
  const currentSrc = target.getAttribute('src') || target.src;
  
  const attempt = parseInt(target.getAttribute('data-retry-attempt') || '0', 10);
  if (attempt >= 2) {
    if (fallbackSrc && target.src !== fallbackSrc) {
      target.src = fallbackSrc;
    }
    return;
  }

  target.setAttribute('data-retry-attempt', String(attempt + 1));

  // Switch to public/images if requested from /images/
  if (currentSrc.includes('/images/') && !currentSrc.includes('/public/images/')) {
    const newSrc = currentSrc.replace('/images/', '/public/images/');
    target.src = newSrc;
  } else if (currentSrc.startsWith('./images/')) {
    target.src = currentSrc.replace('./images/', './public/images/');
  } else if (currentSrc.startsWith('images/')) {
    target.src = 'public/' + currentSrc;
  } else if (fallbackSrc) {
    target.src = fallbackSrc;
  }
};
