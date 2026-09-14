export interface ProductItem {
  slug: string;
  title: string;
  image: string;
  description: string;
  categorySlug?: string;
  categoryTitle?: string;
}

export interface ProductCategory {
  id: string;
  slug: string;
  title: string;
  items: ProductItem[];
}

export interface ClientLogo {
  id: number;
  filename: string;
  src: string;
  alt: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  phoneNumber: string;
  message: string;
}
