export const containerClasses = 'w-[min(1200px,calc(100%-48px))] md:w-[min(1200px,calc(100%-80px))] mx-auto';
// No scroll-mt here: `html { scroll-padding-top }` in index.css already offsets
// anchor jumps by the height of the fixed nav. Setting both made the two add up,
// dropping every section a nav-height too low.
export const sectionClasses = `${containerClasses} py-14 md:py-20 border-b border-line`;
