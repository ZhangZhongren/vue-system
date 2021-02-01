import _import from '../../_import'
export default {
  path: '/webmain',
  component: _import('layout/index'),
  meta: {
    title: 'webmain'
  },
  children: [
    {
      path: '',
      component: _import(`web-main/index`),
      name: '在线api测试',
    }
  ]
}
