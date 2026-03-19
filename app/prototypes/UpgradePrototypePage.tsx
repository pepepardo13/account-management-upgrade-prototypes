import { useMemo, useState, type ReactNode } from "react";

import "./upgradePrototype.css";
import envatoLogoPng from "./assets/envato-logo.png";
import figmaBackSvg from "./assets/figma-back.svg";
import figmaChevronDownSvg from "./assets/figma-chevron-down.svg";
import figmaGlobeSvg from "./assets/figma-globe.svg";
import figmaInfoSvg from "./assets/figma-info.svg";
import figmaLocaleChevronSvg from "./assets/figma-locale-chevron.svg";
import figmaSuccessSvg from "./assets/figma-success.svg";
import facebookIconSvg from "./assets/icon-facebook.svg";
import instagramIconSvg from "./assets/icon-instagram.svg";
import pinterestIconSvg from "./assets/icon-pinterest.svg";
import redditIconPng from "./assets/reddit-icon.png";
import tiktokIconSvg from "./assets/icon-tiktok.svg";
import youtubeIconSvg from "./assets/icon-youtube.svg";
import {
  ExternalLinkIcon,
  PrototypeBadge,
  PrototypeButton,
  PrototypeRadioCard,
} from "./prototypeDesignSystem.tsx";

export type UpgradeVariant = "A" | "B" | "C" | "A_ALT" | "B_ALT" | "C_ALT";

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

const socialItems = ["yt", "tt", "fb", "reddit", "pn", "ig"];

const socialAssets = [
  youtubeIconSvg,
  tiktokIconSvg,
  facebookIconSvg,
  redditIconPng,
  pinterestIconSvg,
  instagramIconSvg,
];

function getVariantContent(variant: UpgradeVariant) {
  const isAlt =
    variant === "A_ALT" || variant === "B_ALT" || variant === "C_ALT";

  return {
    showTopSuccess: variant === "C" || variant === "C_ALT",
    showMidSuccess: variant === "B",
    showBottomSuccess: variant === "A" || variant === "A_ALT",
    showPostActionSuccess: variant === "B_ALT",
    preventInvoiceOrphan: variant === "A_ALT",
    successSingleLine: isAlt,
  };
}

function formatPrice(cycle: BillingCycle) {
  return cycle === "monthly" ? "USD $600.00" : "USD $600.00";
}

function formatRenewal(cycle: BillingCycle) {
  return cycle === "monthly" ? "annually" : "annually";
}

function InlineSuccess({
  icon = true,
  singleLine = false,
}: {
  icon?: boolean;
  singleLine?: boolean;
}) {
  return (
    <div
      className={`prototype-success-inline${icon ? "" : " prototype-success-inline--text-only"}`}
    >
      {icon && <img alt="" className="prototype-icon-24" src={figmaSuccessSvg} />}
      <div
        className={`prototype-success-copy${singleLine ? " prototype-success-copy--single-line" : ""}`}
      >
        <p className="prototype-success-title">
          Your Plus individual plan will start right away!
        </p>
        {!singleLine && (
          <p className="prototype-success-body">
            You can keep using your existing downloads and licenses.
          </p>
        )}
      </div>
    </div>
  );
}

function InfoBanner({ children }: { children: ReactNode }) {
  return (
    <div className="prototype-info-banner">
      <div className="prototype-info-content">
        <div className="prototype-info-icon-wrap">
          <img alt="" className="prototype-icon-24" src={figmaInfoSvg} />
        </div>
        <div className="prototype-info-copy">{children}</div>
      </div>
    </div>
  );
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
          <img alt="Envato" className="prototype-brand-logo" src={envatoLogoPng} />
        </div>
        <div className="prototype-user">
          <span>Juan</span>
          <img alt="" className="prototype-icon-16" src={figmaChevronDownSvg} />
        </div>
      </header>

      <main className="prototype-shell">
        <div className="prototype-content">
          <button className="prototype-back" type="button" aria-label="Go back">
            <img alt="" className="prototype-icon-24" src={figmaBackSvg} />
          </button>

          <div className="prototype-title-block">
            <h1 className="prototype-title">Upgrade to the Plus Individual plan</h1>
            {content.showTopSuccess && (
              <InlineSuccess singleLine={content.successSingleLine} />
            )}
          </div>

          <div className="prototype-stack">
            <InfoBanner>
              <p className="prototype-banner-title">
                Current plan: Core Individual, renews monthly.
              </p>
              <p className="prototype-banner-body">
                Your next payment of <strong>$33.00</strong> (excluding tax and
                discounts) is scheduled for <strong>Oct 30, 2026</strong> in 30
                days.
              </p>
            </InfoBanner>

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
                Plus Individual annual subscription
              </h3>
              <SummaryRow label="Price" value="$1000.00/year" />
              <SummaryRow label="Tax" value="$100.00/year" />
              <div className="prototype-divider" />
              <SummaryRow label="Total" value="$1100.00/year" total={true} />
              <SummaryRow
                label="Credit from your current plan"
                value="-$500.00"
                positive={true}
                helper="200 days remaining in your billing period"
              />
              <div className="prototype-divider" />
              {content.showMidSuccess && (
                <div className="prototype-summary-success">
                  <InlineSuccess
                    icon={false}
                    singleLine={content.successSingleLine}
                  />
                </div>
              )}
            </section>

            <section className="prototype-section prototype-today-section">
              <SummaryRow label="What you will pay today" value={total} total={true} />
              <InfoBanner>
                <p className="prototype-banner-body">
                  The credit from your current plan and the total amount shown
                  are estimates. When you upgrade, you&apos;ll receive
                  credit for the unused portion of your current plan, so
                  you&apos;ll only pay the prorated difference. The final amount
                  may vary slightly as charges are calculated when you confirm
                  your upgrade.{" "}
                  The exact amounts will appear on{" "}
                  {content.preventInvoiceOrphan ? "your\u00A0invoice." : "your invoice."}
                </p>
              </InfoBanner>
              <div className="prototype-renewal-copy">
                On <strong>Mar 2027</strong>, you will be charged{" "}
                <strong>USD $1100.00</strong>. Your plan renews{" "}
                <strong>{renewalCycle}</strong>.
              </div>
            </section>

            <section className="prototype-action-block">
              {content.showBottomSuccess && (
                <InlineSuccess singleLine={content.successSingleLine} />
              )}
              <div className="prototype-button-row">
                <PrototypeButton variant="primary">Confirm</PrototypeButton>
                <PrototypeButton variant="secondary">Cancel</PrototypeButton>
              </div>
              {content.showPostActionSuccess && (
                <InlineSuccess singleLine={content.successSingleLine} />
              )}
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
            {socialAssets.map((src, index) => (
              <button
                key={socialItems[index]}
                className="prototype-social-pill"
                type="button"
              >
                <img alt="" className="prototype-icon-24" src={src} />
              </button>
            ))}
            <button className="prototype-locale" type="button">
              <img alt="" className="prototype-icon-24" src={figmaGlobeSvg} />
              <span>English</span>
              <img alt="" className="prototype-icon-24" src={figmaLocaleChevronSvg} />
            </button>
          </div>

          <p className="prototype-footer-copy">
            © 2026 Envato Trademarks and brands are the property of their
            respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
}
