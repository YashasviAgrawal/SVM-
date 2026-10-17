import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const ArrowRight = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...base} {...p}><path d="M4 12h15M13 6l6 6-6 6" /></svg>
);
export const ArrowLeft = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...base} {...p}><path d="M20 12H5M11 6l-6 6 6 6" /></svg>
);
export const ArrowUpRight = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Play = (p: P) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden fill="currentColor" {...p}><path d="M8 5.5v13a.8.8 0 0 0 1.2.7l10.4-6.5a.8.8 0 0 0 0-1.4L9.2 4.8A.8.8 0 0 0 8 5.5Z" /></svg>
);
export const Close = (p: P) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Phone = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
);
export const Mail = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const Pin = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...base} {...p}><path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const Clock = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Plus = (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Download = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...base} {...p}><path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" /></svg>
);
export const Instagram = (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></svg>
);
export const Facebook = (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden fill="currentColor" {...p}><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4a21 21 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" /></svg>
);
export const Youtube = (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden fill="currentColor" {...p}><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" /></svg>
);
export const Whatsapp = (p: P) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden fill="currentColor" {...p}><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" /></svg>
);
export const Menu = (p: P) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...base} {...p}><path d="M4 8h16M4 16h10" /></svg>
);
export const Expand = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...base} {...p}><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
);
