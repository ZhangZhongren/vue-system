## 基于 element-ui el-table二次封装

### 参数

1. tableData 表哥数据Array
2. columns 列头数据Array

| 属性        | 描述                  |  type       |
| --------   | ---------------------:| :----:      |
| label      | 列头显示文字            |   String    |
| prop       | 对应属性键名            |   String    |
| scope      | 需要使用插槽时对应slot   |   String    |

3. checked 显示第一列的 checkbox

4. showIndex 显示索引

5. editColumns 是否可以自定义列头

### table实例

  可以通过 $refs[variable'].tablerRef 获得

### 方法

1. getSelectRows 获得选中的rows

2. repaint table 重绘 一般数据更新出现问题是调用

###  el-table-column 继承 columns里面的属性 

### el-table 继承 引用表哥标签上面的属性

