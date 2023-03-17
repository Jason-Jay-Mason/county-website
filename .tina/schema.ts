import { defineSchema } from "@tinacms/cli";
import type { TinaField } from "@tinacms/cli";

//#region global schema
const headerSchema: TinaField = {
  type: "object",
  label: "Header",
  name: "header",
  fields: [
    {
      type: "object",
      label: "Nav Links",
      name: "nav",
      list: true,
      fields: [
        {
          type: "string",
          label: "Link",
          name: "href",
        },
        {
          type: "string",
          label: "Label",
          name: "label",
        },
        {
          type: "object",
          label: "Children",
          name: "children",
          list: true,
          fields: [
            {
              type: "string",
              label: "Link",
              name: "href",
            },
            {
              type: "string",
              label: "Label",
              name: "label",
            },
            {
              type: "string",
              label: "Blurb (less than 8 words)",
              name: "blurb",
            },
            {
              type: "image",
              label: "Icon Link",
              name: "icon",
            },
          ],
        },
      ],
    },
  ],
};

const reviewSchema: TinaField = {
  type: "object",
  label: "Reviews",
  name: "reviews",
  fields: [
    {
      type: "number",
      label: "Slider Speed (seconds)",
      name: "sliderSpeed",
    },
    {
      type: "object",
      label: "Reviews List",
      name: "reviewsList",
      list: true,
      ui: {
        component: "labeled-group-list",
      },
      fields: [
        {
          type: "string",
          label: "Name",
          name: "title",
        },
        {
          type: "image",
          label: "Profile Image",
          name: "profile",
        },
        {
          type: "string",
          label: "Review",
          name: "review",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          label: "Link",
          name: "link",
        },
        {
          type: "datetime",
          label: "Date Posted",
          name: "date",
          ui: {
            dateFormat: "MMMM DD YYYY",
            timeFormat: false,
          },
        },
      ],
    },
  ],
};
const contactSchema: TinaField = {
  type: "object",
  label: "Contact Information",
  name: "contactInfo",
  fields: [
    {
      type: "string",
      label: "Business Name",
      name: "businessName",
    },
    {
      type: "string",
      label: "Phone Number",
      name: "phoneNumber",
    },
    {
      type: "string",
      label: "Email",
      name: "email",
    },
    {
      type: "string",
      label: "Hours",
      name: "hours",
    },
    {
      type: "string",
      label: "Facebook URL",
      name: "facebookUrl",
    },
    {
      type: "string",
      label: "Google Maps URL",
      name: "googleMapsUrl",
    },
    {
      type: "string",
      label: "LinkedIn URL",
      name: "linkedInUrl",
    },
    {
      type: "string",
      label: "YouTube URL",
      name: "youTubeUrl",
    },
    {
      type: "string",
      label: "Instagram URL",
      name: "instagramUrl",
    },
    {
      type: "string",
      label: "BBB URL",
      name: "bbbUrl",
    },
  ],
};
const footerSchema: TinaField = {
  type: "object",
  label: "Footer",
  name: "footer",
  fields: [
    {
      type: "object",
      label: "Services",
      name: "services",
      list: true,
      ui: {
        component: "labeled-group-list",
      },
      fields: [
        {
          type: "string",
          label: "Label",
          name: "title",
        },
        {
          type: "string",
          label: "Link",
          name: "link",
        },
      ],
    },
    {
      type: "object",
      label: "Pages",
      name: "pages",
      list: true,
      ui: {
        component: "labeled-group-list",
      },
      fields: [
        {
          type: "string",
          label: "Label",
          name: "title",
        },
        {
          type: "string",
          label: "Link",
          name: "link",
        },
      ],
    },
    {
      type: "object",
      label: "Legal",
      name: "legal",
      list: true,
      ui: {
        component: "labeled-group-list",
      },
      fields: [
        {
          label: "Service",
          name: "title",
          type: "reference",
          collections: ["legal"],
        },
      ],
    },
  ],
};
//#endregion global schema

