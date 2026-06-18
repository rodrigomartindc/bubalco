export function resetScroll() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  const snap = document.querySelector('.home-slides, .bioparque-slides') as HTMLElement | null;
  if (snap) snap.scrollTop = 0;
}
