# ts

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

项目搭建步骤：
1. public文件夹下面建一个css文件夹，reset.css
2. 引入reset.css 在 public 的 index.html 里面 link引入～
3. 安装 element-ui
  1) cnpm i element-ui
  2) 引入 在 mian.ts里面：
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
