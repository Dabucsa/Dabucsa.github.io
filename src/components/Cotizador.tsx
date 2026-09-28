"use client";

import { Camera, Lightbulb, MessageCircle, PencilRuler } from "lucide-react";
import { waHref } from "@/lib/site";

const inputCls =
  "w-full rounded-md border border-outline bg-surface-low px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-amber";
const labelCls = "mb-1.5 block text-[11px] font-bold uppercase tracking-[0.08em] text-ink";

export default function Cotizador() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text =
      `Hola ROMATSA:\n\n` +
      `Nombre / Predio: ${String(f.get("nombre")).trim()}\n` +
      `Ubicación: ${String(f.get("ubicacion")).trim()}\n` +
      `Requerimiento: ${String(f.get("trabajo")).trim()}\n\n` +
      `Quisiera solicitar una cotización o visita técnica.`;
    window.open(waHref(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="cotizador" className="px-4 py-12 md:py-20">
      <div className="mx-auto max-w-3xl rounded-lg border border-outline/60 bg-white p-6 shadow-sm md:p-10">
        <span className="eyebrow">Cotización</span>
        <h2 className="h-section mt-2">Solicita tu cotización</h2>
        <p className="mt-2 text-ink-soft">Envíanos una foto, un croquis o la descripción de lo que necesitas. Te respondemos a la brevedad.</p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { icon: Camera, label: "1. Una foto" },
            { icon: PencilRuler, label: "2. Un croquis" },
            { icon: Lightbulb, label: "3. Tu idea" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 rounded-md bg-surface-low px-2 py-4 text-center">
              <Icon className="size-7 text-amber-dark" strokeWidth={2} />
              <span className="text-[11px] font-bold uppercase tracking-[0.08em]">{label}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="nombre" className={labelCls}>Nombre o predio</label>
            <input id="nombre" name="nombre" required className={inputCls} placeholder="Ej: Agrícola Las Acacias / Don Carlos" />
          </div>
          <div>
            <label htmlFor="ubicacion" className={labelCls}>Comuna o sector</label>
            <input id="ubicacion" name="ubicacion" required className={inputCls} placeholder="Ej: San Carlos camino a Ninhue / Parral" />
          </div>
          <div>
            <label htmlFor="trabajo" className={labelCls}>Descripción del requerimiento</label>
            <textarea id="trabajo" name="trabajo" required rows={3} className={inputCls} placeholder="Ej: Jaula de protección para bomba y portón corredera de 6 m" />
          </div>
          <button type="submit" className="btn w-full bg-whatsapp text-white hover:brightness-110">
            <MessageCircle className="size-5" />
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
