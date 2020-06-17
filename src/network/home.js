import request1 from './axios'


export function getHomeMulData() {
  return request1({
    url: '/home/multidata'
  })
}
