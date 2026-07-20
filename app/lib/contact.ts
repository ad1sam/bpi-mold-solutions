export const SERVICE_OPTIONS = [
  { value: "mold-inspection", label: "Mold Inspection" },
  { value: "mold-removal", label: "Mold Removal" },
  { value: "emergency", label: "Emergency Mold Services" },
  { value: "air-quality", label: "Air Quality Testing" },
  { value: "commercial", label: "Commercial Mold Services" },
  { value: "water-damage", label: "Water Damage Prevention" },
  { value: "other", label: "Other / Not Sure" },
] as const;

export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s().+\-]{10,}$/;

export function validateContactForm(
  data: ContactFormData
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = data.name.trim();
  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length < 2) {
    errors.name = "Please enter your full name.";
  }

  const phone = data.phone.trim();
  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!PHONE_REGEX.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  const email = data.email.trim();
  if (!email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.service) {
    errors.service = "Please select a service.";
  } else if (!SERVICE_OPTIONS.some((o) => o.value === data.service)) {
    errors.service = "Please select a valid service.";
  }

  const message = data.message.trim();
  if (message.length > 2000) {
    errors.message = "Message must be 2000 characters or less.";
  }

  return errors;
}

export function getServiceLabel(value: string): string {
  return SERVICE_OPTIONS.find((o) => o.value === value)?.label ?? value;
}
