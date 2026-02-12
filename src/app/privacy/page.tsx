import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Pact",
  description:
    "Privacy Policy for Pact, the group accountability app for daily goals.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full max-w-3xl min-h-screen bg-white dark:bg-black px-8 sm:px-16 py-16 sm:py-24">
        <nav className="mb-12">
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            &larr; Back to home
          </Link>
        </nav>

        <article className="text-zinc-700 dark:text-zinc-300">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
            <strong>Effective Date:</strong> February 11, 2026
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10">
            <strong>Last Updated:</strong> February 11, 2026
          </p>

          <p className="text-base leading-7 mb-6">
            Pact (&ldquo;the App,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
            or &ldquo;our&rdquo;) is a group accountability application that
            helps small groups of people stay committed to their daily goals.
            This Privacy Policy describes how we collect, use, store, and
            protect your information when you use the Pact mobile application.
          </p>
          <p className="text-base leading-7 mb-10">
            By using the App, you agree to the collection and use of
            information in accordance with this policy.
          </p>

          {/* Section 1 */}
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mt-12 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-base leading-7 mb-6">
            We collect only the minimum information necessary to operate the
            App&rsquo;s core functionality. The data we collect falls into the
            following categories:
          </p>

          <h3 className="text-lg font-medium text-black dark:text-zinc-100 mt-8 mb-3">
            1.1 Account Information
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 mb-6">
            <li>
              <strong>Device Identifier:</strong> A universally unique
              identifier (UUID) generated locally on your device. This is not
              your Apple advertising identifier (IDFA) and cannot be used to
              track you across other apps or websites.
            </li>
            <li>
              <strong>User Keycode:</strong> A unique code generated for your
              account, used for authentication purposes.
            </li>
            <li>
              <strong>Display Name:</strong> A name you choose to identify
              yourself within your pact group. You are not required to use your
              real name.
            </li>
            <li>
              <strong>Timezone:</strong> Your device&rsquo;s timezone setting,
              used to determine check-in windows and display times correctly for
              all group members.
            </li>
          </ul>

          <h3 className="text-lg font-medium text-black dark:text-zinc-100 mt-8 mb-3">
            1.2 Pact Activity Data
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 mb-6">
            <li>
              <strong>Promise/Goal Text:</strong> The personal commitment or
              goal you set within your pact group.
            </li>
            <li>
              <strong>Check-In Records:</strong> The date and timestamp of your
              daily check-ins, along with the promise text associated with each
              check-in.
            </li>
            <li>
              <strong>Pact Membership:</strong> Records of which pact group you
              belong to and when you joined.
            </li>
          </ul>

          <h3 className="text-lg font-medium text-black dark:text-zinc-100 mt-8 mb-3">
            1.3 Technical Data
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 mb-6">
            <li>
              <strong>Push Notification Token:</strong> An Apple Push
              Notification service (APNs) device token, used solely to deliver
              notifications about your pact group&rsquo;s activity. This token
              is provided by Apple and is specific to this App on your device.
            </li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mt-12 mb-4">
            2. Information We Do NOT Collect
          </h2>
          <p className="text-base leading-7 mb-6">
            We are committed to minimal data collection. The following types of
            data are <strong>never</strong> collected, requested, or accessed by
            the App:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 mb-6">
            <li>Email addresses, real names, or phone numbers</li>
            <li>
              Location data (GPS, Wi-Fi-based, or cell-tower-based)
            </li>
            <li>Photos, videos, or other media files</li>
            <li>Contacts or address book data</li>
            <li>Health, fitness, or biometric data</li>
            <li>Financial or payment information</li>
            <li>
              Apple advertising identifier (IDFA) or any third-party advertising
              identifiers
            </li>
            <li>Browsing history or data from other apps</li>
            <li>Clipboard contents</li>
          </ul>
          <p className="text-base leading-7 mb-6">
            We do <strong>not</strong> integrate any third-party analytics
            services (such as Firebase Analytics, Mixpanel, Google Analytics, or
            similar). We do <strong>not</strong> embed any third-party
            advertising SDKs or tracking frameworks.
          </p>

          {/* Section 3 */}
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mt-12 mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-base leading-7 mb-6">
            All information we collect is used <strong>solely</strong> to
            operate the core functionality of the Pact application:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 mb-6">
            <li>
              <strong>Providing the Service:</strong> Enabling you to create or
              join a pact group, set promises, and record daily check-ins.
            </li>
            <li>
              <strong>Group Accountability:</strong> Displaying your check-in
              status and promise to other members of your pact group.
            </li>
            <li>
              <strong>Push Notifications:</strong> Sending you notifications
              when your pact-mates check in, when someone joins or leaves your
              group, or other pact-related activity.
            </li>
            <li>
              <strong>Timezone Handling:</strong> Ensuring check-in windows and
              timestamps are displayed correctly across time zones.
            </li>
          </ul>
          <p className="text-base leading-7 mb-3">
            We do <strong>not</strong> use your information for any of the
            following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 mb-6">
            <li>Selling or renting your data to third parties</li>
            <li>
              Sharing your data with third parties for their marketing or any
              other purposes
            </li>
            <li>Serving advertisements of any kind</li>
            <li>
              Building user profiles for advertising, marketing, or behavioral
              targeting
            </li>
            <li>
              Algorithmic recommendations or content personalization beyond core
              App features
            </li>
            <li>Training machine learning models</li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mt-12 mb-4">
            4. Data Sharing and Disclosure
          </h2>

          <h3 className="text-lg font-medium text-black dark:text-zinc-100 mt-8 mb-3">
            4.1 Within Your Pact Group
          </h3>
          <p className="text-base leading-7 mb-6">
            Your display name, promise text, and check-in activity are visible
            to other members of your pact group. This sharing is fundamental to
            the App&rsquo;s accountability purpose. You control what display
            name and promise text you provide.
          </p>

          <h3 className="text-lg font-medium text-black dark:text-zinc-100 mt-8 mb-3">
            4.2 Third-Party Sharing
          </h3>
          <p className="text-base leading-7 mb-3">
            We do <strong>not</strong> sell, trade, license, or otherwise
            disclose your personal information to any third party for any
            reason, except:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 mb-6">
            <li>
              <strong>Legal Compliance:</strong> If required to do so by law,
              regulation, legal process, or governmental request.
            </li>
            <li>
              <strong>Safety:</strong> To protect the rights, safety, or
              property of our users or the public, as required or permitted by
              law.
            </li>
          </ul>

          <h3 className="text-lg font-medium text-black dark:text-zinc-100 mt-8 mb-3">
            4.3 Service Providers
          </h3>
          <p className="text-base leading-7 mb-6">
            Our backend infrastructure is hosted on Supabase (which runs on
            Amazon Web Services). Supabase processes your data solely on our
            behalf and in accordance with our instructions. We do not grant
            Supabase or AWS any rights to use your data for their own purposes.
          </p>

          {/* Section 5 */}
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mt-12 mb-4">
            5. Data Storage and Security
          </h2>

          <h3 className="text-lg font-medium text-black dark:text-zinc-100 mt-8 mb-3">
            5.1 Infrastructure
          </h3>
          <p className="text-base leading-7 mb-6">
            Your data is stored in a PostgreSQL database managed by Supabase,
            hosted on Amazon Web Services (AWS) infrastructure.
          </p>

          <h3 className="text-lg font-medium text-black dark:text-zinc-100 mt-8 mb-3">
            5.2 Security Measures
          </h3>
          <p className="text-base leading-7 mb-3">
            We employ the following security measures to protect your data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 mb-6">
            <li>
              <strong>Encryption in Transit:</strong> All data transmitted
              between the App and our servers is encrypted using Transport Layer
              Security (TLS 1.2 or higher).
            </li>
            <li>
              <strong>Encryption at Rest:</strong> Data stored in our database
              is encrypted at rest using AES-256 encryption provided by the
              hosting infrastructure.
            </li>
            <li>
              <strong>Row-Level Security (RLS):</strong> Our database enforces
              row-level security policies, ensuring that users can only access
              data they are authorized to view (i.e., data within their own pact
              group).
            </li>
            <li>
              <strong>Authentication:</strong> Device-based authentication
              ensures that only your device can access or modify your account
              data.
            </li>
          </ul>

          <h3 className="text-lg font-medium text-black dark:text-zinc-100 mt-8 mb-3">
            5.3 Limitations
          </h3>
          <p className="text-base leading-7 mb-6">
            While we implement commercially reasonable security measures, no
            method of electronic storage or transmission over the Internet is
            completely secure. We cannot guarantee absolute security of your
            data.
          </p>

          {/* Section 6 */}
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mt-12 mb-4">
            6. Data Retention and Deletion
          </h2>

          <h3 className="text-lg font-medium text-black dark:text-zinc-100 mt-8 mb-3">
            6.1 Active Accounts
          </h3>
          <p className="text-base leading-7 mb-6">
            Your data is retained for as long as your account is active and you
            are using the App.
          </p>

          <h3 className="text-lg font-medium text-black dark:text-zinc-100 mt-8 mb-3">
            6.2 Account Deletion
          </h3>
          <p className="text-base leading-7 mb-3">
            You may request deletion of your account and associated personal
            data at any time by:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 mb-6">
            <li>
              Leaving your current pact group through the App&rsquo;s interface
            </li>
            <li>
              Contacting us at the email address provided below to request full
              account deletion
            </li>
          </ul>
          <p className="text-base leading-7 mb-6">
            Upon receiving a valid deletion request, we will remove your
            personal data (display name, device identifier, promise text, push
            notification token, and timezone) from our active systems within{" "}
            <strong>30 days</strong>.
          </p>

          <h3 className="text-lg font-medium text-black dark:text-zinc-100 mt-8 mb-3">
            6.3 Residual Data
          </h3>
          <p className="text-base leading-7 mb-3">After account deletion:</p>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 mb-6">
            <li>
              <strong>Check-in records</strong> may be retained in anonymized,
              aggregated form (with no link to your identity) for the purpose of
              maintaining accurate group statistics and historical pact records.
            </li>
            <li>
              <strong>Backup copies</strong> of your data may persist in
              encrypted backups for up to 90 days after deletion, after which
              they will be purged through the normal backup rotation cycle.
            </li>
          </ul>

          {/* Section 7 */}
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mt-12 mb-4">
            7. Children&rsquo;s Privacy
          </h2>
          <p className="text-base leading-7 mb-6">
            The App is not directed at children under the age of 13. We do not
            knowingly collect personal information from children under 13. We
            rely on the Apple App Store&rsquo;s age rating system and parental
            controls to restrict access by minors.
          </p>
          <p className="text-base leading-7 mb-6">
            If we become aware that we have inadvertently collected personal
            information from a child under 13, we will take steps to delete that
            information as promptly as possible. If you believe a child under 13
            has provided us with personal information, please contact us at the
            email address provided below.
          </p>

          {/* Section 8 */}
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mt-12 mb-4">
            8. Your Rights
          </h2>
          <p className="text-base leading-7 mb-6">
            Depending on your jurisdiction, you may have the following rights
            regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 mb-6">
            <li>
              <strong>Access:</strong> The right to know what personal data we
              hold about you.
            </li>
            <li>
              <strong>Correction:</strong> The right to request correction of
              inaccurate data.
            </li>
            <li>
              <strong>Deletion:</strong> The right to request deletion of your
              data, as described in Section 6.
            </li>
            <li>
              <strong>Portability:</strong> The right to receive your data in a
              structured, commonly used format.
            </li>
            <li>
              <strong>Objection:</strong> The right to object to certain
              processing of your data.
            </li>
          </ul>
          <p className="text-base leading-7 mb-6">
            To exercise any of these rights, please contact us using the
            information provided in Section 11.
          </p>

          {/* Section 9 */}
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mt-12 mb-4">
            9. International Data Transfers
          </h2>
          <p className="text-base leading-7 mb-6">
            Our servers are located in the United States. If you access the App
            from outside the United States, your data will be transferred to,
            stored, and processed in the United States. By using the App, you
            consent to this transfer. We ensure that appropriate safeguards are
            in place to protect your data in accordance with this Privacy
            Policy.
          </p>

          {/* Section 10 */}
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mt-12 mb-4">
            10. Changes to This Privacy Policy
          </h2>
          <p className="text-base leading-7 mb-3">
            We may update this Privacy Policy from time to time. When we make
            material changes, we will:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 mb-6">
            <li>
              Update the &ldquo;Last Updated&rdquo; date at the top of this
              policy.
            </li>
            <li>
              Notify you through the App or other appropriate means for
              significant changes.
            </li>
          </ul>
          <p className="text-base leading-7 mb-6">
            Your continued use of the App after any changes to this Privacy
            Policy constitutes your acceptance of the updated policy.
          </p>

          {/* Section 11 */}
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mt-12 mb-4">
            11. Contact Us
          </h2>
          <p className="text-base leading-7 mb-6">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="text-base leading-7 mb-10">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:privacy@pactapp.io"
              className="text-black dark:text-zinc-50 underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            >
              privacy@pactapp.io
            </a>
          </p>

          <hr className="border-zinc-200 dark:border-zinc-800 my-10" />

          <p className="text-sm text-zinc-400 dark:text-zinc-500 italic leading-6">
            This privacy policy is provided for informational purposes and is
            intended to comply with applicable privacy laws and Apple App Store
            requirements. It does not constitute legal advice. We recommend
            consulting with a qualified legal professional to ensure full
            compliance with all applicable regulations in your jurisdiction.
          </p>
        </article>

        <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400 dark:text-zinc-500">
          <span>Pact &copy; 2025</span>
          <span>Privacy Policy</span>
        </footer>
      </div>
    </div>
  );
}
