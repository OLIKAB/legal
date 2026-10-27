# OLIKAB Legal

Kilden til **legal.olikab.com**, med Terms of Service og Privacy Policy for apper og spill fra OLIKAB ENK. Bygget med [VitePress](https://vitepress.dev) og publisert på Vercel.

## Legge til en ny app

1. Lag en mappe med appens navn i små bokstaver og bindestrek, f.eks. `wordgun/`.
2. Kopier `_mal/terms.md` og `_mal/privacy.md` inn i mappen.
3. Bytt ut `{{APP_NAME}}`, `{{DATE}}` og `{{SERVICE}}`, og fjern seksjoner som ikke gjelder appen. Kommentarene `<!-- -->` forklarer hva som skal med.
4. Legg til en lenkelinje under "Apps" i `index.md`.
5. Commit og push. Vercel publiserer automatisk.

Lenkene blir:

```
https://legal.olikab.com/wordgun/terms
https://legal.olikab.com/wordgun/privacy
```

`_mal/` blir ikke publisert.

## Kjøre lokalt

```bash
npm install
npm run dev
```
