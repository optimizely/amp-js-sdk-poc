import { defineConfig } from "vite";

const BUNDLE_NAME = "assets/index.js";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: BUNDLE_NAME,
      },
    },
  },
  plugins: [
    {
      name: "vite-plugin-html-transform",
      enforce: "post",
      transformIndexHtml(html) {
        const scriptTagRegex = new RegExp(
          `<script type="module" crossorigin src="/${BUNDLE_NAME}"></script>`
        );
        const ampScriptTag = `
          <amp-script layout="container" src="/${BUNDLE_NAME}">
            <p>Hello</p>
          </amp-script>
        `;
        return html.replace(scriptTagRegex, ampScriptTag);
      },
      apply: "build",
    },
  ],
});
