import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";

type IconProps = {
  className?: string;
};

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M14.5 6.5L9 12l5.5 5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M8.4 12.1l2.3 2.4 4.9-5.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function InfoCircleIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 10.25v5.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="7.5" fill="currentColor" r="1.1" />
    </svg>
  );
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M13.5 5.5h5v5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <path
        d="M10.5 13.5l8-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <path
        d="M18 13v4a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 17V7.5A1.5 1.5 0 0 1 7 6h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M3.5 12h17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
      />
      <path
        d="M12 3c2.4 2.4 3.7 5.7 3.7 9S14.4 18.6 12 21c-2.4-2.4-3.7-5.7-3.7-9S9.6 5.4 12 3z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M6.5 9.5L12 15l5.5-5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function PrototypeButton({
  children,
  className,
  variant = "secondary",
  iconLeading,
  ...props
}: PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    iconLeading?: ReactNode;
  }
>) {
  return (
    <button
      {...props}
      className={[
        "ds-button",
        variant === "primary" ? "ds-button--primary" : "ds-button--secondary",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      type={props.type ?? "button"}
    >
      {iconLeading && <span className="ds-button__icon">{iconLeading}</span>}
      <span>{children}</span>
    </button>
  );
}

export function PrototypeBadge({ children }: PropsWithChildren) {
  return <span className="ds-badge">{children}</span>;
}

export function PrototypeNotice({
  tone = "info",
  title,
  children,
}: PropsWithChildren<{
  tone?: "info" | "success";
  title?: string;
}>) {
  const icon =
    tone === "success" ? (
      <CheckCircleIcon className="ds-icon ds-icon--notice" />
    ) : (
      <InfoCircleIcon className="ds-icon ds-icon--notice" />
    );

  return (
    <div className={`ds-notice ds-notice--${tone}`}>
      <span className="ds-notice__icon">{icon}</span>
      <div className="ds-notice__content">
        {title && <strong>{title}</strong>}
        <div>{children}</div>
      </div>
    </div>
  );
}

export function PrototypeRadioCard({
  selected,
  title,
  price,
  helper,
  badge,
  onClick,
}: {
  selected: boolean;
  title: string;
  price: string;
  helper?: string;
  badge?: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className={`ds-radio-card${selected ? " ds-radio-card--selected" : ""}`}
      onClick={onClick}
      type="button"
    >
      <div className="ds-radio-card__header">
        <div className="ds-radio-card__title-row">
          <span className={`ds-radio${selected ? " ds-radio--selected" : ""}`} />
          <span className="ds-type ds-type--subheading">{title}</span>
        </div>
        {badge}
      </div>
      <div className="ds-type ds-type--body-small ds-color-secondary">{price}</div>
      {helper && (
        <div className="ds-type ds-type--body-small ds-color-secondary">
          {helper}
        </div>
      )}
    </button>
  );
}
