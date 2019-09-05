import React, { ReactNode, CSSProperties } from "react";
import { generateImage } from "jsdom-screenshot";
import { render } from "test/cohub-testing-library";

import { CssFramework } from "dist";

export async function getScreenshot(jsx: ReactNode, style?: CSSProperties) {
  render(
    <>
      <CssFramework />
      <div style={style}>{jsx}</div>
    </>
  );

  return await generateImage();
}