//#region reused component schema
const seo: TinaField = {
  type: "object",
  label: "SEO",
  name: "seo",
  ui: {
    component: "group",
  },
  fields: [
    {
      type: "string",
      label: "Title",
      description: "50-60 characters",
      name: "title",
    },
    {
      type: "string",
      label: "Description",
      description: "155-160 characters",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      label: "Image",
      name: "image",
    },
    {
      type: "boolean",
      label: "No Follow",
      name: "noFollow",
    },
    {
      type: "boolean",
      label: "No Index",
      name: "noIndex",
    },
  ],
};

const subHeadline: TinaField = {
  type: "string",
  label: "Sub Headline",
  name: "subHeadline",
};

const headline: TinaField = {
  type: "string",
  label: "Headline",
  name: "headline",
};

const ctaButton: TinaField[] = [
  {
    type: "boolean",
    label: "CTA Button",
    name: "ctaButtonToggle",
  },
  {
    type: "string",
    label: "CTA button text",
    name: "ctaButtonText",
  },
  {
    type: "string",
    label: "CTA button link",
    name: "ctaButtonLink",
  },
];

const videoButton: TinaField[] = [
  {
    type: "boolean",
    label: "Video Button",
    name: "videoButtonToggle",
  },
  {
    type: "string",
    label: "Video button text",
    name: "videoButtonText",
  },
  {
    type: "string",
    label: "Video button link",
    name: "videoButtonLink",
  },
];

const bodyText: TinaField = {
  type: "string",
  label: "Body",
  name: "body",
  ui: {
    component: "markdown",
  },
};
const bodyTextGrid: TinaField = {
  type: "object",
  label: "Body Text Rows",
  name: "bodyRows",
  description: "Add a row of body text",
  ui: { component: "group-list", label: "Row" },
  list: true,
  fields: [
    {
      type: "object",
      label: "Body Text Columns",
      name: "bodyColumns",
      description: "Add a column of body text",
      list: true,
      ui: { component: "group-list", label: "Column" },
      fields: [bodyText],
    },
  ],
};
const preFooterCTA: TinaField = {
  type: "object",
  label: "Pre Footer CTA",
  name: "preFooterCTA",
  ui: {
    component: "group",
  },
  fields: [
    {
      type: "string",
      label: "Sub Headline",
      name: "subHeadline",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      type: "string",
      label: "CTA Button Text",
      name: "ctaButtonText",
    },
    {
      type: "string",
      label: "CTA Button Link",
      name: "ctaButtonLink",
    },
  ],
};

const genericHero: TinaField = {
  type: "object",
  label: "Hero",
  name: "hero",
  ui: {
    component: "group",
  },
  fields: [
    { type: "image", label: "Icon", name: "icon" },
    {
      type: "string",
      label: "Page Title",
      name: "pageTitle",
    },
    headline,
    {
      type: "string",
      label: "Hook",
      name: "hook",
      ui: {
        component: "textarea",
      },
    },
    ...ctaButton,
    ...videoButton,
  ],
};

const genericFeaturedSection: TinaField = {
  type: "object",
  label: "Featured Section",
  name: "featuredSection",
  ui: {
    component: "group",
  },
  fields: [
    subHeadline,
    headline,
    { type: "image", label: "Image", name: "image" },
    bodyText,
    ...ctaButton,
  ],
};

