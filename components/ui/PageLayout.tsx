interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={`pt-16 ${className}`}>
      {children}
    </div>
  );
}

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  sub?: string;
  dark?: boolean;
}

export function PageHero({ eyebrow, headline, sub, dark = false }: PageHeroProps) {
  return (
    <div className={`py-16 lg:py-20 px-6 ${dark ? "bg-nova-night" : "bg-nova-frost"}`}>
      <div className="max-w-3xl mx-auto text-center">
        {eyebrow && (
          <p className={`text-xs font-semibold tracking-[0.08em] uppercase mb-4 ${dark ? "text-nova-blue" : "text-nova-blue"}`}>
            {eyebrow}
          </p>
        )}
        <h1 className={`text-[36px] lg:text-[48px] font-extrabold leading-tight ${dark ? "text-white" : "text-nova-indigo"}`}>
          {headline}
        </h1>
        {sub && (
          <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-[#CBD5E1]" : "text-text-secondary"}`}>
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}
