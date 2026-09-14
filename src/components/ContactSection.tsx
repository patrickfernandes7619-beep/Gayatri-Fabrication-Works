import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData.ts';
import { ContactFormData } from '../types.ts';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phoneNumber: '',
    message: initialSubject ? `Inquiry regarding: ${initialSubject}\n\nPlease share quotation and dimensions.` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({
        ...prev,
        message: `Inquiry regarding: ${initialSubject}\n\nPlease share quotation and dimensions.`
      }));
    }
  }, [initialSubject]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName.trim()) {
      setErrorMsg('Please enter your First Name.');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg('Please enter your Email address.');
      return;
    }
    if (formData.confirmEmail.trim() && formData.email.trim() !== formData.confirmEmail.trim()) {
      setErrorMsg('Email addresses do not match.');
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setErrorMsg('Please provide a Phone Number.');
      return;
    }

    setSubmitted(true);
    setErrorMsg('');
  };

  return (
    <div className="bg-neutral-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Title matching live site: "Follow & Reach us" */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EE1B24] block mb-2">
            Follow &amp; Reach us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            FILL OUT THE FORM &amp; WE WILL GET BACK TO YOU SHORTLY !
          </h2>
          <div className="w-16 h-1 bg-[#EE1B24] mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600">
            Send us your requirement, request a product catalog, or schedule a technical consultation.
          </p>
        </div>

        {/* 2-Column Grid: Form on Left, Contact Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Form Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-sm border border-gray-200 shadow-xs">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Thank You, {formData.firstName}!</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Your inquiry has been received. Our team will review your requirements and get back to you shortly.
                </p>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-sm text-xs text-left max-w-md mx-auto space-y-1">
                  <p><strong>Phone:</strong> {formData.phoneNumber}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  {formData.message && <p><strong>Requirement:</strong> {formData.message}</p>}
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      confirmEmail: '',
                      phoneNumber: '',
                      message: ''
                    });
                  }}
                  className="bg-[#EE1B24] hover:bg-red-700 text-white text-xs font-bold px-5 py-2.5 rounded-sm transition-colors uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Name Row: First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul"
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:outline-none focus:border-[#EE1B24] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Sharma"
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:outline-none focus:border-[#EE1B24] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Email Row: Email & Confirm Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.name@company.com"
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:outline-none focus:border-[#EE1B24] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Confirm Email Address
                    </label>
                    <input
                      type="email"
                      name="confirmEmail"
                      value={formData.confirmEmail}
                      onChange={handleChange}
                      placeholder="Re-enter your email"
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:outline-none focus:border-[#EE1B24] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Phone / Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:outline-none focus:border-[#EE1B24] focus:bg-white"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Message / Kitchen Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe equipment sizes, burner requirements, project timelines, or custom dimensions..."
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:outline-none focus:border-[#EE1B24] focus:bg-white"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#EE1B24] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-sm shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Let's meet each other Section (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-sm border border-gray-200 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2979FF] block mb-1">
                Headquarters &amp; Works
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                Let&apos;s Meet Each Other
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Visit our factory and showroom in Andheri East, Mumbai.
              </p>
            </div>

            {/* Address Details */}
            <div className="flex items-start gap-3 text-sm text-gray-700">
              <MapPin className="w-5 h-5 text-[#EE1B24] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900">{COMPANY_INFO.name}</p>
                <p>{COMPANY_INFO.address.gala}</p>
                <p>{COMPANY_INFO.address.street}</p>
                <p>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}, {COMPANY_INFO.address.country}</p>
              </div>
            </div>

            {/* Direct Telephone Numbers */}
            <div className="flex items-start gap-3 text-sm text-gray-700">
              <Phone className="w-5 h-5 text-[#2979FF] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900">Landlines:</p>
                <p>
                  <a href="tel:+9122266996268" className="hover:text-blue-600">022 266996268</a>
                  {' / '}
                  <a href="tel:+912228360120" className="hover:text-blue-600">022 28360120</a>
                </p>
              </div>
            </div>

            {/* Key Personnel Contacts */}
            <div className="border-t border-gray-100 pt-4 space-y-2">
              <p className="font-bold text-xs text-gray-900 uppercase tracking-wider">Mobile &amp; WhatsApp:</p>
              {COMPANY_INFO.contacts.map((contact, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs bg-gray-50 p-2.5 rounded-sm border border-gray-200">
                  <span className="font-semibold text-gray-800">{contact.name}</span>
                  <a 
                    href={`tel:${contact.tel}`}
                    className="text-[#EE1B24] font-bold hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>

            {/* Email Addresses */}
            <div className="flex items-start gap-3 text-sm text-gray-700 border-t border-gray-100 pt-4">
              <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="font-bold text-gray-900 text-sm">Official Inquiries:</p>
                {COMPANY_INFO.emails.map((email, idx) => (
                  <p key={idx}>
                    <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
                      {email}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            {/* Operating Hours formatted as per Google Listing */}
            <div className="border-t border-gray-100 pt-4 text-xs">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-bold text-gray-900">Working Hours (Google Listing)</span>
                </div>
                {/* Live IST Status indicator */}
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Mon – Sat: 9:00 AM – 6:00 PM
                </span>
              </div>

              {/* Day-by-Day Google Business Schedule */}
              <div className="bg-gray-50 rounded-sm p-3 border border-gray-200 space-y-1 mt-2">
                {COMPANY_INFO.workingHours.schedule?.map((item) => (
                  <div key={item.day} className="flex items-center justify-between text-[11px] py-0.5">
                    <span className="font-semibold text-gray-700 w-24">{item.day}</span>
                    <span className={item.isClosed ? "text-red-600 font-medium" : "text-gray-900 font-mono font-medium"}>
                      {item.hours}
                    </span>
                  </div>
                ))}
                <p className="text-[10px] text-gray-500 pt-2 border-t border-gray-200 italic">
                  * Sunday visits can be scheduled in advance with our technical team.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Embedded Interactive Location Map */}
        <div className="bg-white p-4 rounded-sm border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between mb-3 px-2">
            <h4 className="font-bold text-sm text-gray-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#EE1B24]" />
              Factory &amp; Works Location (Andheri East, Mumbai)
            </h4>
            <a
              href="https://maps.google.com/maps?q=Gayatri+Fabrication+Works,+Gala+No+10,+Tarun+Plastic+Industrial+Estate,+Mogra+Road,+Andheri+East,+Mumbai+400069"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline font-semibold"
            >
              Open in Google Maps &rarr;
            </a>
          </div>

          <div className="relative w-full h-80 sm:h-96 rounded-sm overflow-hidden bg-gray-100 border border-gray-200">
            {/* Google Map with Gayatri Fabrication Works exact query and marker info window */}
            <iframe
              title="Gayatri Fabrication Works Location"
              src="https://maps.google.com/maps?q=Gayatri+Fabrication+Works,+Gala+No+10,+Tarun+Plastic+Industrial+Estate,+Mogra+Road,+Andheri+East,+Mumbai+400069&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />

            {/* Exact Location Marker Badge directly above the marker on the map */}
            <div className="absolute top-3 left-3 max-w-[290px] sm:max-w-xs bg-white/95 backdrop-blur-xs p-3 rounded-sm shadow-md border border-gray-200 pointer-events-auto">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5 border border-red-200">
                  <MapPin className="w-4 h-4 text-[#EE1B24]" />
                </div>
                <div>
                  <h5 className="font-bold text-xs sm:text-sm text-gray-900 leading-tight">
                    Gayatri Fabrication Works
                  </h5>
                  <p className="text-[11px] text-[#EE1B24] font-semibold mt-0.5">
                    Commercial Kitchen Equipments
                  </p>
                  <p className="text-[10px] text-gray-500 mt-1 leading-snug">
                    Gala No 10, Tarun Plastic Indl. Estate, Mogra Road, Andheri East, Mumbai - 400069
                  </p>
                  <div className="mt-1.5 pt-1.5 border-t border-gray-100 flex items-center gap-1.5 text-[10px] text-gray-700 font-medium">
                    <Clock className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Mon–Sat: 9:00 AM – 6:00 PM • Sun: Closed</span>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <a
                      href="https://maps.google.com/maps?q=Gayatri+Fabrication+Works,+Gala+No+10,+Tarun+Plastic+Industrial+Estate,+Mogra+Road,+Andheri+East,+Mumbai+400069"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-800"
                    >
                      <span>Get Directions</span>
                      &rarr;
                    </a>
                    <a
                      href="tel:+919323801367"
                      className="text-[11px] font-bold text-gray-700 hover:text-[#EE1B24]"
                    >
                      Call Factory
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
