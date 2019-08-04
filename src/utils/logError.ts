export default function logError(message: string) {
  if (process.env.NODE_ENV === 'development') {
    throw new Error(message);
  }

  console.error(message);
}
