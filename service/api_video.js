import hqRequest from '../service/index'

export function getTopMV(offset, limit = 10) {
  return hqRequest.get("/top/mv", {
    offset,
    limit
  })
}
