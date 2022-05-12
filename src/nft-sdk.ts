import { NftService } from './api'
export default class NftSdk {
  /**
   * 通过id获取NFT详情信息
   * @static
   * @param {number} id 
   * @param {function} success
   * @param {function} error
   */
  static async getNftDetailInfo(id: number, success?: Function, error?: Function) {
    const { code, data, msg } = await NftService.getNftDetail(id)
    if (code === 0) {
      success && success(data)
    } else {
      error && error(msg)
    }
  }
}

(window as any).NftSdk = NftSdk
