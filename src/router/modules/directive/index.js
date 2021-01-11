import _import from '../../_import'
import RD from '../../../doc/readme.md'
export default [
  {
    path: '/directive',
    component: _import(`layout/index`),
    meta: {
      title: '指令',
      icon: 'el-icon-lollipop'
    },
    children: [
      // {
      //   path: 'guide',
      //   component: _import(`directive/index`),
      //   name: '概要',
      // },
      {
        path: '',
        component: RD || _import(`directive/copy`),
        name: '复制',
      },
      {
        path: 'drag',
        component: _import(`directive/el-dialog-drag`),
        name: '可拖动弹框',
      },
      {
        path: 'dave',
        component: _import(`directive/save-as-img`),
        name: '保存图片',
      }
    ]
  }
]
