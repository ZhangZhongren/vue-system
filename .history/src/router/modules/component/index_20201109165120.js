import _import from '../../_import'
export default [
  {
    path: '/table',
    component: _import('layout/index'),
    name: '',
    meta: {
      title: '组件',
      icon: 'el-icon-film'
    },
    children: [
      {
        path: 'table',
        component: _import('table/index'),
        name: 'table'
      },
      {
        path: 'code-editer',
        component: _import('code-editer/index'),
        name: 'code-editer'
      }
    ]
  }
]
