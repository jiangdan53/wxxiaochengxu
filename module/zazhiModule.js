import {Proasm} from"../utils/promes.js"
class Init extends Proasm {
    getinit(word){
      return this.getData({
        url:`/searchArticleRecommend/${word}`
      })
    }
    getdata(word,cond=0){
      return this.getData({
        url:`/searchArticleList/${word}/${cond}`
      })
    }
}
export{Init}