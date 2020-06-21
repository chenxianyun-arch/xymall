import request1 from './axios'


export function getHomeMulData() {
  return request1({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page){
  return request1({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}
