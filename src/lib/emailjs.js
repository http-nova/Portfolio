import emailjs from "@emailjs/browser";

// Helper function to check if error is transient
function isTransientError(error) {
  const status = error?.status;
  return status === 429 || (status >= 500 && status < 600);
}
// Helper function to delay retries
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function getEmailJsConfig() {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  console.log("[EmailJS Config Check]:", {
    hasPublicKey: !!publicKey,
    hasServiceId: !!serviceId,
    hasTemplateId: !!templateId,
    publicKeyFirst4: publicKey ? publicKey.substring(0, 4) : "N/A",
    serviceIdFirst4: serviceId ? serviceId.substring(0, 4) : "N/A",
    templateIdFirst4: templateId ? templateId.substring(0, 4) : "N/A"
  });
  if (!publicKey || !serviceId || !templateId) {
    throw new Error(
      "EmailJS is not configured. Add VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID to your .env file."
    );
  }
  return { publicKey, serviceId, templateId };
}
async function sendContactEmail(payload, retries = 3) {
  const { publicKey, serviceId, templateId } = getEmailJsConfig();
  let lastError;
  for (let i = 0; i < retries; i++) {
    try {
      console.log(`[EmailJS] Sending email (attempt ${i + 1}/${retries})`);
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          // All common name variables
          from_name: payload.fullName,
          fullName: payload.fullName,
          name: payload.fullName,
          user_name: payload.fullName,
          // All common email variables
          from_email: payload.email,
          email: payload.email,
          user_email: payload.email,
          reply_to: payload.email,
          // All common message variables
          message: payload.message,
          user_message: payload.message,
          body: payload.message
        },
        { publicKey }
      );
      console.log("[EmailJS] Success!", response);
      return response;
    } catch (error) {
      console.error(`[EmailJS] Error (attempt ${i + 1}/${retries}):`, error);
      lastError = error;
      if (!isTransientError(error) || i === retries - 1) {
        throw error;
      }
      // Exponential backoff: 1s, 2s, 4s
      const backoffTime = Math.pow(2, i) * 1000;
      console.log(`[EmailJS] Retrying in ${backoffTime / 1000}s...`);
      await delay(backoffTime);
    }
  }
  throw lastError;
}
export {
  sendContactEmail
};