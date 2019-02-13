// pages/main/main.js
const util = require('../../utils/util.js')
Page({
  data: {
      result:""
  },
  addString:function(e){
      var str = this.data.result;
      console.log(e);
      var addstr = e._relatedInfo.anchorTargetText;
      this.setData({
        result:str+addstr
      });
  },
  removeString: function (){
      var str = ""+this.data.result;
      str = str.substring(0,str.length-1);
      this.setData({
        result:str
      })
  },
  cleanString: function (){
      this.setData({
        result:""
      })
  },
  getResult: function (){
    var str = this.data.result;
    var res = util.calCommonExp(str);
    this.setData({
      result:res
    })
  }
})