"use server";

interface ContactState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const payload = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    company: String(formData.get("company") || ""),
    phone: String(formData.get("phone") || ""),
    message: String(formData.get("message") || ""),
  };

  console.log("Contact form submission", payload);
  // TODO: connect to CRM or email service for production workflows.

  return {
    status: "success",
    message: "Thanks for reaching out. Our team will respond within 1 business day.",
  };
}
