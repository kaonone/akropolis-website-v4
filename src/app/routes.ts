import build from 'build-route-tree';

const rawTree = {
  forWiki: {
    partners: null,
    news: null,
  },
};

const routes = build(rawTree);

export default routes;
