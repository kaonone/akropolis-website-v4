import build from 'build-route-tree';

const rawTree = {
  company: null,
  events: null,
  quest: {
    kyc: null,
  },
  tokenswap: {
    registration: null,
    check: null,
    kyc: null,
  },
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
