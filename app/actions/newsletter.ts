'use server';

/* ————————————————————————————————————————————
   Newsletter Subscription Server Action
   
   Currently logs the email server-side.
   To connect to a real mailing list:
   - Mailchimp: use their API with MAILCHIMP_API_KEY
   - Loops.so: use their API with LOOPS_API_KEY
   - ConvertKit: use their API
   ———————————————————————————————————————————— */

export interface NewsletterFormState {
  success: boolean;
  error: string | null;
  message: string | null;
}

export async function subscribeNewsletter(
  _prevState: NewsletterFormState,
  formData: FormData
): Promise<NewsletterFormState> {
  const email = formData.get('email') as string;

  if (!email?.trim() || !email.includes('@') || !email.includes('.')) {
    return { success: false, error: 'Please enter a valid email address.', message: null };
  }

  // Log server-side (replace with actual mailing list integration)
  console.log('📧 New newsletter subscription:', {
    email,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    error: null,
    message: "You're in! Welcome to the CreativeCapy community.",
  };
}
