var basrUrl = 'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/'
function request(url, method = "GET", data = {}, success) {

  wx.request({
    url: basrUrl + params.url,
    success: function (res) {
      if (res.data.code == 0) {
        params.success(res.data.data)
      } else {
        showError()
      }
    },
    fail: function () {
      showError()
    }
  })
}

function showError() {
  wx.showToast({
    title: "请求错误",
    icon: "none"
  })
}
module.exports = request