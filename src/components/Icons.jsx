// ─────────────────────────────────────────────
// Shared SVG Icons
// ─────────────────────────────────────────────

export const ArrowRight = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CheckCircle = ({ size = 22, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
    <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 11 L10 14 L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StarIcon = ({ size = 22, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
    <path d="M11 2L13 7.5L20 8.3L15.5 12.7L16.7 19L11 16L5.3 19L6.5 12.7L2 8.3L9 7.5L11 2Z"
      stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
  </svg>
);

export const PersonIcon = ({ size = 28, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" {...props}>
    <circle cx="14" cy="10" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 26 C4 20 8 17 14 17 C20 17 24 20 24 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <rect x="2" y="2" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="7.5" cy="7.5" r="2.8" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="11.2" cy="3.8" r="0.7" fill="currentColor"/>
  </svg>
);

export const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M10 2H8C6.9 2 6 2.9 6 4V6H4V9H6V14H9V9H11L11.5 6H9V4.5C9 4.2 9.2 4 9.5 4H11V2H10Z"
      stroke="currentColor" strokeWidth="1.3" fill="none"/>
  </svg>
);

export const TikTokIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M10 2C10 3.7 11.3 5 13 5V7.5C11.8 7.5 10.7 7.1 9.8 6.4V10.2C9.8 12.3 8.1 14 6 14C3.9 14 2.2 12.3 2.2 10.2C2.2 8.1 3.9 6.4 6 6.4V9C5.3 9 4.7 9.6 4.7 10.2C4.7 10.9 5.3 11.5 6 11.5C6.7 11.5 7.3 10.9 7.3 10.2V2H10Z"
      stroke="currentColor" strokeWidth="1.3" fill="none"/>
  </svg>
);

export const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 1C6.2 1 4 3.2 4 6C4 10 9 16 9 16C9 16 14 10 14 6C14 3.2 11.8 1 9 1Z"
      stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="9" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M3 4H15C15.6 4 16 4.4 16 5V13C16 13.6 15.6 14 15 14H3C2.4 14 2 13.6 2 13V5C2 4.4 2.4 4 3 4Z"
      stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M2 5L9 10L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M5 2H8L9.5 6L7.5 7C8.4 9 10 10.6 12 11.5L13 9.5L17 11V14C17 15.1 16.1 16 15 16C8.4 16 2 9.6 2 3C2 1.9 2.9 1 4 1"
      stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

export const ChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M19 4H3C2.4 4 2 4.4 2 5V15C2 15.6 2.4 16 3 16H7V20L13 16H19C19.6 16 20 15.6 20 15V5C20 4.4 19.6 4 19 4Z"
      stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    <line x1="7" y1="9" x2="15" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="7" y1="12" x2="12" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Per-service SVG icons
export const ServiceIcons = {
  "01": () => (
    <svg className="service-icon" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="22" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M20 28 Q24 20 28 24 Q32 28 36 20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <circle cx="28" cy="34" r="4" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  "02": () => (
    <svg className="service-icon" viewBox="0 0 56 56" fill="none">
      <path d="M28 12 C16 18 12 28 16 38 C20 48 36 50 42 42 C48 34 44 20 28 12Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M22 30 C22 26 25 24 28 26 C31 28 31 32 28 34" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "03": () => (
    <svg className="service-icon" viewBox="0 0 56 56" fill="none">
      <path d="M18 38 Q18 22 28 18 Q38 22 38 38" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M22 38 Q22 28 28 25 Q34 28 34 38" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <line x1="28" y1="18" x2="28" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="28" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  "04": () => (
    <svg className="service-icon" viewBox="0 0 56 56" fill="none">
      <path d="M14 28 L42 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 20 L36 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 36 L36 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="28" cy="28" r="16" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="28" cy="28" r="4" fill="currentColor" opacity="0.3"/>
    </svg>
  ),
  "05": () => (
    <svg className="service-icon" viewBox="0 0 56 56" fill="none">
      <ellipse cx="28" cy="32" rx="16" ry="12" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M18 24 Q28 16 38 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M22 36 Q28 40 34 36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "06": () => (
    <svg className="service-icon" viewBox="0 0 56 56" fill="none">
      <path d="M28 14 L32 22 L42 24 L35 31 L37 41 L28 36 L19 41 L21 31 L14 24 L24 22 Z"
        stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <circle cx="28" cy="28" r="5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
};
