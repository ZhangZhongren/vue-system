import _import from '../../_import'
export default [
  {
    path: '/directive',
    component: _import(`layout/index`),
    name: '指令',
    children: [
      {
        path: '/copy',
        component: _import(`directive/copy`),
        name: '复制',
      }
    ]
  }
]