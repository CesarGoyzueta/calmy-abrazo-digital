import { fireEvent, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Index from "@/pages/Index";
import Privacidad from "@/pages/Privacidad";
import Terminos from "@/pages/Terminos";

const renderWithRouter = (element: ReactNode) => render(
  <MemoryRouter>
    {element}
  </MemoryRouter>,
);

describe("Calmy landing", () => {
  it("identifies the audience and makes a responsible future promise", () => {
    renderWithRouter(<Index />);

    expect(screen.getByText("Para familias de niños con diagnóstico profesional de TEA o TDAH")).toBeInTheDocument();
    expect(screen.getByRole("heading", {
      level: 1,
      name: "¿Qué necesita mi hijo en este momento?",
    })).toBeInTheDocument();
    expect(screen.getByText("No diagnostica ni reemplaza la atención profesional.")).toBeInTheDocument();
    expect(screen.getByRole("heading", {
      level: 2,
      name: "Personalización con contexto, no con suposiciones",
    })).toBeInTheDocument();
  });

  it("keeps WhatsApp calls to action disabled until the real invite URL exists", () => {
    renderWithRouter(<Index />);

    const whatsappLinks = screen.getAllByRole("link", { name: /WhatsApp/i });
    expect(whatsappLinks.length).toBeGreaterThan(2);
    whatsappLinks.forEach((link) => {
      expect(link).toHaveAttribute("aria-disabled", "true");
      expect(link).not.toHaveAttribute("href");
    });
    expect(document.querySelector('[href*="BfZHorebqUUiXFJp8"]')).not.toBeInTheDocument();
  });

  it("exposes accessible controls for the mobile menu and FAQ", () => {
    renderWithRouter(<Index />);

    const menu = screen.getByRole("button", { name: "Abrir menú" });
    expect(menu).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(menu);
    expect(screen.getByRole("button", { name: "Cerrar menú" })).toHaveAttribute("aria-expanded", "true");

    const diagnosisFaq = screen.getByRole("button", { name: "¿Necesito un diagnóstico profesional para usar Calmy?" });
    expect(diagnosisFaq).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/Calmy no confirma diagnósticos/i)).toBeInTheDocument();
  });

  it("explains the external WhatsApp flow in the legal pages", () => {
    const privacy = renderWithRouter(<Privacidad />);
    expect(screen.getByText(/Esta web no contiene un formulario comercial/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "política de privacidad de WhatsApp" })).toHaveAttribute(
      "href",
      "https://www.whatsapp.com/legal/privacy-policy",
    );
    privacy.unmount();

    renderWithRouter(<Terminos />);
    expect(screen.getByText(/acceder voluntariamente a un grupo conversacional de WhatsApp/i)).toBeInTheDocument();
    expect(screen.getByText(/El piloto estará dirigido a madres, padres y cuidadores/i)).toBeInTheDocument();
  });
});
