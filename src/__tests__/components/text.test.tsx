import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Text from "../../components/Text/Text";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Text>pancake</Text>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBwQ cXewPK"
        color="text"
      >
        pancake
      </div>
    </DocumentFragment>
  `);
});
