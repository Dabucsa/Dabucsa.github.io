import Image from "next/image";
import {
  CircleHelp,
  ClipboardCheck,
  CloudHail,
  Droplets,
  Factory,
  Fence,
  Hammer,
  HardHat,
  Lock,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Shield,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
  Wrench,
} from "lucide-react";
import Cotizador from "@/components/Cotizador";
import { PHONE_DISPLAY, TEL_HREF, WA_DEFAULT, waHref } from "@/lib/site";

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#antirrobo", label: "Antirrobo" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#cobertura", label: "Cobertura" },
];

const SERVICIOS = [
  {
    icon: CloudHail,
    title: "Techumbres para cerezos",
    tag: "Protección",
    text: "Estructuras de soporte para cubiertas antilluvia y antigranizo, diseñadas para resistir viento y carga de agua. Montaje planificado para no intervenir las hileras en producción.",
  },
  {
    icon: Shield,
    title: "Jaulas y blindaje antirrobo",
    tag: "Crítico",
    highlight: true,
    text: "Cierres de acero para bombas sumergibles, grupos electrógenos, casetas y tableros eléctricos, con anclaje a fundaciones de hormigón.",
  },
  {
    icon: Droplets,
    title: "Casetas de riego tecnificado",
    tag: "Riego",
    text: "Casetas metálicas con tratamiento anticorrosivo, ventilación y sellos para proteger bombas, filtros y tableros de riego.",
  },
  {
    icon: Fence,
    title: "Portones y cierres de faena",
    tag: "Acceso",
    text: "Portones de batiente y correderas de alta resistencia, dimensionados para el paso de camiones, colosos y maquinaria de cosecha.",
  },
  {
    icon: Warehouse,
    title: "Galpones y cobertizos",
    tag: "Estructura",
    text: "Bodegas de insumos, cobertizos para maquinaria e implementos, y rampas metálicas de carga.",
  },
  {
    icon: Wrench,
    title: "Reparación y soldadura en terreno",
    tag: "En terreno",
    text: "Reparación estructural de colosos, rastras, arados, tolvas y brazos hidráulicos directamente en el predio, para reducir los tiempos de detención.",
  },
];

const PASOS = [
  { title: "Levantamiento", text: "Nos envías fotos, medidas o un croquis. Si el proyecto lo requiere, coordinamos una visita técnica al predio." },
  { title: "Cotización formal", text: "Presupuesto detallado con alcance, materiales y plazos definidos antes de iniciar el trabajo." },
  { title: "Ejecución en terreno", text: "Fabricación y montaje en tu predio con equipamiento propio de generación, soldadura y corte." },
  { title: "Entrega", text: "Revisión final en conjunto y entrega del trabajo terminado, con respaldo posterior." },
];

const RESPALDO = [
  { icon: Users, title: "Equipo especializado", text: "Soldadores y montajistas con experiencia en estructuras y maquinaria agrícola." },
  { icon: Truck, title: "Equipamiento autónomo", text: "Generación eléctrica, soldadura y corte propios: no dependemos de la energía disponible en el predio." },
  { icon: ClipboardCheck, title: "Un responsable por proyecto", text: "Coordinación directa desde la cotización hasta la entrega, sin intermediarios." },
];

// Imágenes referenciales generadas en Stitch — reemplazar por fotos reales de faenas.
const TRABAJOS = [
  { img: "/img/faena-1.jpg", tag: "Antirrobo", title: "Jaula antirrobo para bomba", text: "Estructura en perfil angular con cubrecandado blindado y anclaje a fundación." },
  { img: "/img/faena-2.jpg", tag: "Accesos", title: "Portón doble batiente", text: "Dimensionado para el paso de camiones de fruta y tolvas." },
  { img: "/img/faena-3.jpg", tag: "Galpones", title: "Galpón de resguardo para tractores", text: "Estructura con cerchas dobles y pilares tubulares arriostrados." },
  { img: "/img/faena-4.jpg", tag: "Techumbres", title: "Techumbre y marcos para cerezos", text: "Estructura de soporte con anclajes y tensores para cubiertas antilluvia." },
];

