import Gallery from "@/components/Gallery";
import { CtaBand, PageHero } from "@/components/Sections";
import { img } from "@/lib/site";

export const metadata = {
  title: "Past Projects",
  description: "Photos of residential, commercial and in-progress roofing projects by Jake's Roofing across Parksville and Qualicum Beach.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Past Projects & Work in Progress"
        text="Homes, storefronts, strata complexes and waterfront properties across Central Vancouver Island. Tap any photo to view it larger."
        image={img("commercial", 79047)}
      />
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <Gallery />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
