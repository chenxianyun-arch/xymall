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
##3.npm i vue-router@3.0 -S
```javascript
选择安装vue-router3.0
```
##4.注意封装这些组件的时候先自己封装，然后再进行使用

