// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://2e1b748050c7a6fd80b2e998146810e6@o4509135379759104.ingest.us.sentry.io/4509135380545536",

  // Add optional integrations for additional features
  integrations: [
    Sentry.replayIntegration(),
  ],

  tracesSampleRate: 1, // Trace sampling (adjust for prod)
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});

// ✅ Add this line to track router transitions with Sentry
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;