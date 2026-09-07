import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — NexoraAI",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="[date to be set on publish]">
      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          1. Agreement to terms
        </h2>
        <p className="mt-3 leading-relaxed">
          These Terms of Service (&quot;Terms&quot;) govern access to and use
          of NexoraAI&apos;s AI-powered lead automation service (the
          &quot;Service&quot;), provided to real estate agencies, brokers,
          and property developers (&quot;you&quot;, &quot;client&quot;). By
          engaging NexoraAI or using the Service, you agree to these Terms.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          2. Description of service
        </h2>
        <p className="mt-3 leading-relaxed">
          NexoraAI provides AI-based conversational automation for lead
          capture, qualification, follow-up, and appointment booking across
          channels including WhatsApp, Instagram, and other integrations
          agreed with the client. Specific scope, channels, and integrations
          are set out in the client&apos;s service agreement or proposal.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          3. Client responsibilities
        </h2>
        <p className="mt-3 leading-relaxed">
          You are responsible for the accuracy of information provided to
          configure the Service, for holding any necessary consents from
          your own leads/customers to be contacted via automated messaging,
          and for compliance with WhatsApp Business Platform policies and
          applicable UAE/Saudi consumer-protection and telecommunications
          regulations that apply to your own outbound communications.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          4. Data handling
        </h2>
        <p className="mt-3 leading-relaxed">
          Lead and conversation data processed through the Service is handled
          as described in our{" "}
          <a href="/privacy" className="text-violet-soft underline">
            Privacy Policy
          </a>
          . NexoraAI acts as a service provider processing this data on your
          behalf to deliver the Service.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          5. Fees and payment
        </h2>
        <p className="mt-3 leading-relaxed">
          Fees, billing frequency, and payment terms are set out in the
          client&apos;s individual service agreement or proposal, not in
          these general Terms.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          6. Intellectual property
        </h2>
        <p className="mt-3 leading-relaxed">
          NexoraAI retains ownership of the underlying automation system,
          conversation engine, and platform. Client-specific configurations,
          scripts, and lead data belong to the client.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          7. Limitation of liability
        </h2>
        <p className="mt-3 leading-relaxed">
          The Service assists with lead response and qualification but does
          not guarantee sales outcomes. To the extent permitted by law,
          NexoraAI&apos;s liability is limited as set out in the client
          service agreement.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          8. Termination
        </h2>
        <p className="mt-3 leading-relaxed">
          Either party may terminate the Service in accordance with the
          notice period set out in the client service agreement.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          9. Governing law
        </h2>
        <p className="mt-3 leading-relaxed">
          These Terms are governed by the laws of the United Arab Emirates,
          without prejudice to any mandatory consumer-protection provisions
          applicable in the client&apos;s home jurisdiction.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-mist">
          10. Contact
        </h2>
        <p className="mt-3 leading-relaxed">
          Questions about these Terms can be sent to
          muhammad.saram@nexoraia.store.
        </p>
      </section>
    </LegalPage>
  );
}
