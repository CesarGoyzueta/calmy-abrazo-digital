import { act, fireEvent, render, screen, within } from "@testing-library/react";
import type { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import Index from "@/pages/Index";
import Privacidad from "@/pages/Privacidad";
import Terminos from "@/pages/Terminos";
import { FOUNDER_GROUP_URL } from "@/config/founderGroup";

const renderWithRouter = (element: ReactNode) => render(
  <MemoryRouter>
    {element}
  </MemoryRouter>,
);

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Calmy landing", () => {
  it("identifies the audience and explains the responsible product promise", () => {
    renderWithRouter(<Index />);

    expect(screen.getByText("Para familias de niños con diagnóstico profesional de TEA o TDAH")).toBeInTheDocument();
    expect(screen.getByRole("heading", {
      level: 1,
      name: "¿Qué necesita mi hijo en este momento?",
    })).toBeInTheDocument();
    const trustBand = screen.getByRole("region", { name: "Diferencias de Calmy" });
    expect(within(trustBand).getByText("Pregunta antes de orientar")).toBeInTheDocument();
    expect(within(trustBand).getByText("Usa el contexto que decides compartir")).toBeInTheDocument();
    expect(within(trustBand).getByText("No reemplaza al profesional")).toBeInTheDocument();
    expect(within(trustBand).getByText("Cuida la información que compartes")).toBeInTheDocument();
    expect(screen.getByText("No diagnostica ni reemplaza la atención profesional.")).toBeInTheDocument();
  });

  it("uses responsive family photography and an honest product preview", () => {
    renderWithRouter(<Index />);

    const familyPhoto = screen.getByRole("img", {
      name: "Madre acompañando a su hijo mientras dibujan juntos en casa",
    });
    expect(familyPhoto.getAttribute("src")).toContain("hero-family-clean-mobile");
    expect(familyPhoto).toHaveAttribute("width", "1200");
    expect(familyPhoto).toHaveAttribute("height", "900");
    expect(familyPhoto).toHaveAttribute("fetchpriority", "high");
    expect(familyPhoto).toHaveAttribute("loading", "eager");
    expect(familyPhoto).toHaveAttribute("decoding", "async");

    const desktopSource = document.querySelector('source[media="(min-width: 1280px)"]');
    const tabletSource = document.querySelector('source[media="(min-width: 768px)"]');
    expect(desktopSource).toHaveAttribute("srcset", expect.stringContaining("hero-family-clean-desktop"));
    expect(tabletSource).toHaveAttribute("srcset", expect.stringContaining("hero-family-clean-tablet"));
    expect(screen.getByText("Así preguntará Calmy")).toBeInTheDocument();
    expect(screen.getByText("Ejemplo ilustrativo")).toBeInTheDocument();
    expect(screen.getByLabelText("Ejemplo guiado")).toHaveTextContent("Guiado");
    expect(screen.getByText("Calmy pregunta antes")).toBeInTheDocument();
    expect(screen.getByText("Cuándo consultar", { selector: "p" })).toBeInTheDocument();
    expect(screen.queryByText(/\+2\.500 familias/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/orientación basada en evidencia/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /iniciar sesión/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/piloto/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Grupo fundador · Participación voluntaria/i)).toBeInTheDocument();
  });

  it("activates every WhatsApp call to action with the founder group URL", () => {
    renderWithRouter(<Index />);

    const whatsappLinks = screen.getAllByRole("link", { name: /WhatsApp/i });
    expect(whatsappLinks.length).toBeGreaterThan(3);
    whatsappLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", FOUNDER_GROUP_URL);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(link).not.toHaveAttribute("aria-disabled");
    });
    expect(document.querySelector('[href*="BfZHorebqUUiXFJp8"]')).not.toBeInTheDocument();
  });

  it("lets visitors explore three contextual chat examples", () => {
    renderWithRouter(<Index />);

    expect(screen.getAllByRole("tab")).toHaveLength(3);
    const routinesTab = screen.getByRole("tab", { name: "Rutinas" });
    const screensTab = screen.getByRole("tab", { name: "Pantallas" });
    const schoolTab = screen.getByRole("tab", { name: "Colegio" });
    expect(routinesTab).toHaveAttribute("data-state", "active");
    expect(screen.getByText("Un cambio sin anticipación")).toBeInTheDocument();

    fireEvent.mouseDown(screensTab, { button: 0, ctrlKey: false });
    expect(screensTab).toHaveAttribute("data-state", "active");
    expect(screen.getByText("Cerrar una actividad muy atractiva")).toBeInTheDocument();
    expect(screen.getByText(/señal visible de cierre/i)).toBeInTheDocument();

    fireEvent.mouseDown(schoolTab, { button: 0, ctrlKey: false });
    expect(schoolTab).toHaveAttribute("data-state", "active");
    expect(screen.getByText("Llegar a casa con la carga acumulada")).toBeInTheDocument();
    expect(screen.getByText(/breve tiempo de transición/i)).toBeInTheDocument();
  });

  it("explains the founder group without promising clinical attention", () => {
    renderWithRouter(<Index />);

    expect(screen.getByRole("heading", { name: "Qué encontrarás en el grupo fundador" })).toBeInTheDocument();
    expect(screen.getByText("Conoce el propósito y los acuerdos")).toBeInTheDocument();
    expect(screen.getByText("Comparte feedback si lo deseas")).toBeInTheDocument();
    expect(screen.getByText("Conoce avances y pruebas tempranas")).toBeInTheDocument();
    expect(screen.getByText(/El grupo no ofrece atención clínica ni atención individual/i)).toBeInTheDocument();
  });

  it("preserves the founders' executive roles", () => {
    renderWithRouter(<Index />);

    expect(screen.getByText("Co-Fundadora · CMO & Head of Psychology")).toBeInTheDocument();
    expect(screen.getByText("Co-Fundador · CEO & CTO")).toBeInTheDocument();
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

    // La primera abierta es la de metodología: comunica cómo se construyen las
    // respuestas antes que el estado de disponibilidad del producto.
    const methodFaq = screen.getByRole("button", { name: "¿Cómo se construirán las respuestas de Calmy?" });
    expect(methodFaq).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/criterios psicológicos definidos por el equipo/i)).toBeInTheDocument();

    const diagnosisFaq = screen.getByRole("button", { name: "¿Necesito un diagnóstico profesional para usar Calmy?" });
    expect(diagnosisFaq).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(diagnosisFaq);
    expect(screen.getByText(/Calmy no confirma diagnósticos/i)).toBeInTheDocument();

    const whatsappFaq = screen.getByRole("button", { name: "¿Qué ocurrirá al unirme al grupo de WhatsApp?" });
    fireEvent.click(whatsappFaq);
    expect(screen.getByText(/Calmy está en una fase inicial de cocreación/i)).toBeInTheDocument();
  });

  it("gives a concrete crisis resource instead of a vague referral", () => {
    renderWithRouter(<Index />);

    expect(screen.getAllByText(/Línea 113, opción 5/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/106 \(SAMU\)/i)).toBeInTheDocument();
  });

  it("summarises privacy commitments and links to the full policy", () => {
    renderWithRouter(<Index />);

    expect(screen.getByRole("heading", { name: "Tu información merece cuidado" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Leer la política de privacidad completa/i }),
    ).toHaveAttribute("href", "/privacidad");
  });

  it("exposes a skip link and a main landmark", () => {
    renderWithRouter(<Index />);

    expect(screen.getByRole("link", { name: "Saltar al contenido" })).toHaveAttribute(
      "href",
      "#contenido-principal",
    );
    expect(screen.getByRole("main")).toHaveAttribute("id", "contenido-principal");
  });

  it("marks the visible landing section in the navigation", () => {
    let navObserverCallback: IntersectionObserverCallback | undefined;

    class ControlledIntersectionObserver implements IntersectionObserver {
      readonly root = null;
      readonly rootMargin: string;
      readonly thresholds: readonly number[];

      constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
        this.rootMargin = options?.rootMargin ?? "0px";
        this.thresholds = Array.isArray(options?.threshold)
          ? options.threshold
          : [options?.threshold ?? 0];

        if (this.rootMargin === "-30% 0px -58% 0px") {
          navObserverCallback = callback;
        }
      }

      disconnect() {}

      observe() {}

      takeRecords(): IntersectionObserverEntry[] {
        return [];
      }

      unobserve() {}
    }

    vi.stubGlobal("IntersectionObserver", ControlledIntersectionObserver);
    renderWithRouter(<Index />);

    const conversationsSection = document.getElementById("ejemplos");
    expect(conversationsSection).not.toBeNull();
    expect(navObserverCallback).toBeDefined();

    act(() => {
      navObserverCallback?.([
        {
          isIntersecting: true,
          intersectionRatio: 0.8,
          target: conversationsSection,
        } as IntersectionObserverEntry,
      ], {} as IntersectionObserver);
    });

    screen.getAllByRole("link", { name: "Conversaciones" }).forEach((link) => {
      expect(link).toHaveAttribute("aria-current", "location");
    });
  });

  it("explains the external WhatsApp flow in the legal pages", () => {
    const privacy = renderWithRouter(<Privacidad />);
    expect(screen.getByText(/Calmy se encuentra en una fase inicial de cocreación/i)).toBeInTheDocument();
    expect(screen.getByText(/Esta web no contiene un formulario comercial/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "política de privacidad de WhatsApp" })).toHaveAttribute(
      "href",
      "https://www.whatsapp.com/legal/privacy-policy",
    );
    privacy.unmount();

    renderWithRouter(<Terminos />);
    expect(screen.getByText(/Calmy está en una fase inicial de cocreación/i)).toBeInTheDocument();
    expect(screen.getByText(/acceder voluntariamente al grupo fundador de Calmy en WhatsApp/i)).toBeInTheDocument();
    expect(screen.getByText(/La primera versión de Calmy estará dirigida a madres, padres y cuidadores/i)).toBeInTheDocument();
  });
});
