// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";
console.log("Sentry init")
Sentry.init({
    dsn: "https://feaff264327751b5591c1b271a4ace97@o4510277731090432.ingest.de.sentry.io/4510277732991056",
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true,
});


