import _import from '../../_import'
export default [
  {
    path: '/directive',
    component: _import(`layout/index`),
    name: '指令',
    children: [
      {
        path: 'guide',
        component: _import(`directive/index`),
        name: '概要',
        meta: {
          icon: 'el-icon-lollipop'
        }
      },
      {
        path: '/copy',
        component: _import(`directive/copy`),
        name: '复制',
      }
    ]
  }
]