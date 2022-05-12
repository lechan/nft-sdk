import request from './request'
import type { BaseResponse } from './types/baseTypes'
import type { NftDetailResponse } from './types/nftTypes'

export class NftService {
  static async getNftDetail(id: number): Promise<BaseResponse<NftDetailResponse>> {
    return request.post('/open/nft/detail', { id })
  }
}
