export const metadata = {
  title: "Privacy Policy | Mood! Anong Ulam?",
  description: "How we handle your data and protect your privacy.",
};

const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;


export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Effective Date: June 12, 2025</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-4">We collect anonymous usage data such as IP addresses, browser types, and mood input via cookies and Google Analytics.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">We use data to improve user experience, generate mood-based food suggestions, and monitor website performance.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Cookies</h2>
      <p className="mb-4">Cookies help us remember user preferences and understand site usage. You may disable cookies in your browser settings.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Sharing</h2>
      <p className="mb-4">We do not sell personal data. Data may be shared with analytics providers for performance insights.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Security</h2>
      <p className="mb-4">We implement standard security measures, but we cannot guarantee complete protection of your data over the internet.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Rights</h2>
      <p className="mb-4">You may have rights to access or delete your data, depending on local laws. Contact us to exercise these rights.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Children’s Privacy</h2>
      <p className="mb-4">This site is not intended for children under 13. We do not knowingly collect personal data from minors.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Changes to This Policy</h2>
      <p className="mb-4">We may revise this policy at any time. Updates will be posted on this page with a new effective date.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact Information</h2>
      <p>If you have privacy-related concerns, contact us at:{" "}
        <a href={`mailto:${supportEmail}`} className="underline">
          {supportEmail}
        </a>
        </p>
    </div>
  );
}