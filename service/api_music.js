import hqRequest from '../service/index'

export function getBanners() {
  return hqRequest.get("/banner", {
    type: 2
  })
}

export function getRankings(id) {
  return hqRequest.get("/playlist/detail", {
    id
  })
}
