export const metadata = {
  title: "Terms of Service | Mood! Anong Ulam?",
  description: "Terms governing the use of Mood! Anong Ulam?",
};

const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Effective Date: June 12, 2025</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Use of the Website</h2>
      <p className="mb-4">Mood! Anong Ulam? provides food suggestions based on user input such as mood or preferences. You agree to use this Website only for lawful purposes and in accordance with these Terms.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. User Responsibilities</h2>
      <p className="mb-4">You agree not to use the site for illegal activities, interfere with its operation, or reuse our content without permission.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Intellectual Property</h2>
      <p className="mb-4">All content on this site is owned or licensed by Mood! Anong Ulam? and protected by intellectual property laws.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Disclaimer</h2>
      <p className="mb-4">Food suggestions are for informational purposes only. We are not responsible for any dietary or health consequences from their use.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">We are not liable for damages resulting from your use of the Website or its content.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Third-Party Links</h2>
      <p className="mb-4">We are not responsible for content or policies of external websites linked from our service.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to These Terms</h2>
      <p className="mb-4">We may update these Terms at any time. Continued use of the Website indicates your acceptance of the updated Terms.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact Information</h2>
      <p>If you have questions, email us at:{" "}
        <a href={`mailto:${supportEmail}`} className="underline">
          {supportEmail}
        </a>
    </p>
    </div>
  );
}