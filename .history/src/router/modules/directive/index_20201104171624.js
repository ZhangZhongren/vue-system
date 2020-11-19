import _import from '../../_import'
export default [
  {
    path: '/directive',
    component: _import(`layout/index`),
    meta: {
      title: '指令',
      icon: 'el-icon-lollipop'
    },
    children: [
      {
        path: 'guide',
        component: _import(`directive/index`),
        name: '概要',
      },
      {
        path: 'copy',
        component: _import(`directive/copy`),
        name: '复制',
      },
      {
        path: 'drag',
        component: _import(`directive/el-dialog-drag`),
        name: '可拖动弹框ß',
      }
    ]
  }
]
