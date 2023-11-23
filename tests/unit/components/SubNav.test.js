import { render, screen } from "@testing-library/vue";
import SubNav from "@/components/SubNav.vue";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

describe("SubNav", () => {
  describe("when user is on jobs page", () => {
    it("displays job count", () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResults: true,
          };
        },
      });
      const jobCount = screen.getByText("1653");
      expect(jobCount).toBeInTheDocument();
    });
  });
  describe("when user is not on jobs page", () => {
    it("does not display job count", () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResults: false,
          };
        },
      });
      const jobCount = screen.queryByText("1653");
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
