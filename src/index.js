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

  register: function(eventName, cb, fireOnLoad){
    this.registerCallback(eventName, cb);
    this.runCallbacks(eventName, cb, fireOnLoad)
  },

  deregister: function(eventName, callback) {
    const events = this.queue[eventName];
    
    for (let i = 0; i < events.length; i++) {
      const index = events.indexOf(events[i]);

      if (index !== -1) {
        events.splice(index, 1);
      }
    }
  } 
}

export default matchMaker