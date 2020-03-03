# 文件及使用说明

## Slide.vue 基于vue 的滑动验证组件

### 使用说明

```
  引入 import Slide from './Slide'
  注册 components: { Slide },
  简单调用 <Slide v-model="verification" :width="390" :height="45"></Slide>
```

### 参数说明

|参数| 描述 | 默认值| type | 是否必须|
|---|---|---|---|---|
|width|滑动容器宽度| 400 | Number |false|
|height|滑动容器高度| 50 | Number |false|
|text|滑动前提示文字| 向右滑动进行验证 | String |false|
|successText|验证成功提示文字| 验证成功 | String |false|
|background|滑动区域背景颜色| #ccc | String |false|
|progressBarBg|滑块背景颜色| #ccc | String |false|
|circle|是否有圆角| false | Boolean |false|
|textSize|字号| '20px' | String |false|


