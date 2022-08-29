import hqRequest from '../service/index'

export function getTopMV(offset, limit = 10) {
  return hqRequest.get("/top/mv", {
    offset,
    limit
  })
}

/**
 * 请求MV的播放地址
 * @param {number} id MV的id
 */
export function getMVURL(id) {
  return hqRequest.get("/mv/url", {
    id
  })
}
/**
 * 请求MV的详情
 * @param {number} mvid MV id
 */
export function getMVDetail(mvid) {
  return hqRequest.get('/mv/detail', {
    mvid
  })
}
/**
 * 请求相关视频
 * @param {number} id MV id
 */
export function getRelatedVideo(id) {
  return hqRequest.get('/related/allvideo', {
    id
  })
}
