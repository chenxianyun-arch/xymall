import originAxios from 'axios'

export default function request(config) {
    //1.创建axios实例
    const instance = originAxios.create({
        baseURL: 'http://152.136.185.210:8000/api/n3',
        timeout: 5000,
      }
    )
    //2.拦截器的使用（request）
    instance.interceptors.request.use(config=>{
      // console.log(config);
      //放行拦截的信息
      //1.比如config中的一些信息不符合服务器的要求
      //2.比如每次发送网络请求时候，都希望在界面中显示一个请求的图标
      //3.某些网络请求(比如登录(token )),必须携带的一些信息。token就是令牌
      return config
    },err =>{
      console.log(err);
    })
    //3.response拦截的使用
    instance.interceptors.response.use(resp=>{
      // console.log(resp);
      return resp
    },err=>{
      console.log(err);
    })
    //3.发送真正的网络请求
    return instance(config)
}
