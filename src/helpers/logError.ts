import * as Sentry from "@sentry/browser";

export default function logError(message: string) {
  if (process.env.NODE_ENV !== "production") {
    throw new Error(message);
  }

  try {
    throw new Error(message);
  } catch (error) {
    console.error(message);
    Sentry.captureException(error);
  }
}
