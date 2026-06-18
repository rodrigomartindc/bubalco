import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsDesktop } from '../hooks/useIsDesktop';

type SlideSection = {
  id: string;
  label: string;
};

function formatSlideLabel(id: string): string {
  return id
    .replace(/^nt-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function collectSlideSections(): SlideSection[] {
  const elements = document.querySelectorAll<HTMLElement>('.scroll-section[id]');

  return Array.from(elements).map((element) => ({
    id: element.id,
    label: element.dataset.slideLabel || formatSlideLabel(element.id),
  }));
}

export default function DesktopSlideIndicator() {
  const location = useLocation();
  const isDesktop = useIsDesktop();
  const [sections, setSections] = useState<SlideSection[]>([]);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (!isDesktop) {
      setSections([]);
      setActiveSection('');
      return;
    }

    const syncSections = () => {
      const nextSections = collectSlideSections();
      setSections(nextSections);
      setActiveSection((current) => {
        if (nextSections.some((section) => section.id === current)) return current;
        return nextSections[0]?.id ?? '';
      });
    };

    syncSections();
    const timer = window.setTimeout(syncSections, 120);

    return () => window.clearTimeout(timer);
  }, [location.pathname, isDesktop]);

  useEffect(() => {
    if (!isDesktop || sections.length === 0) return;

    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-20% 0px -20% 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [isDesktop, sections]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  if (!isDesktop || sections.length < 2) return null;

  return (
    <nav
      aria-label="Secciones de la página"
      className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-[80] flex-col items-center gap-3"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            aria-label={`Ir a ${section.label}`}
            aria-current={isActive ? 'true' : undefined}
            className={`group relative rounded-full transition-all duration-300 ${
              isActive
                ? 'h-8 w-2 bg-brand'
                : 'h-2 w-2 bg-gray-300 hover:bg-brand/60'
            }`}
          >
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-gray-900 px-3 py-1 text-xs text-white opacity-0 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
              {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
