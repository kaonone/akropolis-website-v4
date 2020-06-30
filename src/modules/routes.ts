import build from 'build-route-tree';

const rawTree = {
  sparta: null,
  delphi: null,
  company: null,
  events: null,
  forWiki: {
    partners: null,
    news: null,
  },
};

const routes = build(rawTree);

export default routes;
