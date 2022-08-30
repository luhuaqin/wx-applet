// pages/home-music/index.js
import { getBanners, getRankings } from "../../service/api_music"
import queryRect from "../../utils/query-rect"
import { rankingStore } from "../../store/index"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperHeight: 0,
    banners:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageData()
    // 发起共享数据的请求
    getRankings(3778678).then(res => {
      console.log(res);
    })
    rankingStore.dispatch("getRankingDataAction")
  },
  // 请求数据
  getPageData() {
    getBanners().then(res => {
      this.setData({ banners: res.banners })
    })
  },

  // 搜索事件
  handleSearchClick(event) {
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  },

  // 获取图片高度
  handleSwiperImageLoaded() {
    // 获取组件Image的高度
    queryRect(".swiper-image").then(res => {
      const rect = res[0]
      this.setData({ swiperHeight: rect.height })
    })
  }
})