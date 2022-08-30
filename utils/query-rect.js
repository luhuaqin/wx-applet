// 动态获取组件的信息（宽高偏移量等）
export default function(selector) {
  return new Promise((reslove, reject) => {
    const query = wx.createSelectorQuery()
    query.select(selector).boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(reslove)
  })
}