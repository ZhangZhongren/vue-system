import _import from '../../_import'
export default [
  {
    path: '/table',
    component: _import('layout/index'),
    name: '',
    meta: {
      title: '自定义table',
      icon: 'el-icon-film'
    },
    children: [{}
      path: 'table',
      component: _import('table/index'),
      meta: {
        title: 'table'
      },
  }]
  }
]
