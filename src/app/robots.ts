import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/admin/",
          "/sign-in",
          "/sign-out",
          "/" +
            encodeURIComponent(
              "Тарифы_на_услуги_инструкторов_АрхызПарка_23_24.pdf",
            ),
          "/privacy-policy",
          "/terms-of-servise",
        ],
      },
    ],
  };
}
