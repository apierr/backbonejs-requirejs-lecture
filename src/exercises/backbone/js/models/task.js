Task = Backbone.Model.extend({
	// Default attributes for the task
	// and ensure that each task created has `title` and `completed` keys. 
	defaults: {
		title: '',
		completed: false 
	},
	localStorage: new Backbone.LocalStorage('tasks-backbone'),
    // Toggle the `completed` state of this todo item.
	toggle: function() { 
		this.save({
			completed: !this.get('completed') 
		});
	} 
});

var Tasks = Backbone.Collection.extend({

	// Reference to this collection's model.
	model: Task,

	// Save all of the task items under the `"tasks"` namespace.
	localStorage: new Backbone.LocalStorage('tasks-backbone'),

    // Filter down the list of all task items that are finished.
	completed: function() {
		return this.filter(function( task ) {
			return task.get('completed'); });
	},
    
    // Filter down the list to only task items that are still not finished.
	remaining: function() {
		return this.without.apply( this, this.completed() );
	}
});

var tasks = new Tasks([
  {name: "first", completed: true},
  {name: "second", completed: false},
  {name: "third", completed: true}
]);