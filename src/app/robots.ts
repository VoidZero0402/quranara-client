import type { MetadataRoute } from "next";

import { BASE_URL } from "@/constants/global";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/login/", "/signup", "/search", "/orders/", "/panel/", "/management-panel/"],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
