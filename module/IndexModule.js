import { Proasm } from "../utils/promes.js"
class InexMoudle extends Proasm {
  getAlist(magazineId = 0, count = 0) {
    return this.getData({
      url: `/getIndexArticleList/${magazineId}/${count}`
    })

  }
  getmackList(magazineId = 0) {
    return this.getData({
      url: `/getMarkTypeList/${magazineId}`
    })
  }
  getRecommendInfo(magazineId = 0) {
    return this.getData({
      url: `/getRecommendInfo/${magazineId}`
    })
  }
}
export { InexMoudle }