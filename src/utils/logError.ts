export default function logError(message: string) {
  if (__DEV__) {
    throw new Error(message);
  }

  console.error(message);
}
