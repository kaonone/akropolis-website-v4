import build from 'build-route-tree';

const rawTree = {
  company: null,
  events: null,
  quest: null,
  swap: null,
  forWiki: {
    partners: null,
    news: null,
  },
};

const routes = build(rawTree);

export default routes;
