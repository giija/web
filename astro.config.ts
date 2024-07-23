import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

const config = {
  github: {
    SITE_URL: "https://giija.github.io",
    BASE_PATH: "/web",
  },
  branch: {
    SITE_URL: "https://giija.com",
    BASE_PATH: "",
  },
};

const buildTarget = (process.env.BUILD_TARGET ??
  "branch") as keyof typeof config;

const { SITE_URL, BASE_PATH } = config[buildTarget];

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [mdx(), tailwind()],
});
