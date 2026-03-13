import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="bg-cream font-sans text-ink min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 py-4 shadow-sm border-b border-sage/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center text-white font-serif italic text-xl">M</div>
            <span className="text-2xl font-serif tracking-tight font-bold">MINA</span>
          </Link>
          <Link 
            to="/" 
            className="text-sm font-bold text-sage uppercase tracking-widest hover:text-olive transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] shadow-xl p-12 md:p-16 border border-sage/5"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-ink mb-12 leading-tight">
            Privacy Policy
          </h1>

          <div className="space-y-10 text-lg text-ink/80 leading-relaxed font-light">
            <div className="pb-8 border-b border-sage/10">
              <p className="text-xl font-serif italic text-sage mb-2">Mina – Privacy Policy</p>
              <p className="text-sm uppercase tracking-widest font-bold text-ink/40">
                Effective Date: October 31, 2025
              </p>
            </div>

            <p>
              This Privacy Policy (“Policy”) explains how Mina, Inc.
              (“Mina,” “we,” “us,” or “our”) collects, uses,
              discloses, and protects your information when you use
              the Mina mobile application, website, and related
              services (collectively, the “Platform”). By accessing or
              using the Platform, you consent to the collection and
              processing of your information in accordance with this
              Policy.
            </p>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">1. Information We Collect</h2>
              <div className="space-y-4">
                <p>
                  <strong className="font-bold text-ink">a. Information Provided by You:</strong> Account
                  details, profile data, photos, listings, descriptions,
                  communications, and payment information (processed by
                  Stripe).
                </p>
                <p>
                  <strong className="font-bold text-ink">b. Automatically Collected Information:</strong>
                  IP address, device identifiers, browser and OS, usage
                  logs, and geolocation (if enabled).
                </p>
                <p>
                  <strong className="font-bold text-ink">c. Third-Party Sources:</strong> Identity and
                  payment verification from Stripe; authentication data
                  from login providers (e.g., Google, Apple).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">2. Use of Information</h2>
              <p className="mb-4">We use information for the following purposes:</p>
              <ul className="space-y-3 list-none">
                {[
                  "to operate, provide, and improve the Platform;",
                  "to process transactions, facilitate pickups, and handle disputes;",
                  "to maintain safety, trust, and compliance;",
                  "to communicate with you regarding your account and the Platform;",
                  "to analyze, aggregate, and anonymize data for the development, training, and improvement of artificial intelligence systems, resale intelligence analytics, product features, and marketing initiatives; and",
                  "for any other purpose disclosed to you at the time of collection or with your consent."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-sage font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">3. Disclosure of Information</h2>
              <p className="mb-4">We may share your information:</p>
              <ul className="space-y-3 list-none">
                {[
                  "with other Users to the extent necessary to facilitate transactions;",
                  "with service providers (e.g., Stripe, hosting, analytics, support) under confidentiality obligations;",
                  "in connection with a merger, acquisition, or corporate transaction;",
                  "in response to lawful requests, legal process, or to enforce our policies; and",
                  "for purposes of aggregated and anonymized data analysis, research, and commercial use."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-sage font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">4. User Rights</h2>
              <p>
                Depending on your jurisdiction, you may have rights to
                access, correct, delete, or restrict processing of your
                personal data. Requests may be submitted to
                <a
                  href="mailto:hello@getmina.app"
                  className="text-sage font-bold hover:text-olive transition-colors ml-1"
                >hello@getmina.app</a>. These rights are subject to applicable state and
                federal law regarding record retention.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">5. Data Retention</h2>
              <p>
                We retain personal information as long as necessary for
                business purposes, dispute resolution, trust and safety
                enforcement, and compliance with state and federal law.
                Aggregated and anonymized data may be retained
                indefinitely.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">6. Children’s Privacy</h2>
              <p>
                The Platform is intended solely for individuals eighteen
                (18) years of age or older. We do not permit minors to
                create accounts or directly use the Platform. However,
                while providing personalized product recommendations,
                parents or legal guardians may voluntarily provide
                limited information regarding their children (such as
                age, weight, height, or developmental milestones). Such
                information is collected from and associated with the
                parent’s account and is processed solely for the purpose
                of improving Platform features. Mina does not knowingly
                solicit or permit direct participation by minors.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">7. Security</h2>
              <p>
                We employ administrative, technical, and physical
                safeguards to protect information, including encryption
                and access controls. However, no method of transmission
                or storage is entirely secure, and we disclaim liability
                for unauthorized access beyond our reasonable control.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">8. AI Processing and Automated Decisions</h2>
              <p>
                You expressly consent to the processing of your data,
                including personal data and User Content, by automated
                systems and artificial intelligence models, for purposes
                of providing personalized recommendations, pricing
                guidance, resale intelligence, and trust scoring. Such
                processing may involve profiling or automated
                decision-making technology or “ADMT”.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">9. California Consumer Rights</h2>
              <p className="mb-6">
                If you are a resident of California, you may have
                additional rights under the California Consumer Privacy
                Act (“CCPA”) as amended by the California Privacy Rights
                Act (“CPRA”), also known as Proposition 24, including
                the following:
              </p>

              <div className="space-y-6">
                <p>
                  <strong className="font-bold text-ink">(a) Right to Know:</strong> You may request
                  disclosure of (i) the categories and specific pieces of
                  personal information we have collected about you; (ii)
                  the categories of sources from which personal
                  information is collected; (iii) the business or
                  commercial purpose for collecting, using, or disclosing
                  personal information; and (iv) the categories of third
                  parties to whom we disclose personal information.
                </p>
                <p>
                  <strong className="font-bold text-ink">(b) Right to Delete:</strong> You may request
                  that we delete personal information we have collected
                  from you, subject to certain exceptions (such as
                  compliance with legal obligations, dispute resolution,
                  or trust and safety enforcement).
                </p>
                <p>
                  <strong className="font-bold text-ink">(c) Right to Correct:</strong> You may request
                  correction of inaccurate personal information maintained
                  about you.
                </p>
                <p>
                  <strong className="font-bold text-ink">(d) Right to Opt Out of Sale/Sharing:</strong>
                  Mina does not sell personal information and does not
                  share personal information for cross-context behavioral
                  advertising as those terms are defined under the CCPA as
                  amended.
                </p>
                <p>
                  <strong className="font-bold text-ink">(e) Right to Limit Use of Sensitive Information:</strong>
                  Mina does not use or disclose sensitive personal
                  information for purposes other than those permitted
                  under the CCPA as amended.
                </p>
                <p>
                  <strong className="font-bold text-ink">(f) Non-Discrimination:</strong> We will not
                  deny goods or services, charge you a different price, or
                  provide a different level or quality of goods or
                  services just because you exercised your rights under
                  the CCPA as amended.
                </p>
              </div>

              <p className="mt-8">
                To exercise these rights, please contact us at
                <a
                  href="mailto:hello@getmina.app"
                  className="text-sage font-bold hover:text-olive transition-colors ml-1"
                >hello@getmina.app</a>. We may require reasonable verification of your
                identity before fulfilling such requests. Authorized
                agents may make requests on your behalf subject to proof
                of authorization.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">10. California “Shine the Light” Disclosures</h2>
              <p>
                California residents are entitled to request and obtain
                once per calendar year information about the categories
                of personal information (if any) that Mina disclosed to
                third parties for their own direct marketing purposes in
                the preceding year, and the names and addresses of those
                third parties. Mina does not disclose personal
                information to third parties for their own direct
                marketing purposes. Requests may be submitted to
                <a
                  href="mailto:hello@getmina.app"
                  className="text-sage font-bold hover:text-olive transition-colors ml-1"
                >hello@getmina.app</a>.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">11. Modifications</h2>
              <p>
                We may amend this Policy from time to time. Updates will
                be communicated via the Platform or by email. Continued
                use of the Platform constitutes acceptance of any
                amended Policy.
              </p>
            </section>

            <section className="pt-12 border-t border-sage/10">
              <h2 className="text-3xl font-serif text-ink mb-6">12. Contact</h2>
              <p>
                Questions? Contact us at:
                <a
                  href="mailto:hello@getmina.app"
                  className="text-sage font-bold hover:text-olive transition-colors ml-1"
                >hello@getmina.app</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-sm tracking-widest uppercase">
            &copy; 2026 MINA APP. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
