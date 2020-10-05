import build from 'build-route-tree';

const rawTree = {
  forWiki: {
    partners: null,
    news: null,
  },
  tokenswap: {
    registration: null,
    check: null,
    kyc: null,
  },
};

const routes = build(rawTree);

export default routes;
