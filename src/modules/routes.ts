import build from 'build-route-tree';

const rawTree = {
  company: null,
  events: null,
  quest: null,
  bounty: {
    registration: null,
    check: null,
  },
  forWiki: {
    partners: null,
    news: null,
  },
};

const routes = build(rawTree);

export default routes;
