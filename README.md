[![Build Status](https://www.travis-ci.org/akropolisio/akropolis-website-v4.svg?branch=master)](https://www.travis-ci.org/akropolisio/akropolis-website-v4)

# Akropolis website v4

## How do I work?

### Preparation
- You need to globally install `Node.js` and `npm`
- Run `npm install` for install dependencies

### For start locally
- Run `npm run dev`
- Go to [http://localhost:8080]()

### For deploy changes to web (only for contributors)
- Run `npm run deploy`

## Where can i change or add the data?

### Partners
Edit the file `data/partners/index.ts`. It contains an array of partners data.

Item structure:
- `url` - partner link
- `partnerName` - partner name
- `icon1x` - default logo (height 100px)
- `icon2x` - logo for retina display (height 200px)

Logos should be placed in the folder `data/partners/imgs`.

### News
Edit the file `data/news/index.ts`. It contains an array of news data.

Item structure:
- `summary` - short news description
- `url` - link to the full news
- `date` - publication date of the news. Allowed date format: MM.DD.HHHH (month.day.year).

### Professional memberships
Edit the file `data/profMemberships/index.ts`. It contains an array of memberships data.

Item structure:
- `membershipName` - membership name
- `description` - membership description
- `icon1x` - default logo
- `icon2x` - logo for retina display (twice as much as `icon1x`)

Logos should be placed in the folder `data/profMemberships/imgs`.

### Team
Edit the file `data/team/index.ts`. It contains an array of team members data.

Item structure:
- `links` - array of social links
- `fullName` - first name and last name
- `position` - position in team
- `photo1x` - default photo (120x134)
- `photo2x` - photo for retina display (240x168)
- `tags` - an array of tags that appear under each team member

Photos should be placed in the folder `data/team/imgs`.

### Events
Edit the file `data/events/index.ts`. It contains an array of events data.

Item structure:
- `eventName` - event name
- `link` - link to event
- `location` - event location
- `description` - event description
- `startDate` - start date of event
- `finishDate` - finish date of event (optional)
- `image1x` - default image (660x280)
- `image2x` - image for retina display (1320x560)

Images should be placed in the folder `data/events/imgs`.

### Other
Some texts can be edited in the file `src/services/i18n/locales/en.ts`.

MIT, 2019
