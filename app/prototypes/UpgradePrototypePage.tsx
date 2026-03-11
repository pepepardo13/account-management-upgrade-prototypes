import { useMemo, useState } from "react";

import "./upgradePrototype.css";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ExternalLinkIcon,
  GlobeIcon,
  PrototypeBadge,
  PrototypeButton,
  PrototypeNotice,
  PrototypeRadioCard,
} from "./prototypeDesignSystem.tsx";

export type UpgradeVariant = "A" | "B" | "C";

type BillingCycle = "monthly" | "annual";

type UpgradePrototypePageProps = {
  variant: UpgradeVariant;
};

const footerLinks = [
  "About Elements",
  "Plans & Pricing",
  "License Terms",
  "Terms & Conditions",
  "Privacy Policy",
  "Cookies",
  "Do not share my personal information",
  "Help Center",
  "Cookie Settings",
];

const socialItems = ["yt", "tt", "fb", "x", "pn", "ig"];

function getVariantContent(variant: UpgradeVariant) {
  return {
    showTopSuccess: variant === "C",
    showMidSuccess: variant === "B" || variant === "C",
    showBottomSuccess: variant === "A",
  };
}

function formatPrice(cycle: BillingCycle) {
  return cycle === "monthly" ? "USD $00.00/month" : "USD $00.00/year";
}

function formatRenewal(cycle: BillingCycle) {
  return cycle === "monthly" ? "monthly" : "yearly";
}

function SummaryRow({
  label,
  value,
  positive = false,
  total = false,
  helper,
}: {
  label: string;
  value: string;
  positive?: boolean;
  total?: boolean;
  helper?: string;
}) {
  return (
    <div
      className={[
        "prototype-summary-row",
        positive ? "is-positive" : "",
        total ? "is-total" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="prototype-summary-label">
        {helper ? (
          <div className="prototype-credit-copy">
            <span className="prototype-credit-title">{label}</span>
            <span className="prototype-credit-detail">{helper}</span>
          </div>
        ) : (
          label
        )}
      </div>
      <div className="prototype-summary-value">{value}</div>
    </div>
  );
}

export function UpgradePrototypePage({
  variant,
}: UpgradePrototypePageProps) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const content = useMemo(() => getVariantContent(variant), [variant]);
  const total = formatPrice(billingCycle);
  const renewalCycle = formatRenewal(billingCycle);

  return (
    <div className="prototype-page">
      <header className="prototype-topbar">
        <div className="prototype-brand">
          <span className="prototype-brand-mark">e</span>
          <span>envato</span>
        </div>
        <div className="prototype-user">
          Juan <ChevronDownIcon className="ds-icon ds-icon--inline" />
        </div>
      </header>

      <main className="prototype-shell">
        <div className="prototype-content">
          <button className="prototype-back" type="button" aria-label="Go back">
            <ChevronLeftIcon className="ds-icon" />
          </button>

          <div className="prototype-title-block">
            <h1 className="prototype-title">Upgrade to the Plus Individual plan</h1>
            {content.showTopSuccess && (
              <PrototypeNotice
                tone="success"
                title="Your Plus individual plan will start right away!"
              >
                You can keep using your existing downloads and licenses.
              </PrototypeNotice>
            )}
          </div>

          <div className="prototype-stack">
            <PrototypeNotice title="Current plan: Core Individual, renews monthly.">
              Your next payment of $33.00 (excluding tax and discounts) is
              scheduled for Oct 30, 2025, in 30 days.
            </PrototypeNotice>

            <section className="prototype-section">
              <h2 className="prototype-subheading">Order summary</h2>
            </section>

            <section className="prototype-section">
              <h3 className="prototype-heading">Confirm your billing cycle</h3>
              <div className="prototype-billing-grid">
                <PrototypeRadioCard
                  title="Monthly"
                  price="$XX.XX/m + local tax"
                  selected={billingCycle === "monthly"}
                  onClick={() => setBillingCycle("monthly")}
                />
                <PrototypeRadioCard
                  title="Annual"
                  price="$XX.XX/m + local tax"
                  helper="Billed annually at $XXX.XX/year + local tax"
                  badge={<PrototypeBadge>Save 50%</PrototypeBadge>}
                  selected={billingCycle === "annual"}
                  onClick={() => setBillingCycle("annual")}
                />
              </div>
            </section>

            <section className="prototype-section">
              <h3 className="prototype-heading">Payment method</h3>
              <div className="prototype-payment-row">
                <div className="prototype-payment-card">
                  <span className="prototype-mastercard" />
                  <span>**** **** **** 8757</span>
                </div>
                <PrototypeButton
                  iconLeading={<ExternalLinkIcon className="ds-icon ds-icon--button" />}
                  variant="secondary"
                >
                  Update payment method
                </PrototypeButton>
              </div>
            </section>

            <section className="prototype-section">
              <h3 className="prototype-heading">
                Plus Individual monthly subscription
              </h3>
              <SummaryRow label="Price" value="$00.00/year" />
              <SummaryRow label="Tax" value="$0.00/year" />
              <div className="prototype-divider" />
              <SummaryRow
                label="Credit from your current plan"
                value="-$0.00"
                positive={true}
                helper="200 days remaining in your billing period"
              />
              {content.showMidSuccess && (
                <PrototypeNotice
                  tone="success"
                  title="Your Plus individual plan will start right away!"
                >
                  You can keep using your existing downloads and licenses.
                </PrototypeNotice>
              )}
            </section>

            <section className="prototype-section">
              <SummaryRow label="Total" value={total} total={true} />
              <PrototypeNotice>
                The credit from your current plan and total amount shown above are
                an estimate. When you upgrade, you will receive credit for the
                unused portion of your current plan, so you will pay only the
                pro-rated difference. Because charges are calculated to the moment
                you hit the confirm button, the final amount may vary slightly. The
                exact amounts will appear on your invoice.
              </PrototypeNotice>
              <div className="prototype-renewal-copy">
                On <strong>Next renewal date</strong>, you will be charged{" "}
                <strong>{total}</strong>. Your plan renews{" "}
                <strong>{renewalCycle}</strong>.
              </div>
            </section>

            <section className="prototype-action-block">
              {content.showBottomSuccess && (
                <PrototypeNotice
                  tone="success"
                  title="Your Plus individual plan will start right away!"
                >
                  You can keep using your existing downloads and licenses.
                </PrototypeNotice>
              )}
              <div className="prototype-button-row">
                <PrototypeButton variant="primary">Confirm</PrototypeButton>
                <PrototypeButton variant="secondary">Cancel</PrototypeButton>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="prototype-footer">
        <div className="prototype-footer-inner">
          <div className="prototype-footer-links">
            {footerLinks.map((item, index) => (
              <div key={item} className="prototype-footer-link-item">
                {index > 0 && <span className="prototype-footer-divider">|</span>}
                <a href="/">{item}</a>
              </div>
            ))}
          </div>

          <div className="prototype-footer-social">
            {socialItems.map((item) => (
              <span key={item} className="prototype-social-pill">
                {item}
              </span>
            ))}
            <span className="prototype-locale">
              <GlobeIcon className="ds-icon ds-icon--inline" />
              English
              <ChevronDownIcon className="ds-icon ds-icon--inline" />
            </span>
          </div>

          <p className="prototype-footer-copy">
            © 2023 Envato Elements Pty Ltd. Trademarks and brands are the property
            of their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
}
