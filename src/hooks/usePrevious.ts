import { useRef, useEffect } from "react";

export default function<Value>(value: Value) {
  const ref = useRef<Value>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
