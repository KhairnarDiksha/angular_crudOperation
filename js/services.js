angular.module('eventApp')
.service('eventFactory',  function(){
	
	var eventFactory = {};
   
	var events = [];

	eventFactory.createEvent = function(event)
	{           
           events.push(event);
            return events;

	}
    eventFactory.getAllEvents = function () {

		return events;
	}
    
     eventFactory.deleteEvent = function(index){
         
          events.splice(index, 1);
          return events;
         
     }
      eventFactory.updateTask = function(oldValue,newValue){
       
         oldValue.name = newValue ;
          return events;
          
      }
     
	return eventFactory;
});