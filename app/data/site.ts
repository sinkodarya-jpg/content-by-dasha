export const site = {
  email: "tookbydasha@gmail.com",
  location: "based in denmark",
  cvr: "46461053",
  copyrightName: "Daria Sinko",
  contact: {
    backgroundImage: "/images/contacts/say-hello.png",
    copiedMessage: "Copied to clipboard",
    paragraphs: [
      "have an idea for a collaboration, a gift you'd love to send, or a bigger project in mind?",
      "i'd love to hear about it — reach out for anything and everything.",
    ],
    signoff: "xx dasha",
  },
} as const;

export const infoLinks = [
  { label: "prices", href: "/info?tab=prices", accent: false },
  { label: "metrics", href: "/info?tab=metrics", accent: false },
  { label: "contact me", href: "/info?tab=contacts", accent: true },
] as const;

export const introFolders = [
  { label: "media kit", href: "/info?tab=prices" },
  { label: "inst metrics", href: "/info?tab=metrics" },
] as const;

export const navigationItems = [
  { label: "Projects", href: "/" },
  { label: "Prices", href: "/info?tab=prices" },
  { label: "Metrics", href: "/info?tab=metrics" },
  { label: "Contacts", href: "/info?tab=contacts" },
] as const;
