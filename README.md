# Optimizely SDK - AMP Page
POC on how to use Optimizely SDK on a AMP page. Here are couple of things to consider
- AMP has a JS file size restriction due to performance reason. So have to use the Lite variant of the JavaScript SDK which excludes the datafile manager and event processor packages.  As a result, it is expected that you will provide the datafile manually to the Optimizely SDK either through a local file reference or by using the provided platform-specific `getDatafile()` helper to load in your Optimizely project's datafile. Here are some supported links to get more information- 

- [AMP Size Restriction](https://amp.dev/documentation/components/amp-script#restrictions)
- [Optimizely JS - Get started](https://github.com/optimizely/javascript-sdk?tab=readme-ov-file#get-started)

## Build configuration
We have used vite for JS bundling and some preparation purposes. To get the project up and running, do following. 

Make changes to `main.ts` or `index.html` if necessary. Then run - 

```
# If not already installed
npm install
npm run build
```
## Run
After running the build command, you should see the newly created `dist` directory. Inside that you will find the **AMP valid** HTML document with the custom generated `<amp-script> tag . You have to serve this dist dirctory with a server to see it live. Now to preview it locally, you can run -

```
npm run preview
```
