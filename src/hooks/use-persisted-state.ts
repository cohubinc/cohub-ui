import { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";

export default function usePersistedState<S>(
  initialState: S,
  uniqueKey: string
) {
  const jsonState = localStorage.getItem(uniqueKey);
  let state: S;
  let setState: (state: S) => void;

  try {
    const persistedState = JSON.parse(jsonState || "{}");

    [state, setState] = useState(
      isEmpty(persistedState) ? initialState : persistedState
    );
  } catch {
    console.error("Error parsing persisted state: ", jsonState);

    [state, setState] = useState(initialState);
  }

  useEffect(() => {
    localStorage.setItem(uniqueKey, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
