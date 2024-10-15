import React from "react";
import "./Privacy.css"

export default function Privacy() {
  return (
    <div className="privacy">
      <h1>Privacy Policy</h1>
      <p>Effective Date: {new Date().getFullYear()}
      <h3>1. Introduction</h3>
      Welcome to ToDo app. Your privacy is important to us. This Privacy Policy
      explains how we collect, use, and protect your personal information when
      you visit our website.
      <h3>2. Information We Collect </h3>
      We may collect the following types of information:
      <ul>
        <li>
          Personal Information: Name, email address, phone number, etc., when
          you fill out forms or subscribe to our services.
        </li>
        <li>
          Usage Data: Information about how you use our website, including IP
          address, browser type, pages visited, and time spent on the site.
        </li>
        <li>
          Cookies: We use cookies to enhance your experience on our site. You
          can manage cookie preferences through your browser settings.
        </li>
      </ul>
      <h3>3. How We Use Your Information</h3>
      We may use the information we collect for various purposes, including:
      <ul>
        <li>To provide and maintain our services</li>
        <li>To notify you about changes to our services</li>
        <li>
          To allow you to participate in interactive features of our website
        </li>
        <li>To provide customer support</li>
        <li>
          To gather analysis or valuable information so we can improve our
          website
        </li>
        <li>To monitor the usage of our website</li>
        <li>To detect, prevent, and address technical issues</li>
        <li>To send you marketing communications, if you have opted in</li>
      </ul>
      <h3>4. Sharing Your Information</h3>
      We do not sell or rent your personal information to third parties. We may
      share your information with:
      <ul>
        <li>Service providers who assist us in operating our website</li>
        <li>Legal authorities if required by law or to protect our rights</li>
      </ul>
      <h3>5. Security of Your Information</h3>
      We take the security of your personal information seriously and implement
      reasonable measures to protect it. However, no method of transmission over
      the internet or method of electronic storage is 100% secure.
      <h3>6. Your Rights</h3>
      You have the right to:
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of any inaccuracies in your information</li>
        <li>Request deletion of your personal information</li>
        <li>
          Withdraw consent to our use of your information (where applicable)
        </li>
      </ul>
      <h3>7. Changes to This Privacy Policy</h3>
      We may update our Privacy Policy from time to time. We will notify you of
      any changes by posting the new Privacy Policy on this page and updating
      the effective date.
      <h3>8. Contact Us</h3>
      If you have any questions or concerns about this Privacy Policy, please
      contact us.
      </p>
    </div>
  );
}
