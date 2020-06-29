
class Proasm {
  BasUrl = "https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine"
   getData({url,module="GET",data={}}){
     return new Promise((res,reject)=>{
       wx.request({
        url:this.BasUrl + url,
        module:module,
        data:data,
        success:rse=>{
          if(rse.data.code == 0){
            res(rse.data.data)
          }else{
              this.showError()
          }
        },
        fail:err =>{
          this.showError()
        }
       })
     })
   }
   showError() {
    wx.showToast({
      title: "请求错误",
      icon: "none"
    })
  }
}
export {Proasm}
