/* ==========================================================================
   Baum Design — site content
   Edit this file to update projects, services, pricing, contact details and
   socials. No build step: save the file and refresh the page.
   ========================================================================== */

window.SITE = {
  // Where the contact form sends submissions.
  // Leave empty ("") while you're not connected yet — the form will show a
  // friendly fallback message pointing to your email and phone.
  // Works out of the box with Formspree ("https://formspree.io/f/xxxxxxx"),
  // Getform, Basin, or any endpoint that accepts a POST with form data.
  formEndpoint: "https://formspree.io/f/xnpdlwal",

  email: "liamsbaum@gmail.com",
  phone: "(219) 333-1516", // how it's displayed
  phoneLink: "+12193331516", // used for the tap-to-call link

  // Social links — set url to "" to hide one.
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/grovusss" },
    { label: "Facebook", url: "https://www.facebook.com/liambaumman" },
  ],

  /* ------------------------------------------------------------------------
     Selected work
     - image: path to an image (e.g. "assets/images/project-1.jpg").
       Leave as "" to show the built-in placeholder artwork.
     - placeholder: true shows a small "Placeholder" tag on the card.
       Set it to false (or delete it) once the project is real.
     - url: optional link to a case study or live site.
     ------------------------------------------------------------------------ */
  projects: [
    {
      name: "MCNations",
      category: "Logo & website",
      description:
        "The logo and website for MCNations, my Minecraft server: a sword-and-letters mark, a bold landing page with a live player count, and pages for joining, the rules, the map, and donations.",
      image: "assets/images/project-mcnations.jpg",
      alt: "The MCNations homepage: a sword-and-letters logo over a blurred Minecraft town, with How to Join and Discord buttons.",
      url: "https://www.mcnations.online",
    },
    {
      name: "Workbench",
      category: "App & website",
      description:
        "A free, ad-free Minecraft launcher for Windows, Mac, and Linux, and the site that introduces it. Profiles, one-click mods, and crash fixes explained in plain English.",
      image: "assets/images/project-workbench.jpg",
      alt: "The Workbench website: the headline 'A Minecraft launcher for everyone' above a preview of the launcher's profiles screen.",
      url: "https://workbench-gray-ten.vercel.app",
    },
    {
      name: "Logo Work",
      category: "Logo design",
      description:
        "A selection of marks I've designed for my own projects, including Workbench, MCNations, and Baum Design: simple, recognizable shapes that hold up small or large.",
      image: "assets/images/project-logos.jpg",
      alt: "Five logos in charcoal on a light background: a W made of tags, the Baum Design leaf B, the MCNations sword monogram, an upward arrow, and a gear-shaped G.",
      url: "",
    },
    {
      name: "Baum Design",
      category: "Brand identity & website",
      description:
        "The identity and website for my own studio: a leaf-and-branch mark, a calm natural palette, and a simple site built to grow with the business.",
      image: "assets/images/project-baum.jpg",
      alt: "The Baum Design homepage: 'Thoughtful design. Built to grow.' beside a drawing of a young sprouting plant.",
      url: "",
    },
  ],

  /* ------------------------------------------------------------------------
     Services — icon is one of: "web", "redesign", "brand", "graphic"
     ------------------------------------------------------------------------ */
  services: [
    {
      icon: "web",
      title: "Web Design & Development",
      text: "Custom websites designed around your business, your customers, and your goals.",
    },
    {
      icon: "redesign",
      title: "Website Redesigns",
      text: "Giving outdated websites a fresh look, better usability, and a modern experience.",
    },
    {
      icon: "brand",
      title: "Branding & Identity",
      text: "Logos, colors, typography, and visual identities that give your business a recognizable look.",
    },
    {
      icon: "graphic",
      title: "Graphic Design",
      text: "Custom graphics and design work for digital platforms and businesses.",
    },
  ],

  /* ------------------------------------------------------------------------
     How I work — the steps shown in the process section
     ------------------------------------------------------------------------ */
  process: [
    {
      title: "Chat",
      text: "We talk about your business, your customers, and what you need. You’ll get a clear quote and timeline before anything starts.",
    },
    {
      title: "Design",
      text: "I design how it will look and share it with you early. You give feedback, and we refine it together until it feels right.",
    },
    {
      title: "Build",
      text: "I build it properly: fast, mobile-friendly, and easy for your customers to use on any device.",
    },
    {
      title: "Launch",
      text: "Your site goes live. I check everything works, show you around, and I’m still here if you need changes later.",
    },
  ],

  /* ------------------------------------------------------------------------
     Pricing
     - packages: the four main bundles (shown as cards)
       featured: true highlights one card (dark background)
       worth: optional "worth $X separately" line
     - smallPackages: the compact bundles under the cards
     - priceList: the tabbed list of individual services.
       Each item: [name, price, optional short note]
     ------------------------------------------------------------------------ */
  pricing: {
    packages: [
      {
        name: "The Starter",
        label: "Entry level",
        price: "$135",
        blurb: "For businesses that need a professional first impression.",
        features: [
          "One-page website",
          "Basic custom logo",
          "Color palette",
          "Mobile-friendly design",
          "Contact information and social links",
        ],
        worth: "Worth $150+ separately",
      },
      {
        name: "Business Essentials",
        label: "Recommended",
        price: "$350",
        blurb: "For small businesses ready to establish themselves online.",
        features: [
          "Up to 3-page custom website",
          "Custom logo design",
          "Brand colors and typography",
          "Contact form",
          "Mobile optimization",
          "Social media profile graphics",
          "Basic SEO setup",
        ],
        worth: "Worth $400+ separately",
        featured: true,
      },
      {
        name: "Business Bundle",
        label: "Best value",
        price: "$695",
        blurb: "Everything an existing business needs for a professional refresh.",
        features: [
          "Up to 5-page custom website",
          "Complete logo package",
          "Brand color palette and typography",
          "Mini brand guidelines",
          "Contact form",
          "3 social media graphics",
          "Basic SEO setup",
          "Mobile optimization",
          "Google Maps integration",
        ],
        worth: "Worth $850+ separately",
      },
      {
        name: "The Full Brand",
        label: "All-in-one",
        price: "$895",
        pricePrefix: "from",
        blurb: "A complete brand and online presence, handled in one project.",
        features: [
          "Up to 5-page custom website",
          "Full brand identity",
          "Primary logo + alternate logos",
          "Custom icon / brand mark",
          "Brand guidelines document",
          "Business card design",
          "5 social media graphics",
          "Contact form and basic SEO",
          "Mobile optimization",
          "Google Maps / relevant integrations",
          "30 days of post-launch support",
        ],
        worth: "Worth $1,000+ separately",
      },
    ],

    smallPackages: [
      {
        name: "Social Media Starter",
        price: "$110",
        features: ["5 custom social media graphics", "Profile picture / logo sizing", "Facebook cover graphic", "Consistent color and typography"],
      },
      {
        name: "Print Starter",
        price: "$95",
        features: ["Business card design", "Flyer design", "One promotional graphic", "Print-ready exports"],
      },
      {
        name: "Online Presence",
        price: "$185",
        features: ["One-page website", "Contact form", "Google Maps and social links", "Basic SEO and mobile optimization"],
      },
      {
        name: "Brand Refresh",
        price: "$150",
        features: ["Logo redesign", "Updated color palette", "Typography selection", "2 logo variations", "Social media profile assets"],
      },
    ],

    priceList: [
      {
        tab: "Websites",
        items: [
          ["Landing page", "from $100", "One-page website for a business, service, or product."],
          ["Basic website", "from $250", "Up to 3 pages: home, about, contact, or similar."],
          ["Business website", "from $500", "Up to 5 pages, custom design, responsive layout, contact form."],
          ["Full website", "from $800", "5+ pages, more complex functionality, integrations, custom features."],
          ["Website redesign", "from $200", "A fresh look and better usability for an existing site."],
        ],
      },
      {
        tab: "Branding",
        items: [
          ["Basic logo", "$50", "Custom logo design with final export files."],
          ["Logo variation", "$10 each", "An alternate layout, icon, or color version of your logo."],
          ["Logo package", "from $90", "Primary logo, alternate logo, icon, and 2 color variations."],
          ["Brand identity", "from $250", "Logo system, color palette, typography, brand guide, visual direction."],
        ],
      },
      {
        tab: "Graphic design",
        note: "Design prices only. Printing, shipping, and physical production are billed separately.",
        items: [
          ["Social media graphic", "from $25"],
          ["Social media pack (5 graphics)", "from $100"],
          ["Thumbnail design", "from $25"],
          ["Business card design", "from $40"],
          ["Flyer / poster", "from $40"],
          ["Banner / advertisement", "from $50"],
          ["Menu design", "from $75"],
          ["Custom graphic / illustration", "from $50"],
        ],
      },
      {
        tab: "Website add-ons",
        items: [
          ["Additional page", "from $50"],
          ["Contact form setup", "from $25"],
          ["Google Maps integration", "from $25"],
          ["Domain setup", "from $25"],
          ["Booking system integration", "from $50"],
          ["Photo gallery", "from $50"],
          ["Menu / service catalog", "from $50"],
          ["Basic SEO setup", "from $50"],
          ["Website copywriting", "$50 per page"],
          ["Custom functionality", "from $100"],
          ["Online store setup", "from $600"],
        ],
      },
      {
        tab: "Monthly care",
        items: [
          ["Hosting management", "$25/mo", "Hosting coordination, uptime checks, and basic maintenance."],
          ["Website care", "$50/mo", "Hosting, updates, backups where applicable, monitoring, and minor edits."],
          ["Managed website", "$100/mo", "Everything in Website care, ongoing support, and up to 1 hour of small changes each month."],
          ["Priority support", "$75/mo", "Faster response times for questions and fixes."],
          ["Small content updates", "from $25 each", "Text, photo, or price changes when you need them."],
          ["Additional development", "$50/hr", "New features or larger changes, quoted up front."],
        ],
      },
    ],

    footnote:
      "Prices are starting points for typical projects. Every project starts with a quick chat, and you’ll get a clear quote before any work begins. A 50% deposit starts the work and the rest is due at launch. Two rounds of revisions are included; more are $50/hr.",
  },

  /* ------------------------------------------------------------------------
     Options for "What are you looking for?" in the contact form.
     The package names here should match the package names above so the
     "Choose …" buttons can pre-select them.
     ------------------------------------------------------------------------ */
  enquiryTypes: [
    {
      group: "Packages",
      options: ["The Starter", "Business Essentials", "Business Bundle", "The Full Brand", "A smaller package"],
    },
    {
      group: "Services",
      options: ["A new website", "A website redesign", "Branding & identity", "Graphic design", "Monthly website care", "Something else"],
    },
  ],
};
