var MODULE = (function(){
  var count=0, //Private variable
    getCount = function(){//private methods
      return count;
    }
    return {//public methods
      getCounter: function(){
        return getCount()
      },
      setCounter:function(val){
        count = val;
      },
      incrementCounter: function(){
        count++;
        return count;
      },
      decrementCounter: function(){
        count--;
        return count;
      }
    }
})()