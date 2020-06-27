import build from 'build-route-tree';

const rawTree = {
  'credit-pool': null,
  'dca-pool': null,
  company: null,
  events: null,
  forWiki: {
    partners: null,
    news: null,
  },
};

const routes = build(rawTree);

export default routes;
