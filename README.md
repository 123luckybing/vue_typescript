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
4. 配置 vue.config.js 
5. 安装 axios (以及typescript版本的axios) 装两个
   cnpm i axios @types/axios --save
6. 封装 axios 在 utils 文件夹下的 https.ts
    在 main.ts 下引入 axios 并挂载到全局实例上面
    import axios from './utils/https'
    Vue.prototype.$axios = axios
7. 报错提示：this.$axios.post 时, $axios 会报错
  Property '$axios' does not exist on type 'Login'
  $axios 前面的this没有声明类型～ ( this as any ).$axios即可～

