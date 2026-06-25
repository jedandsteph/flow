# Pricing Analysis — Lugi ba kami o Hindi?

_Pagsusuri sa packages ng business (digital invitations + live RSVP websites)._
_Petsa: 2026-06-25_

---

## Mga Kasalukuyang Package

| Package | Presyo | Struck (launch offer) | Kasama |
|---|---|---|---|
| **Standard** (web invitation) | ₱1,999 | ~~₱2,999~~ (save ₱1,000) | Custom web invitation w/ link · Countdown, event details & venue map · Simple RSVP form · Photo gallery · 1 revision |
| **Premium** (full RSVP website) | ₱3,999 | ~~₱4,999~~ (save ₱1,000) | Everything in Standard · Live RSVP tracking dashboard · Song requests · Guest well-wishes wall · Unlimited revisions |

**Hiwalay na serbisyo (partner):** Invitation Design & Printed Cards — quote-based (priced by design at quantity).

---

## Verdict: Malamang HINDI kayo lugi — KUNG tama ang setup

Ang produkto ay **digital** (Vue website), kaya ang totoong "gastos" ay **ORAS**, hindi materyales:

- **Hosting = LIBRE** (GitHub Pages / Netlify / Vercel).
- **May reusable template/components na** — bawat bagong client ay customization na lang (content, photos, kulay), hindi from scratch.

### Halimbawang Math (Premium ₱3,999)

| Oras kada client | Kita kada oras |
|---|---|
| 10 oras (gawang-bago) | ₱400 / hr |
| 5 oras (gamit ang template) | ₱800 / hr |
| 3 oras (mabilis na palit ng content) | ₱1,333 / hr |

➜ Habang mas nagagamit ang template, mas kumikita. Ang unang ilang clients lang ang "mabigat" (natututo pa).

---

## ⚠️ 3 Panganib na Pwedeng Ikalugi

1. **"Unlimited revisions"** — pinaka-delikado. Kung makasalubong ng client na ayaw matapos mag-pabago, mauubos ang oras at kita.
   - **Mungkahi:** gawing **"unlimited revisions before launch"** o **"unlimited minor revisions"** (hindi kasama ang malaking redesign), o ibalik sa "up to 3 rounds." Maglagay ng limitasyon sa **scope** kahit "unlimited" ang salita.

2. **Live RSVP tracking** — kailangan ng totoong backend (hindi yung demo na in-memory).
   - **Mungkahi:** gamitin ang **libreng tiers** (Firebase, Supabase, o Google Sheets). Huwag magbayad ng server kada client = lugi.

3. **Walang downpayment** — pwedeng ma-ghost pagkatapos ng trabaho.
   - **Mungkahi:** kumuha ng **50% downpayment** bago magsimula.

---

## 💰 Para Mas Kumita (hindi tinataasan ang base price)

Mga **add-on** (mataas ang margin, kaunti ang dagdag-oras):
- Rush delivery (+₱500–1,000)
- Custom domain `juan-at-maria.com` (+₱800)
- Save-the-date / extra pages
- Karagdagang gallery photos / music

---

## Recommended na Hakbang

- **Bilang startup**, OK ang mababang presyo (₱1,999–₱3,999) para makakuha ng unang clients at testimonials — investment ito sa portfolio.
- **Hindi lugi** kung:
  1. Ginagamit ang template
  2. Kontrolado ang revision scope
  3. Free-tier ang backend
  4. May downpayment
- Pagkatapos ng ~5–10 clients na may magagandang testimonials, **itaas ang presyo** (hal. Premium → ₱5,999–₱7,999). Normal lang iyon.

---

## Quick Checklist (para protektado)

- [ ] Linawin ang revision scope sa contract/message
- [ ] 50% downpayment policy
- [ ] Backend sa free tier (Firebase/Supabase/Google Sheets)
- [ ] May add-ons para sa upsell
- [ ] Subaybayan ang oras kada project (para malaman ang totoong kita/hr)
