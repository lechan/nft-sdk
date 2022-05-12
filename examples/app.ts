// @ts-nocheck
import NftSdk from '../src/nft-sdk.ts'

NftSdk.getNftDetailInfo(6, (data) => {
  console.log(data)
}, (msg) => {
  console.log(msg)
})
