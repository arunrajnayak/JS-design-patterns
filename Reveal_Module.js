var Reveal_Module = (function(){
  var count=0, 
      getCounter= function(){
        return count;
      },
      setCounter=function(val){
        count = val;
        return count;
      },
      incrementCounter= function(){
        count++;
        return count;
      },
      decrementCounter= function(){
        count--;
        return count;
      }
    return {//public access to methods
      getC: getCounter,
      setC: setCounter,
      plusC: incrementCounter,
      minusC: decrementCounter
    }
})()