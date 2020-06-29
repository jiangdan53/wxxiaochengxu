class ModulesLike {
  setlikeList(val){
    wx.setStorageSync("likelist",val)
  }
    getListlkie(){
      return wx.getStorageSync("likelist")  || []
    }
    addlikeList(Actmask){
      const likelist = this.getListlkie();
      likelist.unshift(Actmask)
      this.setlikeList(likelist)
    }
    removelikeList(Id){
      const likelist = this.getListlkie();
      let Myindex = 0
      likelist.forEach((item,index)=>{
        if(item.artId == Id){
          Myindex = index
          return
        }
      })
      likelist.splice(Myindex,1)
        wx.setStorageSync("likelist",likelist)
    }
    getlikeStaust(Id){
      const likelist = this.getListlkie();
      let bolo = false
  likelist.forEach((item,index)=>{
    if(item.artId == Id){
      bolo = true
    }
  })
  return bolo
    }
}
export{ModulesLike}