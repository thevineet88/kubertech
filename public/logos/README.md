# Client logos

To use the official brand logos in the Clients section, save each logo here
with the exact filename below (PNG or SVG, ideally transparent background):

- `siemens.png`
- `tarana.png`
- `jiffy.png`
- `cigora.png`
- `samyati.png`

Then, in `src/components/ClientsSection.tsx`, replace each wordmark component
with an image, for example:

```tsx
<img src="/logos/siemens.png" alt="Siemens" className="h-6 w-auto" />
```

Tip: the section greys logos out and reveals colour on hover. To keep that
treatment with real logos, add `grayscale opacity-60 hover:grayscale-0
hover:opacity-100 transition` to the `<img>`.
