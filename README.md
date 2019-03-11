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

### News
Edit the file `data/news/index.ts`. It contains an array of news data.

Item structure:
- `summary` - short news description
- `sourceIcon` - source of news to which the `url` leads. Allowed values of `sourceIcon`: 'default', 'medium', 'twitter'.
- `url` - link to the full news
- `date` - publication date of the news. Allowed date format: MM.DD.HHHH (month.day.year).

### Other
Some texts can be edited in the file `src/services/i18n/locales/en.ts`.
