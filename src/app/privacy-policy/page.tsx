export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-900">FUTURE MEDIA</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Beranda</a>
                <a href="/#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Tentang</a>
                <a href="/#services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Layanan</a>
                <a href="/#portfolio" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Portfolio</a>
                <a href="/#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Kontak</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> January 1, 2024<br />
            <strong>Last Updated:</strong> January 1, 2024
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                PT FUTURE MEDIA DIGITAL ("we," "us," or "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website futuremediadigital.com and use our services.
              </p>
              <p>
                This policy is compliant with the General Data Protection Regulation (GDPR) and other 
                applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-3">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact information (email, phone, address)</li>
                <li>Company information and job title</li>
                <li>Account credentials and login information</li>
                <li>Communication records and correspondence</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">2.2 Technical Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and geolocation data</li>
                <li>Browser type, operating system, and device information</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Pages visited, time spent, and click patterns</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">2.3 Business Information</h3>
              <ul className="list-disc pl-6">
                <li>Project requirements and specifications</li>
                <li>Business needs and objectives</li>
                <li>Technical requirements and constraints</li>
                <li>Budget and timeline information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6">
                <li>To provide and maintain our services</li>
                <li>To process and fulfill your requests</li>
                <li>To communicate with you about our services</li>
                <li>To send marketing communications (with consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraud and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="mb-4">We process your information based on the following legal grounds:</p>
              <ul className="list-disc pl-6">
                <li><strong>Consent:</strong> When you explicitly agree to our processing</li>
                <li><strong>Contract:</strong> When necessary to fulfill our contractual obligations</li>
                <li><strong>Legal Obligation:</strong> When required by law</li>
                <li><strong>Legitimate Interest:</strong> When we have a valid business reason</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers and third-party vendors</li>
                <li>Business partners and collaborators</li>
                <li>Legal authorities when required by law</li>
                <li>Professional advisors and consultants</li>
              </ul>
              <p>
                We never sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">6. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Access controls and authentication</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">7. Your Rights (GDPR)</h2>
              <p className="mb-4">Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Access:</strong> Request a copy of your data</li>
                <li><strong>Rectification:</strong> Correct inaccurate information</li>
                <li><strong>Erasure:</strong> Request deletion of your data</li>
                <li><strong>Portability:</strong> Transfer your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your data</li>
                <li><strong>Restriction:</strong> Limit how we use your data</li>
              </ul>
              <p>
                To exercise these rights, please contact us at privacy@futuremediadigital.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">8. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience. You can:
              </p>
              <ul className="list-disc pl-6">
                <li>Accept or reject cookies via browser settings</li>
                <li>View our Cookie Policy for detailed information</li>
                <li>Opt-out of targeted advertising</li>
                <li>Clear cookies from your device</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries outside your own. 
                We ensure appropriate safeguards are in place for such transfers, including 
                Standard Contractual Clauses and other legal mechanisms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">10. Data Retention</h2>
              <p className="mb-4">
                We retain your information only as long as necessary for the purposes outlined 
                in this policy, unless required by law to retain it longer. Retention periods vary 
                based on the type of information and legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">11. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 16. We do not knowingly collect 
                personal information from children under this age. If we become aware of such 
                collection, we will take immediate steps to delete the information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of 
                any material changes by posting the new policy on our website and sending you 
                an email notification for significant changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">13. Contact Information</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or want to exercise your rights, 
                please contact us:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p><strong>Email:</strong> privacy@futuremediadigital.com</p>
                <p><strong>Phone:</strong> 0877-2988-7794</p>
                <p><strong>Address:</strong> Menara Cakrawala, Jl. M.H. Thamrin No.9 12th floor, Jakarta 10340</p>
                <p><strong>Data Protection Officer:</strong> dpo@futuremediadigital.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}