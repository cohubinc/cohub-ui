import React from "react";
import { mount } from "enzyme";

import { Modal, StoryHelpers } from "dist";
import { render, fireEvent } from "@testing-library/react";

describe("Modal component", () => {
  it("renders", async () => {
    const wrapper = mount(
      <Modal open={true} onClose={() => undefined}>
        <span>Content</span>
      </Modal>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("toggles on click", async () => {
    const modalId = "modal-id-toggles-on-click";
    const closeButtonId = "close-toggles-on-click";
    const { getByTestId } = render(
      <StoryHelpers.StateContainer defaultState={true}>
        {({ state, setState }) => (
          <Modal open={state as boolean} onClose={() => setState(false)}>
            <div data-testid={modalId}>
              <div>Modal</div>
              <button
                data-testid={closeButtonId}
                onClick={() => setState(false)}
              >
                Close
              </button>
            </div>
          </Modal>
        )}
      </StoryHelpers.StateContainer>
    );
    const modal = getByTestId(modalId);
    const closeButton = getByTestId(closeButtonId);

    expect(modal).toBeVisible();
    fireEvent.click(closeButton);
    expect(modal).not.toBeVisible();
  });
});
