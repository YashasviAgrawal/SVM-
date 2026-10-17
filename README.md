# Sharda Vidhya Mandir: website

The new website for **Sharda Vidhya Mandir (SVM)**, Ambabari, Sikar Road, Jaipur, a CBSE school (Affiliation No. 1730101).
Built with **Next.js (App Router) + Tailwind CSS v4 + TypeScript**. There are no other runtime dependencies: all animation is plain CSS and React.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

Node 18.18+ (Node 20 or 22 recommended). It deploys to Vercel with zero config.

## Design

| Token | Hex | Use |
|---|---|---|
| Blue (client palette) | `#96ADD6` | Primary accent, buttons on dark, highlights |
| Beige (client palette) | `#E8E4C8` | Alternate section backgrounds |
| Cream (client palette) | `#F2EEE9` | Page background |
| Ink | `#1C2A4A` | Text, dark sections, footer (deep step of the blue) |
| Dusk | `#3F5C97` | Links and small accents (passes AA on cream) |
| Mist | `#DDE5F3` | Light tint of the blue for cards |

- **Type:** Bodoni Moda for headings (matches the serif on the palette card), Manrope for body text. Both load through `next/font`.
- **Signature motif:** the arch, an image frame after the jharokha windows of Jaipur (`.arch` in `globals.css`).
- **Layout reference:** the Dhirubhai Ambani International School site. It has a transparent header that turns solid on scroll, a full-screen menu, a crossfading Ken Burns hero with a slide counter and progress bars, a vision quote panel, a hover list that swaps images, icon tiles, a cinematic video banner, an "In the spotlight" tab carousel and a stories grid.
- **Motion:** hero load sequence, scroll reveals, counters, marquee and hover image swaps. Everything respects `prefers-reduced-motion`.

## Where things live

```
app/
  page.tsx                  Home
  about/ academics/ admissions/ campus/ student-life/ results/ gallery/ contact/
  mandatory-disclosure/     CBSE Appendix IX page (linked in the header utility bar)
  api/enquiry/route.ts      Receives the admission enquiry form
  layout.tsx                Fonts, SEO metadata, School JSON-LD, header/footer
  sitemap.ts robots.ts not-found.tsx
components/                 Header, HeroSlider, VisionQuotes, StagesShowcase, Spotlight, Carousel,
                            GalleryGrid + Lightbox, VideoFeature, EnquiryForm, Counter, Reveal …
lib/site.ts                 ALL school facts, fees, results, nav, FAQs: edit content here
lib/images.ts               ALL image paths: swap photos here
public/images/              Every photo on the site (svm/ = the school's own, stock/ = placeholders)
public/disclosure/          Put the CBSE disclosure PDFs here (see README.txt inside)
scripts/download-images.mjs Re-downloads every image into public/images
```

## Before launch: checklist

1. **Photos.** Every image is served locally from `public/images`, so nothing depends on the compromised svmjpr.com server or on Unsplash. Stock photos (Unsplash, free licence) fill the gaps where SVM has no published photos. To use a school photo, put the file in `public/images` and change its path in `lib/images.ts`. See the shot list below.
2. **Enquiry form.** `app/api/enquiry/route.ts` only logs enquiries for now. Connect it to email (Resend or SMTP), a Google Sheet or a database.
3. **Mandatory disclosure PDFs.** Upload the self-attested PDFs to `public/disclosure/` using the file names in its README. Renew the building-safety and water certificates if they have expired.
4. **Confirm conflicting facts** (marked `CONFIRM` in code). These are the PIN code (302039 or 302012), the campus area (40,064 or 44,420 m²), the teacher count, the admission steps and the documents list.
5. **Leader messages.** Add the Principal's and Director's photos and messages. These go in `VisionQuotes.tsx` and the leadership cards on the About page.
6. **YouTube video.** Check that `inspectionVideoId` in `lib/site.ts` is the right video.
7. **Domain move.** Point svmjpr.com at the new deployment and keep the 301 redirects in `next.config.ts`. In Google Search Console, submit `/sitemap.xml` and request removal of the old casino and spam URLs.

## Photo shot list for the school

Shoot in landscape, at least 2000 px wide, with natural light.

1. The main building from the gate
2. Morning assembly
3. Pre-primary class at play
4. Primary classroom
5. The smart board in use
6. Each science lab, with students working
7. Computer lab
8. Both libraries
9. The swimming pool, with students swimming
10. Playground and sports day
11. Annual day on stage
12. NCC and scouts
13. Music and dance
14. School buses
15. The Principal and Director (portrait orientation)
16. Toppers holding their mark sheets
