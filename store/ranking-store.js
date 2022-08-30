import { HYEventStore } from 'hy-event-store'
import { getRankings } from '../service/api_music'

const rankingStore = new HYEventStore({
  state: {
    hotRankings: {}
  },
  action: {
    getRankingDataAction() {
      getRankings(3778678).then(res => {
        console.log(res);
      })
    }
  }
})

export {
  rankingStore
}
