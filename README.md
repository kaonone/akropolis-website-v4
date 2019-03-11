# Akropolis website v4

## How do I work?

### Preparation
- You need to globally install `Node.js` and `npm`
- Run `npm install` for install dependencies

### For start locally
- Run `npm run dev`
- Go to [http://localhost:8080]()

### For deploy changes in the wiki to web (only for contributors)
- Run `npm run deploy`

## Where can i change or add the data?

### Partners
Edit the file `data/partners/index.ts`. It contains an array of partner data.

Item structure:
- `url` - partner link
- `alt` - description for accessibility, for example, screen-reader
- `icon1x` - default logo
- `icon2x` - logo for retina display

Logos should be placed in the folder `data/partners/imgs`.

### Other
Some texts can be edited in the file `src/services/i18n/locales/en.ts`.
