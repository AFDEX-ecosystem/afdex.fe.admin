import http from '@/utils/http'

class CommonService {
  login(data: any): Promise<any> {
    return http.post('/auth/login', data)
  }
  logout(): Promise<any> {
    return http.get('/auth/logout')
  }
  menu(): Promise<any> {
    return http.post('/cmm/navTree')
  }
}
export default new CommonService()
