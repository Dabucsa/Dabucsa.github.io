import Image from "next/image";
import {
  CircleHelp,
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
  ReceiptText,
  Send,
  Shield,
  ShieldCheck,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";
import Cotizador from "@/components/Cotizador";
import { PHONE_DISPLAY, TEL_HREF, WA_DEFAULT, waHref } from "@/lib/site";

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#antirrobo", label: "Antirrobo" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#cobertura", label: "Cobertura" },
];

const SERVICIOS = [
  {
    icon: CloudHail,
    title: "Techumbres para cerezos",
    tag: "Protección",
    text: "Estructuras modulares antilluvia y antigranizo calculadas para soportar vientos y peso hídrico. Montaje limpio sin quebrar ramas ni afectar hileras productivas.",
  },
  {
    icon: Shield,
    title: "Jaulas y blindaje antirrobo",
    tag: "Crítico",
    highlight: true,
    text: "Protección perimetral pesada para bombas sumergibles, grupos generadores diésel, casetas y tableros con anclaje a poyos de hormigón reforzado.",
  },
  {
    icon: Droplets,
    title: "Casetas de riego tecnificado",
    tag: "Riego",
    text: "Perfilería con anticorrosivo epóxico, ventilación y sellos climáticos para proteger bombas, filtros y tableros de riego.",
  },
  {
    icon: Fence,
    title: "Portones y cierres de faena",
    tag: "Acceso",
    text: "Portones de batiente y correderas de alto tonelaje aptos para camiones de cosecha, colosos dobles y cosechadoras.",
  },
  {
    icon: Warehouse,
    title: "Galpones y cobertizos",
    tag: "Estructura",
    text: "Bodegas de insumos, cobertizos para resguardo de tractores e implementos, y rampas metálicas de carga pesada.",
  },
  {
    icon: Wrench,
    title: "Reparación y soldadura en faena",
    tag: "Urgencia",
    text: "Colosos fisurados, rastras quebradas, arados desalineados, tolvas y brazos hidráulicos. Llegamos con taller móvil directo al potrero o callejón.",
  },
];

const PASOS = [
  { title: "Nos cuentas o mandas foto", text: "WhatsApp directo: foto de la rotura, medidas aproximadas o croquis a mano alzada." },
  { title: "Te damos precio cerrado", text: "Sin sorpresas ni cobros inventados a mitad del trabajo. Presupuesto transparente." },
  { title: "Vamos con taller autónomo", text: "Camioneta equipada con generador, soldadora, gases, esmeriles y corte." },
  { title: "Entrega y prueba en terreno", text: "Prueba in situ, limpieza de escoria y entrega con respaldo técnico." },
];

// Imágenes referenciales generadas en Stitch — reemplazar por fotos reales de faenas.
const TRABAJOS = [
  { img: "/img/faena-1.jpg", tag: "Antirrobo", title: "Jaula antirrobo para bomba", text: "Estructura en ángulo 50x50x4 mm con candado blindado oculto y anclaje a zapata corrida." },
  { img: "/img/faena-2.jpg", tag: "Accesos", title: "Portón camionero doble batiente", text: "Diseñado para camiones de fruta y tolvas de cereal sin vencer los pilares maestros." },
  { img: "/img/faena-3.jpg", tag: "Galpones", title: "Galpón de resguardo para tractores", text: "Tijerales dobles y pilares tubulares arriostrados." },
  { img: "/img/faena-4.jpg", tag: "Techumbres", title: "Techumbre y marcos para cerezos", text: "Refuerzos de cumbrera y anclajes con tirantes de acero contra lluvias y heladas." },
];

