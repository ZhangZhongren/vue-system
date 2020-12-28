import _import from '../../_import'
export default {
  path: '/echars',
  component: _import('layout/index'),
  meta: {
    title: 'echars'
  },
  children: [
    {
      path: '',
      component: _import(`echars/graph`),
      name: '关系图',
    },
    {
      path: 'map',
      component: _import(`echars/map`),
      name: '地图',
    },
  ]
}
