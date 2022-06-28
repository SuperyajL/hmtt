import request from '@/utils/request'
import store from '@/store'
export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/authorizations',
    data: {
      mobile,
      code
    }
  })
}

export const getUserInfo = () => {
  return request({
    url: 'user',
    headers: {
      Authorization: 'Beater ' + store.state.user.token
    }
  })
}

export const getSmsCode = (mobile) => {
  return request({
    url: `/sms/codes/${mobile}`
  })
}
