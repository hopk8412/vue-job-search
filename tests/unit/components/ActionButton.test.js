import { render, screen } from "@testing-library/vue";
import ActionButton from "@/components/ActionButton.vue";
import { describe, expect, it } from "vitest";

describe("ActionButton", () => {
  it("renders text", () => {
    render(ActionButton, {
      props: {
        text: "Click Me",
        type: "primary",
      },
    });
    const button = screen.getByRole("button", {
      name: /click me/i,
    });
    expect(button).toBeInTheDocument();
  });
  it("applies styles to button", () => {
    render(ActionButton, {
      props: {
        text: "Click Me",
        type: "primary",
      },
    });
    const button = screen.getByRole("button", {
      name: /click me/i,
    });
    expect(button).toHaveClass("primary");
  });
});
