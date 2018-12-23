var APP = (function(){
  var count=0,instance;

  function init(){
    getCounter= function(){
      return count;
    };
    setCounter=function(val){
      count = val;
    };
    incrementCounter= function(){
      count++;
      return count;
    };
    decrementCounter= function(){
      count--;
      return count;
    }

     return {
        getC: getCounter,
        setC:setCounter,
        plusC:incrementCounter,
        minusC:decrementCounter
      }
  }

  return {
    getInstance: function(){
      if(!instance) {
        instance = init()
      }else{
        return instance
      }
    }
  }
})()