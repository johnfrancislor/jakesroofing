import ScrollEffects from "@/components/ScrollEffects";

// Re-mounted on every navigation: fades the new page in and re-arms scroll effects
export default function Template({ children }) {
  return (
    <div className="anim-page">
      {children}
      <ScrollEffects />
    </div>
  );
}
