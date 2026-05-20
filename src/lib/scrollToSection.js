export function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return false;

  const headerOffset = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--header-height'),
    10,
  ) || 76;

  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset - 12;
  window.scrollTo({ top, behavior: 'smooth' });
  return true;
}
