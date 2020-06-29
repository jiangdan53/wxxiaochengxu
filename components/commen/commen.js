// components/commen/commen.js
import {TagList} from "../../module/tagListModule.js"
const tagMoudle = new TagList();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag:String,
    tagId:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    class: "din",
    myTag:[]
  },
  attached(){
    this.onget()

    this._ontag()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    oncon(){
      this._onadd()
      
      this._oncommen()
      this.triggerEvent('tap')
    },
    _oncommen(){
      let className = '';
      if(this.data.class === "din"){
      className = "okdin"
      }else{
        className = 'din'
      }
      this.setData({
        class:className
      })
     
    },
    _onadd(){
      const mylist = {
        tag:this.data.tag,
        tagId:this.data.tagId
      }
      if(this.data.class === 'din'){
        const mytag = tagMoudle.getMytyplist();
         mytag.unshift(mylist)
         tagMoudle.set(mytag)
      }else{
        tagMoudle.remove(mylist.tagId)
      } 
    },
    _ontag(){
      const myTag = this.data.myTag
      myTag.forEach(item =>{
        if(item.tagId === this.properties.tagId){
          this.setData({
            class:"okdin"
          })
        }
      })
    },
    onget(){
      const myTag = tagMoudle.getMytyplist();
      this.setData({
        myTag:myTag
      })
      return myTag
    }
  }
})
