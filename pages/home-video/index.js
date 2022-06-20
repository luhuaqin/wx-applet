// pages/home-music/index.js
import { getTopMV } from '../../service/api_video'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs: [],
    hasMore: true
  },

  // 封装网络请求的方法
  getTopMVData: async function(offset) {
    // 判断如果没有更多数据/传入offset不为零时，可以不可以继续请求
    if(!this.data.hasMore && offset !== 0) return

    // 展示加载动画
    // wx.showNavigationBarLoading()

    // 请求接口数据
    const res = await getTopMV(offset);
    // 
    let newData = this.data.topMVs
    // 当offset为零时直接将请求的数据赋值给topMVs,不为零时拼接到原数组上
    if(offset == 0) {
      newData = res.data
    }else {
      newData = newData.concat(res.data)
    }
    // 赋值数据
    this.setData({ topMVs: newData })
    // 结束加载动画
    // wx.hideNavigationBarLoading()
    if(offset == 0) {
      wx.stopPullDownRefresh()
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 未封装时写法
    // const res = await getTopMV(0);
    // this.setData({ topMVs: res.data });
    this.getTopMVData(0)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: async function () {
    // const res = await getTopMV(0)
    // this.setData({ topMVs: res.data })
    this.getTopMVData(0)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function () {
    // if(!this.data.hasMore) return
    // const res = await getTopMV(this.data.topMVs.length)
    // this.setData({ topMVs: this.data.topMVs.concat(res.data) })
    // this.setData({ hasMore: res.hasMore })
    this.getTopMVData(this.data.topMVs.length)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})