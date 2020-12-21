import _import from '../../_import'
export default [
  {
    path: '/components',
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
      },
      {
        path: 'svg-icon',
        component: _import('svg-icon/index'),
        name: 'svg-icon'
      },
      {
        path: 'rich-editer',
        component: _import('rich-eciter/index'),
        name: '富文本'
      },
      {
        path: 'd3-process',
        component: _import('d3-process/index'),
        name: 'd3-流程'
      }
    ]
  }
]