const genericFeaturedGrid: TinaField = {
  type: "object",
  label: "Featured Grid",
  name: "featuredGrid",
  ui: {
    component: "group",
  },
  fields: [
    {
      type: "number",
      label: "Max Columns Per Row",
      name: "maxColumns",
    },
    {
      type: "object",
      label: "Features",
      name: "features",
      list: true,
      ui: {
        component: "labeled-group-list",
      },
      fields: [
        {
          type: "string",
          label: "Feature Name",
          name: "title",
        },
        {
          type: "boolean",
          label: "Toggle Icon",
          name: "iconToggle",
        },
        {
          type: "image",
          label: "Icon",
          name: "icon",
        },
        {
          type: "string",
          label: "Headline",
          name: "headline",
        },
        {
          type: "string",
          label: "Body",
          name: "body",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ],
};

const longTextSection: TinaField = {
  type: "object",
  label: "Long Text",
  name: "longText",
  ui: {
    component: "group",
  },
  fields: [
    subHeadline,
    headline,
    bodyTextGrid,
    ...ctaButton,
    {
      type: "boolean",
      label: "CTA Button 2",
      name: "ctaButtonToggle2",
    },
    {
      type: "string",
      label: "CTA button 2 text",
      name: "ctaButtonText2",
    },
    {
      type: "string",
      label: "CTA button 2 link",
      name: "ctaButtonLink2",
    },
  ],
};
const serviceAreaList: TinaField = {
  type: "string",
  label: "Service Areas",
  name: "serviceAreas",
  list: true,
  ui: {
    component: "list",
    field: {
      component: "text",
    },
  },
};
//#endregion reused component schema

//#region page schema
const homeFields: TinaField[] = [
  {
    type: "object",
    label: "Hero",
    name: "hero",
    ui: {
      component: "group",
    },
    fields: [
      {
        type: "string",
        label: "Sub Headline",
        name: "subHeadline",
      },
      {
        type: "string",
        label: "Headline",
        name: "headline",
      },
      {
        type: "image",
        label: "Mobile Background Image",
        name: "mobileBackgroundSrc",
      },
      {
        type: "string",
        label: "Hook",
        name: "hook",
      },
      {
        type: "boolean",
        label: "Video Button Toggle",
        name: "videoButtonToggle",
        ui: {
          component: "toggle",
        },
      },
      {
        type: "string",
        label: "Video Button Text",
        name: "videoButtonText",
      },
      {
        type: "string",
        label: "Video Button Link",
        name: "videoButtonLink",
      },
      {
        type: "boolean",
        label: "CTA Button Toggle",
        name: "ctaButtonToggle",
        ui: {
          component: "toggle",
        },
      },
      {
        type: "string",
        label: "CTA Button Text",
        name: "ctaButtonText",
      },
      {
        type: "string",
        label: "CTA Button Link",
        name: "ctaButtonLink",
      },
    ],
  },
  {
    type: "object",
    label: "Service Slider",
    name: "serviceSlider",
    ui: {
      component: "group",
    },
    fields: [
      {
        type: "object",
        label: "Category List",
        name: "categoryList",
        list: true,
        ui: {
          component: "labeled-group-list",
        },
        fields: [
          {
            type: "string",
            label: "Category name (button text)",
            name: "title",
          },
          {
            type: "string",
            label: "Headline",
            name: "headline",
          },
          {
            type: "string",
            label: "Body Text",
            name: "body",
            ui: {
              component: "markdown",
            },
          },
          {
            type: "boolean",
            label: "Toggle Service Buttons",
            name: "toggleServices",
          },

          {
            type: "object",
            label: "Services",
            name: "services",
            list: true,
            ui: {
              component: "labeled-group-list",
            },
            fields: [
              {
                label: "Service",
                name: "title",
                type: "reference",
                collections: ["service"],
              },
            ],
          },
          {
            type: "string",
            label: "CTA Button Text",
            name: "ctaButtonText",
          },
          {
            type: "string",
            label: "CTA Button Link",
            name: "ctaButtonLink",
          },
          {
            type: "image",
            label: "Before Image",
            name: "beforeImage",
          },
          {
            type: "image",
            label: "After Image",
            name: "afterImage",
          },
        ],
      },
    ],
  },
  {
    type: "object",
    label: "Plan Slider",
    name: "planSlider",
    ui: {
      component: "group",
    },
    fields: [
      {
        type: "object",
        label: "Category List",
        name: "categoryList",
        list: true,
        ui: {
          component: "labeled-group-list",
        },
        fields: [
          {
            type: "string",
            label: "Plan title (button text)",
            name: "title",
          },
          {
            type: "string",
            label: "Headline",
            name: "headline",
          },
          {
            type: "image",
            label: "Icon",
            name: "icon",
          },
          {
            type: "string",
            label: "Body",
            name: "body",
            ui: {
              component: "markdown",
            },
          },
          {
            type: "string",
            label: "CTA button text",
            name: "ctaButtonText",
          },
          {
            type: "string",
            label: "CTA button link",
            name: "ctaButtonLink",
          },
          {
            type: "image",
            label: "Featured Image",
            name: "featuredImage",
          },
        ],
      },
    ],
  },
  preFooterCTA,
  seo,
];
const aboutFields: TinaField[] = [
  genericHero,
  genericFeaturedSection,
  genericFeaturedGrid,
  longTextSection,
  seo,
];
const contactFields: TinaField[] = [genericHero, serviceAreaList, seo];
const projectsFields: TinaField[] = [genericHero, seo];
//#endregion page schema

//#region post schema
const projectFields: TinaField[] = [
  {
    type: "string",
    label: "Title",
    name: "title",
  },
  {
    type: "datetime",
    label: "Date",
    name: "date",
    ui: {
      dateFormat: "MMMM DD YYYY",
      timeFormat: false,
    },
  },
  {
    type: "image",
    label: "Featured image",
    name: "featuredImage",
  },
  {
    type: "boolean",
    label: "Before after toggle",
    name: "beforeAfterToggle",
  },
  {
    type: "image",
    label: "Before image",
    name: "beforeImage",
  },
  {
    type: "image",
    label: "After image",
    name: "afterImage",
  },
  {
    type: "string",
    label: "Project description",
    name: "projectDescription",
    ui: {
      component: "markdown",
    },
  },
  {
    type: "object",
    label: "More photos",
    name: "morePhotos",
    list: true,
    ui: {
      component: "labeled-group-list",
    },
    fields: [
      {
        type: "image",
        label: "Image",
        name: "title",
      },
    ],
  },
  seo,
  {
    type: "boolean",
    label: "Deactivate project",
    name: "deactivate",
    description:
      "Deactivating the project will remove it from being viewed (note: please make sure a redirect is created if you don't want this post to viewed again)",
  },
];
const serviceFields: TinaField[] = [
  {
    type: "string",
    label: "Service Name",
    name: "serviceName",
  },
  {
    type: "image",
    label: "Icon ",
    description: "svg files only please",
    name: "icon",
  },
  {
    type: "object",
    label: "Hero",
    name: "hero",
    ui: {
      component: "group",
    },
    fields: [
      {
        type: "image",
        label: "Icon",
        name: "icon",
      },
      {
        type: "string",
        label: "Page Title",
        name: "pageTitle",
      },
      {
        type: "image",
        label: "Background Image",
        name: "backgroundImageSrc",
      },
      headline,
      {
        type: "string",
        label: "Hook",
        name: "hook",
        ui: {
          component: "textarea",
        },
      },
      ...ctaButton,
      ...videoButton,
    ],
  },
  genericFeaturedGrid,
  longTextSection,
  seo,
];
const legalFields: TinaField[] = [
  {
    type: "string",
    label: "Legal Document Title",
    name: "legalDocumentTitle",
  },
  bodyText,
  seo,
];
//#endregion post schema

export default defineSchema({
  collections: [
    {
      label: "Global",
      name: "global",
      path: "content/global",
      format: "json",
      fields: [headerSchema, reviewSchema, contactSchema, footerSchema],
    },
    //#region pages
    {
      label: "Home",
      name: "home",
      path: "content/pages/home",
      format: "md",
      fields: [...homeFields],
    },
    {
      label: "About",
      name: "about",
      path: "content/pages/about",
      format: "md",
      fields: [...aboutFields],
    },
    {
      label: "Contact",
      name: "contact",
      path: "content/pages/contact",
      format: "md",
      fields: [...contactFields],
    },
    {
      label: "Projects",
      name: "projects",
      path: "content/pages/projects",
      format: "md",
      fields: [...projectsFields],
    },
    //#endregion pages
    //#region post types
    {
      label: "Project",
      name: "project",
      path: "content/project",
      format: "md",
      fields: [...projectFields],
    },
    {
      label: "Service",
      name: "service",
      path: "content/service",
      format: "md",
      fields: [...serviceFields],
    },
    {
      label: "Legal",
      name: "legal",
      path: "content/legal",
      format: "md",
      fields: [...legalFields],
    },
    //#endregion post types
  ],
});
