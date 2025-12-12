# Responsive guidelines

This site relies on Tailwind utility classes for layout. To keep pages consistently responsive across viewport widths:

- **Page padding**: prefer `py-16 sm:py-20` for route wrappers instead of a fixed `py-20`.
- **Content gutters**: prefer `px-4 sm:px-6 lg:px-8` on `max-w-*` containers so layouts breathe on wider screens without hurting small screens.
- **Card padding**: prefer `p-6 sm:p-8` for large cards/sections instead of always `p-8`.
- **Viewport-constrained overlays**: dialogs should use a viewport-based max-height like `max-h-[calc(100dvh-2rem)]` and `overflow-y-auto`.
- **Sticky header anchors**: anchors should either use `scroll-mt-*` on the section or rely on global `scroll-padding-top` to avoid hiding headings beneath the header.

