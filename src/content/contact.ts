export const contact = {
  title: "Get in Touch",
  subtitle: "Contact Details",
  description: "Have questions or want to learn more? Reach out and we will be happy to help.",
  details: [
    { label: "Address", value: "Near Society Office, Shaheen Town, Lehtrar Rd, Islamabad" },
    { label: "E-mail", value: "academydrd@gmail.com" },
    { label: "Contact", value: "+92 315 2191891" },
    { label: "Hours of Operation", value: "10:00 AM – 07:00 PM" },
  ],
  formTitle: "Ready to Get Started?",
  formSubtitle: "Fill out the form below. Required fields are marked *",
} as const;

export const footer = {
  columns: [
    {
      title: "Programs",
      links: [
        { label: "Learn From Scratch", href: "#programs" },
        { label: "Revision Classes", href: "#programs" },
        { label: "Live Q&A", href: "#programs" },
        { label: "Market Sentiment", href: "#programs" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Why Us", href: "#why-us" },
        { label: "How to Apply", href: "#how-to-apply" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Get in Touch", href: "#contact" },
        { label: "Apply for Membership", href: "#contact" },
      ],
    },
  ],
  copyright: "© Dr D Academy. All rights reserved.",
  tagline: "Elite Trading Education",
} as const;
