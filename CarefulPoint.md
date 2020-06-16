#注意点
##1.进行路由的跳转的时候，配置路由选项的时候，routes:[],而不是routers:[]
```javascript
const router = new VueRouter({
  routes: route,//这里是重点
  mode: 'history'
})
```
##2.路由里面的component不是components,如下
```javascript
 {
    //一定要注意component是不能加s的
    path: '/profile',
    component: Profile
  }
```

