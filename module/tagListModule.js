class TagList {
  getMytyplist(){
    return wx.getStorageSync("mytagList") || [];
  }
  set(value){
    wx.setStorageSync("mytagList",value);
  }
  remove(id){
    const list = this.getMytyplist();
    let myid = 0;
    list.forEach((item,index)=>{
      console.log(item)
      if(item.tagId == id){
        myid = index
      }else{
        return
      }
      list.splice(myid,1)
      this.set(list)
    })
  }
 
}
export{TagList}