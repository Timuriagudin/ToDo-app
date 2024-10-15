import React from "react";
import "./Terms.css";

export default function Terms() {
  return (
    <div className="terms">
      <p>
        <h1>Terms of Service</h1>
        Effective Date: {new Date().getFullYear()}
        <h3>1. Acceptance of Terms</h3>
        By accessing or using ToDo app (“the Site”), you agree to be bound by
        these Terms of Service. If you do not agree to these terms, please do
        not use the Site.
        <h3>2. Changes to Terms</h3>
        We may update these Terms from time to time. We will notify you of any
        changes by posting the new Terms on this page. Your continued use of the
        Site after any modifications constitutes your acceptance of the new
        Terms.
        <h3>3. Use of the Site</h3>
        You must be at least 13 years old to use this Site. You agree to use the
        Site only for lawful purposes and in a manner that does not infringe the
        rights of others.
        <h3>4. User Accounts</h3>
        To access certain features of the Site, you may need to create an
        account. You agree to provide accurate and complete information during
        registration and to update such information to keep it accurate and
        complete. You are responsible for maintaining the confidentiality of
        your account information.
        <h3>5. Intellectual Property</h3>
        All content on the Site, including text, graphics, logos, and software,
        is the property of [Your Website Name] or its licensors. You may not
        reproduce, distribute, or create derivative works from any content
        without our express written permission.
        <h3>6. Third-Party Links</h3>
        Our Site may contain links to third-party websites. We are not
        responsible for the content or practices of these sites. We encourage
        you to review the terms of service and privacy policies of any
        third-party sites you visit.
        <h3>7. Disclaimers</h3>
        The Site is provided on an “as-is” and “as-available” basis. We make no
        representations or warranties of any kind regarding the Site or its
        content, including but not limited to accuracy, reliability, or
        availability.
        <h3>8. Limitation of Liability</h3>
        To the fullest extent permitted by law, [Your Website Name] shall not be
        liable for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of the Site or any content therein.
        <h3>9. Governing Law</h3>
        These Terms shall be governed by and construed in accordance with the
        laws of USA, without regard to its conflict of law principles.
        <h3>10. Contact Us</h3>
        If you have any questions about these Terms, please contact us
      </p>
    </div>
  );
}
