/**
 * Contact form payload. Must match form fields on Contact page and ContactSection.
 */
export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const ENDPOINT =
  (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined)?.trim() ||
  "https://formspree.io/f/mnjbgedz";

/**
 * Submits contact form data to the configured endpoint (e.g. Formspree).
 * Set VITE_CONTACT_FORM_ENDPOINT in production to your form endpoint URL.
 * @returns true if submission succeeded, false otherwise
 */
export async function submitContactForm(data: ContactFormData): Promise<boolean> {
  if (!ENDPOINT?.trim()) {
    return false;
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function isContactFormConfigured(): boolean {
  return Boolean(ENDPOINT?.trim());
}
