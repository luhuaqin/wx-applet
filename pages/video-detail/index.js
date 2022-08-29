// pages/video-detail/index.js
import { getMVURL, getMVDetail, getRelatedVideo } from '../../service/api_video'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvURLInfo: {},
    mvDetail: {},
    relatedVideos: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { id } = options  // 获取页面跳转前的item id
    this.getPageData(id)  // 获取页面数据
  },
  /**
   * 获取页面数据
   * @param {number} id MV id
   */
  getPageData(id) {
    getMVDetail(id).then(res => {
      this.setData({ mvDetail: res.data })
    });
    getMVURL(id).then(res => {
      this.setData({ mvURLInfo: res.data })
    });
    getRelatedVideo(id).then(res => {
      this.setData({ relatedVideos: res.data })
    })
  }
})