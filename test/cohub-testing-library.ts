import React, { ReactNode, CSSProperties } from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { generateImage } from "jsdom-screenshot";

import { CssFramework } from "dist";
import { size } from "src";

export * from "@testing-library/react";

export function render(
  cmpt: React.ReactElement<any>,
  options?: Omit<RenderOptions, "queries">
) {
  const queries = rtlRender(cmpt, options);

  // depth is how many levels up we want to come up looking for the parent button element
  async function findBtnByText(text: string, depth = 5) {
    let el = await queries.findByText(text);
    const isBtn = (node: HTMLElement) => node.tagName === "BUTTON";

    try {
      if (isBtn(el)) return el;

      for (let index = 0; index < depth; index++) {
        el = el.parentElement!;
        if (false || isBtn(el)) return el;
      }
      throw null;
    } catch {
      throw new Error(`Couldn't find a button with the text of "${text}"`);
    }
  }

  return { ...queries, findBtnByText };
}
