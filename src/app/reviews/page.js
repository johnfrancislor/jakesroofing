import Icon from "@/components/Icon";
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
          <figure className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 sm:p-12">
            <Icon name="quote" className="absolute -right-4 -top-4 size-40 text-white/5" />
            <div className="flex gap-1 text-brand">
              {[...Array(5)].map((_, i) => <Icon key={i} name="star" filled className="size-5" />)}
            </div>
            <blockquote className="mt-5 max-w-4xl text-xl font-medium leading-relaxed text-white sm:text-2xl">&ldquo;{featured.quote}&rdquo;</blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-bold text-brand">{featured.name}</span>
              <span className="text-white/60"> · {featured.role}</span>
            </figcaption>
          </figure>

          <div className="mt-6 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {rest.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
