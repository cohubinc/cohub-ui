import { useState, useEffect, RefObject } from "react";

export default function useAttentionWithin(
  ref: RefObject<HTMLElement>,
  lostAttention?: () => void
) {
  const [attentionWithin, setAttentionWithin] = useState(false);

  function handleAttentionLeave({ target }: Event) {
    const targetIsWithin = !!(
      ref.current && ref.current.contains(target as Node)
    );

    setAttentionWithin(targetIsWithin);
    if (!targetIsWithin) lostAttention && lostAttention();
  }

  useEffect(() => {
    document.addEventListener("focusin", handleAttentionLeave);
    document.addEventListener("mouseup", handleAttentionLeave);

    return () => {
      document.removeEventListener("focusin", handleAttentionLeave);
      document.removeEventListener("mouseup", handleAttentionLeave);
    };
  }, []);

  return attentionWithin;
}
