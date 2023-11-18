import { render, screen } from "@testing-library/vue";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Cado Careers");
    expect(companyName).toBeInTheDocument();
  });
  it("displays menu items for nav", () => {
    render(MainNav);
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
});
