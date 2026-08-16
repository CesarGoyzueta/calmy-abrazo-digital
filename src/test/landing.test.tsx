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
  it("identifies the audience and explains the responsible product promise", () => {
    renderWithRouter(<Index />);

    expect(screen.getByText("Para familias de niños con diagnóstico profesional de TEA o TDAH")).toBeInTheDocument();
    expect(screen.getByRole("heading", {
      level: 1,
      name: "¿Qué necesita mi hijo en este momento?",
    })).toBeInTheDocument();
    expect(screen.getByText("Pregunta antes de orientar")).toBeInTheDocument();
    expect(screen.getByText("Usa el contexto que decides compartir")).toBeInTheDocument();
    expect(screen.getByText("Señala cuándo consultar")).toBeInTheDocument();
    expect(screen.getByText("No diagnostica ni reemplaza la atención profesional.")).toBeInTheDocument();
  });

  it("keeps WhatsApp calls to action disabled until the real invite URL exists", () => {
    renderWithRouter(<Index />);

    const whatsappLinks = screen.getAllByRole("link", { name: /WhatsApp/i });
    expect(whatsappLinks.length).toBeGreaterThan(3);
    whatsappLinks.forEach((link) => {
      expect(link).toHaveAttribute("aria-disabled", "true");
      expect(link).not.toHaveAttribute("href");
    });
    expect(document.querySelector('[href*="BfZHorebqUUiXFJp8"]')).not.toBeInTheDocument();
  });

  it("lets visitors explore three contextual chat examples", () => {
    renderWithRouter(<Index />);

    expect(screen.getAllByRole("tab")).toHaveLength(3);
    expect(screen.getByText("Un cambio sin anticipación")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByRole("tab", { name: "Pantallas" }), { button: 0, ctrlKey: false });
    expect(screen.getByText("Cerrar una actividad muy atractiva")).toBeInTheDocument();
    expect(screen.getByText(/señal visible de cierre/i)).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByRole("tab", { name: "Colegio" }), { button: 0, ctrlKey: false });
    expect(screen.getByText("Llegar a casa con la carga acumulada")).toBeInTheDocument();
    expect(screen.getByText(/breve tiempo de transición/i)).toBeInTheDocument();
  });

  it("explains the pilot group without promising clinical attention", () => {
    renderWithRouter(<Index />);

    expect(screen.getByRole("heading", { name: "Qué encontrarás en el grupo del piloto" })).toBeInTheDocument();
    expect(screen.getByText("Conoce el propósito y los acuerdos")).toBeInTheDocument();
    expect(screen.getByText("Comparte feedback si lo deseas")).toBeInTheDocument();
    expect(screen.getByText("Conoce avances y pruebas tempranas")).toBeInTheDocument();
    expect(screen.getByText(/El grupo no ofrece atención clínica ni atención individual/i)).toBeInTheDocument();
  });

  it("links to the official Calmy TikTok profile as a secondary action", () => {
    renderWithRouter(<Index />);

    const tiktokLink = screen.getByRole("link", { name: "Seguir a @neurocalmy.calm en TikTok" });
    expect(tiktokLink).toHaveAttribute("href", "https://www.tiktok.com/@neurocalmy.calm");
    expect(tiktokLink).toHaveAttribute("target", "_blank");
    expect(tiktokLink).toHaveAttribute("rel", "noopener noreferrer");
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
