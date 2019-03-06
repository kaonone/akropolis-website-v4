import build from 'build-route-tree';

const rawTree = {
  company: null,
};

const routes = build(rawTree);

export default routes;
