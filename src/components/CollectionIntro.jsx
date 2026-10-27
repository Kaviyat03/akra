import React from 'react';

export function CollectionIntro() {
  return (
    <section className="py-20 sm:py-28 bg-brand-ivory border-b border-brand-border/40 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Eyebrow */}
        <span className="text-[11px] font-medium tracking-mega-wide uppercase text-brand-grey block">
          CURATED FOR YOU
        </span>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-black tracking-tight leading-tight">
          Collections That Speak Elegance
        </h2>

        {/* Subtle separator */}
        <div className="w-12 h-[1px] bg-brand-gold mx-auto my-4 opacity-80" />

        {/* Supporting copy */}
        <p className="text-sm sm:text-base text-brand-grey max-w-2xl mx-auto font-sans font-light leading-relaxed">
          Explore a considered selection of sarees and salwars for different occasions and personal styles.
        </p>
      </div>
    </section>
  );
}
