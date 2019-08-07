import { RefObject } from "react";
export default function useAttentionWithin(ref: RefObject<HTMLElement>, lostAttention?: () => void): boolean;
