import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import { gallery, stock } from "@/lib/images";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Photos of the campus, classrooms, sports, culture and achievements at Sharda Vidhya Mandir, Jaipur.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero crumb="Gallery" title="A year in pictures" image={stock.stageGroup} />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <GalleryGrid images={gallery} filters />
        </div>
      </section>
    </>
  );
}