const COBERTURA = [
  { region: "Región de Ñuble", comunas: "San Carlos (base de operaciones), Chillán, Coihueco, Bulnes, San Nicolás, San Ignacio, Portezuelo, Ninhue y Quillón." },
  { region: "Región del Maule Sur", comunas: "Parral, Linares, Retiro, Longaví, Cauquenes, Villa Alegre y sectores rurales colindantes." },
  { region: "Región del Biobío Norte", comunas: "Los Ángeles, Cabrero, Yumbel, Mulchén y sectores agrícolas y forestales cercanos." },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="ROMATSA — inicio">
      <svg viewBox="0 0 44 44" className="size-10 shrink-0 rounded-lg ring-1 ring-white/20" aria-hidden="true">
        <rect width="44" height="44" rx="8" fill="#162B45" />
        <path d="M12 10 L25 10 C30 10 33 13 33 17 C33 21 30 24 25 24 L18 24 L18 34 L12 34 Z" fill="#FFFFFF" />
        <path d="M18 16 L24 16 C26 16 27 17 27 18.5 C27 20 26 21 24 21 L18 21 Z" fill="#162B45" />
        <path d="M23 23 L32 34 L26 34 L18 25 Z" fill="#D97706" />
        <polygon points="34,8 37,2 40,8 37,14" fill="#F59E0B" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-2xl font-extrabold tracking-[0.06em] ${light ? "text-white" : "text-primary-container"}`}>ROMATSA</span>
        <span className="font-display text-[12px] font-bold whitespace-nowrap uppercase tracking-[0.08em] text-[#F59E0B]">Maestranza en terreno</span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header id="top" className="sticky top-0 z-40 bg-primary-container shadow-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Logo light />
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-semibold uppercase tracking-wider text-white/80 transition hover:text-amber">
                {n.label}
              </a>
            ))}
          </nav>
          <a href={TEL_HREF} className="flex items-center gap-2 rounded-md bg-amber px-4 py-2.5 font-display text-base font-bold uppercase text-primary hover:brightness-105">
            <Phone className="size-4" />
            Llamar
          </a>
        </div>
      </header>

      <main className="pb-20 md:pb-0">
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-6 pb-10 md:pt-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0">
          <div className="lg:self-end">
            <div className="inline-flex items-center gap-2 rounded bg-surface-high px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em]">
              <span className="size-2 animate-pulse rounded-full bg-amber" />
              Maestranza móvil · Ñuble · Maule · Biobío
            </div>
            <h1 className="mt-5 font-display text-[40px] leading-[42px] font-bold uppercase md:text-[60px] md:leading-[60px]">
              Soluciones en metal, <span className="text-amber-dark">hechas en tu faena.</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
              Diseño, fabricación y montaje de estructuras metálicas para el sector agrícola. Trabajamos directamente en tu predio con equipamiento propio y autónomo.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
            <Image
              src="/img/galpon.jpg"
              alt="Estructura y techumbre de acero sobre huerto de cerezos, con la cordillera de fondo"
              width={1376}
              height={768}
              priority
              className="h-64 w-full object-cover md:h-96"
            />
            <div className="flex items-center justify-between gap-3 bg-primary-container px-4 py-3">
              <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                <Factory className="size-4 shrink-0 text-amber" />
                Estructuras y montaje en terreno
              </span>
              <span className="shrink-0 text-[11px] font-bold uppercase tracking-[0.08em] text-amber">100% autónomo</span>
            </div>
          </div>

          <div className="lg:mt-6 lg:self-start">
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="#cotizador" className="btn bg-amber text-primary shadow-sm hover:brightness-105">
                <Send className="size-5" />
                Solicitar cotización
              </a>
              <a href="#servicios" className="btn bg-surface-high text-primary hover:bg-surface-mid">
                <Hammer className="size-5" />
                Ver servicios
              </a>
            </div>
            <div className="mt-5 flex items-start gap-3 rounded-md bg-surface-low p-4">
              <Truck className="mt-0.5 size-5 shrink-0 text-primary-container" />
              <p className="text-sm text-ink-soft">
                <span className="font-bold text-ink">Cobertura:</span> San Carlos, Chillán, Linares, Parral, Los Ángeles y sectores rurales aledaños.
              </p>
            </div>
          </div>
        </section>

        {/* ANTIRROBO */}
        <section id="antirrobo" className="px-4">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border-t-4 border-amber bg-primary text-white shadow-xl">
            <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <span className="eyebrow text-amber">
                  <Lock className="size-3.5" />
                  Seguridad de equipos
                </span>
                <h2 className="h-section mt-2">Protección para los equipos críticos de tu predio.</h2>
                <p className="mt-3 text-lg text-white/80">
                  Cercar un predio completo es costoso. Proteger los equipos de mayor valor —bombas, generadores y tableros eléctricos— es una inversión acotada que apunta directamente al principal foco de robo.
                </p>
                <div className="mt-6 flex gap-4 rounded-md bg-white p-5 text-ink">
                  <ShieldCheck className="size-6 shrink-0 text-amber-dark" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em]">Diseño de alta resistencia</span>
                    <p className="mt-1 text-sm text-ink-soft">
                      Jaulas de acero estructural que mantienen la ventilación y el acceso para mantención, con cubrecandados encapsulados que dificultan el corte con herramientas manuales o eléctricas.
                    </p>
                  </div>
                </div>
                <a href="#cotizador" className="btn mt-6 w-full bg-amber text-primary hover:brightness-105 sm:w-auto">
                  <Shield className="size-5" />
                  Cotizar protección de equipos
                </a>
              </div>
              <div className="flex flex-col gap-3">
                {/* TODO: validar cifras y fuente con el cliente antes de publicar */}
                <div className="rounded-md bg-primary-container p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-display text-4xl font-bold whitespace-nowrap text-amber">79%</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/60">Reporte SNA / Socabio</span>
                  </div>
                  <p className="mt-1 font-bold uppercase">de los agricultores ha sido víctima de delitos</p>
                  <p className="text-sm text-white/70">Robos y daños en predios agrícolas.</p>
                </div>
                <div className="rounded-md bg-primary-container p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-display text-4xl font-bold whitespace-nowrap text-amber">US$ 530M</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/60">Pérdidas anuales</span>
                  </div>
                  <p className="mt-1 font-bold uppercase">Pérdidas por robo en el agro</p>
                  <p className="text-sm text-white/70">Maquinaria, bombas, cables y equipos eléctricos.</p>
                </div>
                <div className="rounded-md bg-primary-container p-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-amber">Principal foco de robo</span>
                  <p className="mt-1 font-bold uppercase">Bombas, tableros y generadores</p>
                  <p className="text-sm text-white/70">Motores de pozo profundo, tableros trifásicos y bancos de inversores.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="mx-auto max-w-6xl px-4 py-12 md:py-20">
          <span className="eyebrow">
            <HardHat className="size-3.5" />
            Servicios
          </span>
          <h2 className="h-section mt-2">Soluciones para el sector agrícola</h2>
          <p className="mt-2 max-w-2xl text-lg text-ink-soft">
            Soldadura MIG y por electrodo, perfilería estructural y terminaciones con pintura anticorrosiva industrial.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SERVICIOS.map((s, i) => (
              <article key={s.title} className="rounded-md border border-outline/50 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded bg-surface-mid">
                      <s.icon className="size-5 text-primary-container" />
                    </span>
                    <h3 className="font-display text-xl leading-6 font-bold uppercase">
                      {i + 1}. {s.title}
                    </h3>
                  </div>
                  <span
                    className={`shrink-0 rounded px-2 py-1 text-[11px] font-bold uppercase tracking-[0.08em] ${
                      s.highlight ? "bg-amber text-primary" : "bg-surface-high text-primary-container"
                    }`}
                  >
                    {s.tag}
                  </span>
                </div>
                <p className="mt-3 text-[15px] leading-[22px] text-ink-soft">{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PROCESO */}
        <section className="bg-surface-low px-4 py-12 md:py-20">
          <div className="mx-auto max-w-6xl">
            <span className="eyebrow">Cómo trabajamos</span>
            <h2 className="h-section mt-2">Un proceso claro, de principio a fin</h2>
            <ol className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {PASOS.map((p, i) => (
                <li key={p.title} className="rounded-md bg-white p-5 shadow-sm">
                  <span className="flex size-11 items-center justify-center rounded bg-primary font-display text-2xl font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold uppercase">{p.title}</h3>
                  <p className="mt-1 text-ink-soft">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Cotizador />

        {/* RESPALDO */}
        <section className="bg-primary-container px-4 py-12 text-white md:py-20">
          <div className="mx-auto max-w-6xl">
            <span className="eyebrow text-amber">Por qué ROMATSA</span>
            <h2 className="h-section mt-2">Respaldo profesional en cada proyecto</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {RESPALDO.map((r) => (
                <div key={r.title} className="rounded-md bg-primary p-6">
                  <r.icon className="size-7 text-amber" />
                  <h3 className="mt-4 font-display text-xl font-bold uppercase">{r.title}</h3>
                  <p className="mt-1 text-white/75">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRABAJOS */}
        <section id="proyectos" className="mx-auto max-w-6xl px-4 py-12 md:py-20">
          <span className="eyebrow">Proyectos</span>
          <h2 className="h-section mt-2">Tipos de proyecto</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {TRABAJOS.map((t) => (
              <article key={t.title} className="overflow-hidden rounded-md bg-white shadow-sm">
                <div className="relative">
                  <Image src={t.img} alt={t.title} width={1200} height={655} className="h-52 w-full object-cover md:h-64" />
                  <span className="absolute bottom-3 left-3 rounded bg-primary-container/90 px-2 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                    {t.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold uppercase">{t.title}</h3>
                  <p className="mt-1 text-ink-soft">{t.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* COBERTURA */}
        <section id="cobertura" className="bg-surface-low px-4 py-12 md:py-20">
          <div className="mx-auto max-w-6xl">
            <span className="eyebrow">Zona de operación</span>
            <h2 className="h-section mt-2">Cobertura regional</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {COBERTURA.map((c) => (
                <div key={c.region} className="flex gap-3 rounded-md bg-white p-5 shadow-sm">
                  <MapPin className="size-5 shrink-0 text-amber-dark" />
                  <div>
                    <span className="font-bold uppercase">{c.region}</span>
                    <p className="text-sm text-ink-soft">{c.comunas}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-4 py-14 text-center md:py-20">
          <div className="mx-auto max-w-2xl">
            <CircleHelp className="mx-auto size-9 text-amber-dark" />
            <h2 className="h-section mt-3">¿Tienes un proyecto en mente?</h2>
            <p className="mt-3 text-lg text-ink-soft">
              Escríbenos o llámanos. Evaluamos tu requerimiento y coordinamos una visita técnica a tu predio.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={waHref(WA_DEFAULT)} target="_blank" rel="noopener noreferrer" className="btn bg-whatsapp text-white hover:brightness-110">
                <MessageCircle className="size-5" />
                WhatsApp
              </a>
              <a href={TEL_HREF} className="btn bg-primary text-white hover:bg-primary-container">
                <Phone className="size-5" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-primary px-4 py-10 pb-28 text-white md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo light />
          <div className="text-sm text-white/70 md:text-right">
            <p>Base de operaciones: San Carlos, Región de Ñuble, Chile</p>
            <p>
              <a href={TEL_HREF} className="hover:text-amber">{PHONE_DISPLAY}</a>
            </p>
            <p className="mt-1 text-white/50">Estructuras metálicas · Maestranza agrícola · Servicio en terreno</p>
          </div>
        </div>
      </footer>

      {/* BARRA MÓVIL */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-primary-container p-2 md:hidden">
        <a href={waHref(WA_DEFAULT)} target="_blank" rel="noopener noreferrer" className="btn py-3 bg-whatsapp text-white">
          <MessageCircle className="size-5" />
          WhatsApp
        </a>
        <a href={TEL_HREF} className="btn py-3 bg-amber text-primary">
          <Phone className="size-5" />
          Llamar
        </a>
      </div>

      {/* WHATSAPP FLOTANTE (desktop) */}
      <a
        href={waHref(WA_DEFAULT)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed right-6 bottom-6 z-50 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl transition hover:scale-105 md:flex"
      >
        <MessageCircle className="size-7" />
      </a>
    </>
  );
}
