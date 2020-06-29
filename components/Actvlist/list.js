// components/Actvlist/list.js
import {InexMoudle} from "../../module/IndexModule.js"
const indexModule = new InexMoudle

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Alist:{
      type:Array,
      value:[],
      observer(newArr){
      }
    },
    moar:{
      type:String,
      value:'',
      observer:"lodemo"
    },
    listid:{
      type:Number,
      value:0,
      observer:"lodata"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    loding:false,
    nomodu:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    lodemo(){
      if(this._showlonding()|| this.data.nomodu){
        return 
      }
       this._openlonding()
        const id =  this.data.listid;
        const conut =  this.data.Alist.length
        indexModule.getAlist(id,conut).then(res =>{
            this._shuju(res)
            this._calonding()
        })
    },
    lodata(){
      this.setData({
        nomodu:false
      })
    },
    _shuju(res){
      const newdata = this.data.Alist.concat(res)
      console.log(newdata.length,this.data.Alist.length)
      if(newdata.length === this.data.Alist.length){
        this.setData({
          nomodu:true
        })
        return
      }
      this.setData({
        Alist:newdata,

      })
    },
    _showlonding(){
      return this.data.loding
    },
    _openlonding(){
      this.setData({
        loding:true
      })
    },
    _calonding(){
      this.setData({
        loding:false
      })
    }
  }
})
