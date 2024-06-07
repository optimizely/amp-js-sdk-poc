# Optimizely SDK - AMP Page
## Findings
- Due to size limitation, we have to use the lite version of the optimizely JS Sdk, which explicitly excludes the datafile manager and event processor features for better performance. As a result, it is expected that you will provide the datafile manually to the Optimizely SDK either through a local file reference or by using the provided platform-specific `getDatafile()` helper to load in your Optimizely project's datafile. 
- Have to bundle SDK code along with implementation. We have used Vite build tool which uses rollup for bundling

## Todo
- Have to write a custom Vite plugin to convert `script` tag to `amp-script` tag