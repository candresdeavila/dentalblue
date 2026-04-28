export default {
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "page",
      title: "Page",
      type: "string",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "About", value: "about" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "desktopImage",
      title: "Desktop Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    },
    {
      name: "mobileImage",
      title: "Mobile Image",
      type: "image",
      options: { hotspot: true },
      description:
        "Optional mobile-specific image. If omitted, desktop image is used.",
    },
    {
      name: "alt",
      title: "Image Alt Text",
      type: "string",
      validation: (rule) => rule.required().min(3).max(140),
    },
    {
      name: "primaryCtaLink",
      title: "Primary CTA Link",
      type: "string",
      description: "Example: #services, /about, https://example.com",
      validation: (rule) => rule.required(),
    },
    {
      name: "secondaryCtaLink",
      title: "Secondary CTA Link",
      type: "string",
      description: "Example: #team, /contact, https://wa.me/...",
      validation: (rule) => rule.required(),
    },
    {
      name: "eyebrowOverride",
      title: "Eyebrow Override",
      type: "string",
      description: "Optional override for the i18n eyebrow text.",
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
      validation: (rule) => rule.required(),
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first when multiple are active.",
    },
  ],
  preview: {
    select: {
      title: "page",
      media: "desktopImage",
      isActive: "isActive",
    },
    prepare({ title, media, isActive }) {
      const pageLabel = title ? title.toUpperCase() : "UNSET";
      return {
        title: `Hero: ${pageLabel}`,
        subtitle: isActive ? "Active" : "Inactive",
        media,
      };
    },
  },
};
