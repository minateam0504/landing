import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          
          <div className="space-y-10 text-lg text-ink/80 leading-relaxed font-light">
            <div className="pb-8 border-b border-sage/10">
              <p className="text-sm uppercase tracking-widest font-bold text-ink/40">
                Effective Date: November 12, 2025
              </p>
            </div>

            <p>These Terms of Service (“Terms”) constitute a legally binding agreement between you (“User” or “you”) and Mina, Inc. (“Mina,” “we,” “us,” or “our”) governing your access to and use of Mina's mobile application, website, and related services (collectively, the “Platform”). By creating an account, accessing, or using the Platform, you agree to be bound by these Terms in their entirety.</p>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">1. Role of Mina</h2>
              <p className="mb-4">Mina provides an online Platform that facilitates the listing, discovery, and transaction of secondhand baby and children's goods. Mina does not own, inspect, store, or guarantee any items listed on the Platform. All transactions are conducted directly between Users. Mina is not the seller of record, nor a party to any contract between Users, and assumes no responsibility for the condition, safety, legality, or fitness of items exchanged.</p>
              <p>The following additional policies are incorporated into and made part of these Terms by reference: (i) the Prohibited Items Policy; (ii) the Refund & Dispute Policy; (iii) the Payment & Tax Disclaimer; and (iv) The Privacy Policy. By using the Platform, you agree to comply with and be bound by all such policies, as updated from time to time.</p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">2. Eligibility</h2>
              <p>You must be at least eighteen (18) years of age and a resident of the United States to use the Platform. By registering an account, you represent and warrant that you satisfy these eligibility requirements.</p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">3. User Accounts</h2>
              <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Mina may suspend or terminate your account at any time for violation of these Terms or for conduct deemed detrimental to the Platform's integrity or community.</p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">4. User Content and License</h2>
              <p>By submitting, posting, or otherwise making available any content (including but not limited to listings, photos, descriptions, reviews, or communications) ("User Content"), you grant Mina a worldwide, perpetual, irrevocable, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, distribute, publicly perform, display, and otherwise exploit such User Content in connection with the operation, promotion, development, and improvement of the Platform and Mina's business, including but not limited to AI training, resale intelligence, and marketing purposes. You represent and warrant that you have all rights necessary to grant this license.</p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">5. Seller Warranties</h2>
              <p>By listing an item on the Platform, you represent and warrant that: (i) you are the lawful owner of the item and have the right to sell it; (ii) the item is accurately described and not subject to recall, prohibition, or restriction under applicable law; and (iii) the item is safe, functional, and not materially misrepresented.</p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">6. Payments, Fees, and Payouts</h2>
              <p>All payments are processed by Stripe, Inc. through Stripe Connect. Mina may charge service fees as disclosed at the time of transaction. Mina reserves the right, in its sole discretion, to withhold, delay, cancel, or reverse payouts in the event of suspected fraud, misrepresentation, violation of policy, or other circumstances threatening trust and safety. Users are solely responsible for compliance with their own tax obligations. Mina does not provide tax or legal advice.</p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">7. Cancellations, No-Shows, Disputes and Consequences for Violation</h2>
              <p>Transactions are subject to the Refund & Dispute Policy. Mina reserves the right, in its sole discretion, to cancel transactions, withhold or reverse payouts, and take enforcement action (including suspension or termination of accounts) in cases of suspected fraud, misrepresentation, prohibited items, no-shows, or other violations of Platform policies. Mina's determination of disputes is final and binding. Violations of any policies may result in the User being banned and barred from any and all future use of the Platform subject to Mina's sole discretion.</p>
            </section>
            
            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">8. Disclaimers; As-is Transactions</h2>
              <p className="font-bold text-ink">ALL ITEMS ARE PROVIDED "AS IS," "WITH ALL FAULTS," AND "AS AVAILABLE." MINA DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, TITLE, AND QUIET ENJOYMENT. MINA DOES NOT GUARANTEE THAT ITEMS WILL BE SAFE, LEGAL, OR FREE OF DEFECTS. USERS ASSUME ALL RISKS ARISING FROM TRANSACTIONS AND IN-PERSON MEETUPS.</p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">9. Indemnification</h2>
              <p>You agree to defend, indemnify, and hold harmless Mina, its affiliates, officers, directors, employees, and agents from and against any claims, demands, losses, liabilities, damages, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to: (i) your use of the Platform; (ii) your User Content; (iii) your items or transactions; (iv) your violation of these Terms or applicable law; or (v) injury, harm, or damage caused by items you sell, purchase, or exchange.</p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">10. Disclaimer of Liability</h2>
              <p className="font-bold text-ink">TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL MINA OR ITS AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF THE PLATFORM. MINA'S TOTAL LIABILITY SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT OF FEES ACTUALLY RECEIVED BY MINA FROM YOU IN CONNECTION WITH THE TRANSACTION AT ISSUE, OR (B) ONE HUNDRED U.S. DOLLARS ($100).</p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">11. Arbitration and Waiver of Class Actions</h2>
              <div className="space-y-4">
                <p className="font-bold text-ink uppercase">ANY DISPUTE, CONTROVERSY, OR CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE PLATFORM SHALL BE RESOLVED EXCLUSIVELY BY FINAL AND BINDING ARBITRATION ADMINISTERED BY THE AMERICAN ARBITRATION ASSOCIATION ("AAA") UNDER ITS CONSUMER ARBITRATION RULES. THE SEAT OF ARBITRATION SHALL BE SAN FRANCISCO, CALIFORNIA.</p>
                <p className="font-bold text-ink uppercase">YOU AND MINA EXPRESSLY WAIVE THE RIGHT TO A TRIAL BY JURY. YOU AND MINA FURTHER AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, COLLECTIVE, OR REPRESENTATIVE ACTION. CLASS ARBITRATIONS, CLASS ACTIONS, AND PRIVATE ATTORNEY GENERAL ACTIONS ARE NOT PERMITTED.</p>
                <p>The arbitrator shall have exclusive authority to resolve any dispute relating to the interpretation, applicability, or enforceability of this arbitration provision. Judgment on any arbitration award may be entered in any court of competent jurisdiction.</p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">12. Modifications</h2>
              <p>Mina may amend these Terms at any time by posting updated terms on the Platform or by providing notice via email or in-app notification. Your continued use of the Platform constitutes acceptance of any such amendments.</p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-ink mb-6">13. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.</p>
            </section>

            <section className="pt-12 border-t border-sage/10">
              <h2 className="text-3xl font-serif text-ink mb-6">14. Contact</h2>
              <p>Questions should be directed to: <a href="mailto:hello@getmina.app" className="text-sage font-bold hover:text-olive transition-colors ml-1">hello@getmina.app</a></p>
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

export default TermsOfService;
