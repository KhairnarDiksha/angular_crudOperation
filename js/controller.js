
angular.module('eventApp').controller('formCtrl',['eventFactory', function(eventFactory) {

	var self = this;
	this.eventForm = {};
    
    this.submitForm = function(form) {
       
        eventFactory.createEvent(angular.copy(form));
          
        form.name=' ';
    }
    this.event = eventFactory.getAllEvents();
    
    this.deleteTask = function(index){
       
        eventFactory.deleteEvent(index);
        
    }
    
     this.update = function(oldValue,newValue){
         
          eventFactory.updateTask(oldValue,newValue);       
    } 
              
}]);