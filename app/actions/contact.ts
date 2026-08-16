'use server';

/* ————————————————————————————————————————————
   Contact Form Server Action
   
   Uses Web3Forms (free tier — 250 submissions/month).
   To activate: 
   1. Go to https://web3forms.com and get a free access key
   2. Add WEB3FORMS_KEY=your_key to your .env.local file
   3. Redeploy (Vercel will pick it up automatically)
   
   Until the key is set, submissions are logged server-side
   and a success message is still shown to the user.
   ———————————————————————————————————————————— */

export interface ContactFormState {
  success: boolean;
  error: string | null;
  message: string | null;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const projectDetails = formData.get('message') as string;

  // Validation
  if (!firstName?.trim() || !lastName?.trim()) {
    return { success: false, error: 'Please enter your full name.', message: null };
  }
  if (!email?.trim() || !email.includes('@')) {
    return { success: false, error: 'Please enter a valid email address.', message: null };
  }
  if (!projectDetails?.trim() || projectDetails.trim().length < 10) {
    return { success: false, error: 'Please tell us more about your project (at least 10 characters).', message: null };
  }

  const apiKey = process.env.WEB3FORMS_KEY;

  if (apiKey) {
    // Send via Web3Forms
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: apiKey,
          subject: `New project inquiry from ${firstName} ${lastName}`,
          from_name: `${firstName} ${lastName}`,
          email,
          message: projectDetails,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        return { success: false, error: 'Something went wrong. Please try again or email us directly.', message: null };
      }
    } catch {
      return { success: false, error: 'Network error. Please try again or email us at hello@creativecapy.com.', message: null };
    }
  } else {
    // Log server-side when no API key is configured
    console.log('📬 New contact form submission:', {
      name: `${firstName} ${lastName}`,
      email,
      projectDetails,
      timestamp: new Date().toISOString(),
    });
  }

  return {
    success: true,
    error: null,
    message: "Thank you! We've received your message and will get back to you within 24 hours.",
  };
}
