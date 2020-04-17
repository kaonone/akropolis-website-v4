import build from 'build-route-tree';

const rawTree = {
  company: null,
  events: null,
  quest: {
    kyc: null,
  },
  forWiki: {
    partners: null,
    news: null,
  },
};

const routes = build(rawTree);

export default routes;
