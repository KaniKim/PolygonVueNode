import {defineNuxtConfig} from "nuxt/config";
import vuetify from "vite-plugin-vuetify";
import {createResolver} from "@nuxt/kit";


const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import \"assets/main.scss\"",
        }
      }
    }
  },
  app: {
    head: {
      title: "",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
    }
  }

});