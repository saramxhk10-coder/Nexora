import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — NexoraAI",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="[date to be set on publish]">
      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          1. Scope
        </h2>
        <p className="mt-3 leading-relaxed">
          This Privacy Policy explains how NexoraAI collects, uses, and
          protects information in the course of providing AI-based lead
          automation to real estate agencies, brokers, and developers in the
          UAE and Saudi Arabia (&quot;client&quot;), including information
          about the client&apos;s own leads gathered through the Service.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          2. Information we collect
        </h2>
        <p className="mt-3 leading-relaxed">
          On behalf of the client, the Service collects information shared
          by leads during conversations — typically name, phone number,
          budget range, preferred location, property type, purchase
          timeline, and payment preference — along with conversation logs
          needed to hand the lead over to the client&apos;s sales team.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          3. How we use it
        </h2>
        <p className="mt-3 leading-relaxed">
          This information is used solely to respond to enquiries, qualify
          leads, schedule appointments, and update the client&apos;s CRM or
          lead sheet. It is not sold, and it is not used to train models on
          behalf of any party other than improving the client&apos;s own
          automated responses.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          4. Data sharing
        </h2>
        <p className="mt-3 leading-relaxed">
          Messages sent via WhatsApp are processed through Meta&apos;s
          WhatsApp Business Platform, subject to Meta&apos;s own data-handling
          terms. Qualified lead data is shared with the client&apos;s
          nominated CRM, spreadsheet, or calendar system as configured for
          that client.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          5. Data retention
        </h2>
        <p className="mt-3 leading-relaxed">
          Conversation and lead data is retained for as long as needed to
          deliver the Service and support the client&apos;s sales follow-up,
          or as otherwise agreed with the client.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          6. Security
        </h2>
        <p className="mt-3 leading-relaxed">
          Data in transit is encrypted, access to conversation logs is
          limited to what&apos;s needed to operate the Service, and audit
          trails are kept of automated conversations.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          7. Your rights
        </h2>
        <p className="mt-3 leading-relaxed">
          Individuals whose data is processed through the Service may request
          access to, correction of, or deletion of their information, in line
          with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of
          Personal Data and equivalent Saudi data-protection regulation.
          Requests should be directed to the real estate agency the
          individual originally contacted, who can coordinate with NexoraAI
          as needed.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          8. International transfers
        </h2>
        <p className="mt-3 leading-relaxed">
          Data may be processed on infrastructure located outside the UAE or
          Saudi Arabia by our hosting and messaging providers, with
          appropriate safeguards in place.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          9. Changes to this policy
        </h2>
        <p className="mt-3 leading-relaxed">
          This policy may be updated from time to time. Material changes will
          be communicated to clients directly.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          10. Contact
        </h2>
        <p className="mt-3 leading-relaxed">
          Questions about this policy can be sent to
          muhammad.saram@nexoraia.store.
        </p>
      </section>
    </LegalPage>
  );
}
