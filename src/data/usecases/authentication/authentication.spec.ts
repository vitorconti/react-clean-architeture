import { HttpPostClientSpy } from '@/data/test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpPOSTClient with correct URL', async () => {
    const url = 'any_url'
    const httpPosClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPosClientSpy)
    await sut.auth()
    expect(httpPosClientSpy.url).toBe(url)
  })
})
