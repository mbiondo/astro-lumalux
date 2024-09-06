import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import vercel from "@astrojs/vercel/serverless"

import sitemap from "astro-sitemap"

// https://astro.build/config
export default defineConfig({
	site: "https://lumalux.com.ar",
	integrations: [tailwind(), robotsTxt(), sitemap()],
	output: "server",
	adapter: vercel({
		webAnalytics: { enabled: true, provider: "plausible", domain: "lumalux.com.ar" },
	}),
})
