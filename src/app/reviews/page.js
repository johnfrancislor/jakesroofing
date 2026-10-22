import Icon from "@/components/Icon";
import { Blobs } from "@/components/Ambient";
import { CtaBand, PageHero, TestimonialCard } from "@/components/Sections";
import { img, testimonials } from "@/lib/site";

export const metadata = {
  title: "Customer Reviews",
  description: "What homeowners, strata councils and businesses say about Jake's Roofing Ltd.",
};

export default function ReviewsPage() {
  const [featured, ...rest] = testimonials;
  return (
    <>
      <PageHero
        eyebrow="Accolades from our customers"
        title="Our Customers Say It Best"
        text="Most of our work comes from word of mouth: friends, family and neighbours recommending Jake's."
        image={img("residential", 79080)}
      />

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-x">
          <figure data-reveal="zoom" className="relative isolate overflow-hidden rounded-3xl bg-navy-900 p-8 sm:p-12">
            <div className="bg-dots absolute inset-0 -z-10" />
            <Blobs className="-z-10" />
            <Icon name="quote" className="anim-float absolute -right-4 -top-4 -z-10 size-40 text-white/5" />
            <div className="flex gap-1 text-brand">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="anim-pop" style={{ "--d": `${300 + i * 90}ms` }}>
                  <Icon name="star" filled className="size-5" />
                </span>
              ))}
            </div>
            <blockquote className="mt-5 max-w-4xl text-xl font-medium leading-relaxed text-white sm:text-2xl">&ldquo;{featured.quote}&rdquo;</blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-bold text-brand">{featured.name}</span>
              <span className="text-white/60"> · {featured.role}</span>
            </figcaption>
          </figure>

          <div className="mt-6 columns-1 gap-6 md:columns-2 lg:columns-3" data-stagger="90">
            {rest.map((t) => (
              <div key={t.name} className="mb-6 break-inside-avoid">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
