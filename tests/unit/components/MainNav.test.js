import { render, screen } from "@testing-library/vue";
import MainNav from "@/components/MainNav.vue";
import { describe } from "vitest";
import userEvent from "@testing-library/user-event";

describe("MainNav", () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
  };
  it("displays company name", () => {
    renderMainNav();
    const companyName = screen.getByText("Cado Careers");
    expect(companyName).toBeInTheDocument();
  });
  it("displays menu items for nav", () => {
    renderMainNav();
    const navItems = screen.getAllByRole("listitem");
    const navTexts = navItems.map((item) => item.textContent);
    expect(navTexts).toEqual([
      "Teams",
      "Locations",
      "Life @ Cado",
      "How We Hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when user logs in", () => {
    it("displays profile pic", async () => {
      renderMainNav();
      let profileImage = screen.queryByRole("img", {
        name: /profile image/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });
      await userEvent.click(loginButton);
      profileImage = screen.getByRole("img", {
        name: /profile image/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
