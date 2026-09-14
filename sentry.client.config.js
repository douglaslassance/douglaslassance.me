import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: 'https://3408734aa4c883d1f08a16ac41bf289c@o4511673842794496.ingest.us.sentry.io/4512084954841088',

  // Errors only. No performance tracing, and no session replay, which the privacy
  // page rules out for this site.
  tracesSampleRate: 0,

  // Everything here is a deliberate departure from the defaults, which collect a
  // good deal more than an error report needs.
  dataCollection: {
    userInfo: false,
    cookies: false,
    httpHeaders: { request: false, response: false },
    httpBodies: [],
    urlQueryParams: false,
    // Locals in scope at the point of an error can hold whatever a visitor typed,
    // the contact form included, so reports keep to frames and line numbers.
    stackFrameVariables: false,
  },
});