const COBERTURA = [
  { region: "Región de Ñuble", comunas: "San Carlos (base), Chillán, Coihueco, Bulnes, San Nicolás, San Ignacio, Portezuelo, Ninhue y Quillón." },
  { region: "Región del Maule Sur", comunas: "Parral, Linares, Retiro, Longaví, Cauquenes, Villa Alegre y sectores rurales colindantes." },
  { region: "Región del Biobío Norte", comunas: "Los Ángeles, Cabrero, Yumbel, Mulchén y faenas agrícolas y forestales cercanas." },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="ROMATSA — inicio">
      <span className="flex size-10 items-center justify-center rounded-md bg-amber font-display text-2xl font-extrabold text-primary">R</span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-2xl font-extrabold tracking-wide ${light ? "text-white" : "text-primary"}`}>ROMATSA</span>
        <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-on-primary-container">Maestranza en terreno</span>
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
          <nav className="hidden items-center gap-7 md:flex">
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
              Taller móvil en terreno · Maule · Ñuble · Biobío
            </div>
            <h1 className="mt-5 font-display text-[40px] leading-[42px] font-bold uppercase md:text-[60px] md:leading-[60px]">
              Soluciones en metal, <span className="text-amber-dark">hechas en tu faena.</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
              Estructuras, techumbres, protección antirrobo, portones y reparaciones pesadas. Vamos a tu faena con generador y soldadora autónoma: no tienes que mover nada.
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
                Estructuras y montaje en faena · Acero estructural
              </span>
              <span className="shrink-0 text-[11px] font-bold uppercase tracking-[0.08em] text-amber">100% autónomo</span>
            </div>
          </div>

          <div className="lg:mt-6 lg:self-start">
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="#cotizador" className="btn bg-amber text-primary shadow-sm hover:brightness-105">
                <Send className="size-5" />
                Cuéntanos tu proyecto
              </a>
              <a href="#servicios" className="btn bg-surface-high text-primary hover:bg-surface-mid">
                <Hammer className="size-5" />
                Ver servicios
              </a>
            </div>
            <div className="mt-5 flex items-start gap-3 rounded-md bg-surface-low p-4">
              <Truck className="mt-0.5 size-5 shrink-0 text-primary-container" />
              <p className="text-sm text-ink-soft">
                <span className="font-bold text-ink">Ruta diaria:</span> San Carlos, Chillán, Linares, Parral, Los Ángeles y comunas rurales aledañas.
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
                  Seguridad crítica rural
                </span>
                <h2 className="h-section mt-2">Protegemos tus equipos donde están.</h2>
                <p className="mt-3 text-lg text-white/80">
                  Cercar una faena completa cuesta millones. Proteger el generador, la bomba o el tablero cuesta una fracción, y es lo que realmente se llevan.
                </p>
                <div className="mt-6 flex gap-4 rounded-md bg-white p-5 text-ink">
                  <ShieldCheck className="size-6 shrink-0 text-amber-dark" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em]">Diseño de alta resistencia</span>
                    <p className="mt-1 text-sm text-ink-soft">
                      Nuestras jaulas de acero estructural permiten ventilación natural y mantención rutinaria, con cubrecandados encapsulados que no se alcanzan con napoleón ni galletera.
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
                  <p className="mt-1 font-bold uppercase">De los agricultores sufrió un delito</p>
                  <p className="text-sm text-white/70">En el último período, en faenas rurales.</p>
                </div>
                <div className="rounded-md bg-primary-container p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-display text-4xl font-bold whitespace-nowrap text-amber">US$ 530M</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/60">Pérdidas anuales</span>
                  </div>
                  <p className="mt-1 font-bold uppercase">Impacto directo por robo</p>
                  <p className="text-sm text-white/70">Daño en maquinaria, bombas y cables en el agro nacional.</p>
                </div>
                <div className="rounded-md bg-primary-container p-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-amber">Foco crítico de robo</span>
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
            Capacidades maestranza
          </span>
          <h2 className="h-section mt-2">Lo que hacemos en tu campo</h2>
          <p className="mt-2 max-w-2xl text-lg text-ink-soft">
            Soldadura MIG y electrodo, perfiles pesados y pintura anticorrosiva de nivel industrial.
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
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Metodología simple</span>
              <h2 className="h-section mt-2">Cómo trabajamos contigo</h2>
              <ol className="mt-6 space-y-3">
                {PASOS.map((p, i) => (
                  <li key={p.title} className="flex gap-4 rounded-md bg-white p-4 shadow-sm">
                    <span
                      className={`flex size-11 shrink-0 items-center justify-center rounded font-display text-2xl font-bold ${
                        i === 2 ? "bg-amber text-primary" : "bg-primary text-white"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <span className="font-bold uppercase tracking-wide">{p.title}</span>
                      <p className="text-ink-soft">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <Image
              src="/img/camioneta.jpg"
              alt="Camioneta taller con soldadora, generador y perfiles de acero en camino rural"
              width={1376}
              height={768}
              className="h-64 w-full rounded-lg object-cover shadow-lg md:h-full md:max-h-[480px]"
            />
          </div>
        </section>

        <Cotizador />

        {/* OFICIO */}
        <section className="bg-surface-high px-4 py-12">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded bg-primary-container">
                <HardHat className="size-7 text-amber" />
              </span>
              <div>
                <span className="eyebrow">Oficio y garantía</span>
                <h3 className="font-display text-2xl font-bold uppercase md:text-3xl">Trato directo con el maestro</h3>
              </div>
            </div>
            {/* TODO: confirmar años de experiencia con el cliente */}
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Más de 25 años en faenas agroindustriales y metalmecánica de campo. Sin intermediarios ni ejecutivos: hablas y coordinas directamente con quien calcula, corta, suelda y monta en tu faena.
            </p>
          </div>
        </section>

        {/* TRABAJOS */}
        <section id="trabajos" className="mx-auto max-w-6xl px-4 py-12 md:py-20">
          <span className="eyebrow">Trabajos en terreno</span>
          <h2 className="h-section mt-2">Lo que construimos</h2>
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
            <span className="eyebrow">Presencia operativa</span>
            <h2 className="h-section mt-2">Cobertura diaria en tu zona</h2>
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
            <h2 className="h-section mt-3">¿Qué necesitas resolver en tu campo hoy?</h2>
            <p className="mt-3 text-lg text-ink-soft">
              Llámanos o escríbenos directamente. Vamos a tu faena a medir y te entregamos la solución más firme y económica.
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
            <div className="mt-6 flex items-center justify-center gap-2 rounded-md bg-surface-low px-4 py-3 text-[11px] font-bold uppercase tracking-[0.08em]">
              <ReceiptText className="size-4 shrink-0" />
              Emitimos factura electrónica
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
            <p className="mt-1 text-white/50">Soldadura estructural · Carpintería metálica rural · Taller autónomo</p>
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
