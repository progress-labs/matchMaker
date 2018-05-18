var matchMaker = {
    queue: {},

    registerCallback: function(eventName, cb){
      var callback = cb;
      this.queue[eventName] = this.queue[eventName] || []; 
      this.queue[eventName].push(callback);
    },
    
    runCallbacks: function(eventName, callback, fireOnLoad = true, runOnMatch = true){
      var mq = window.matchMedia(eventName);
     
      let matches = mq.matches;
      
      if (matches && fireOnLoad) {
        callback(mq.matches);
      }
      
      mq.addListener((data) => {
        matches = data.matches;
        
        callback(data.matches);

      });
    },
  
    register: function(eventName, cb, fireOnLoad, fireWhenMatches){
      this.registerCallback(eventName, cb);
      this.runCallbacks(eventName, cb, fireOnLoad)
    },
  
    deresgister: function(eventName, callback) {
      const events = this.queue[eventName];
      
      const match = events.findIndex(function(element) {
        return element == callback;
      });
      
      events.splice(match, 1);
    } 
}

export default matchMaker