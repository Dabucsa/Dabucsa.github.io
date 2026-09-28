export const PHONE = "56940459379";
export const PHONE_DISPLAY = "+56 9 4045 9379";
export const TEL_HREF = `tel:+${PHONE}`;

export function waHref(text?: string) {
  return text
    ? `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${PHONE}`;
}

export const WA_DEFAULT = "Hola ROMATSA, quisiera solicitar una cotización";
