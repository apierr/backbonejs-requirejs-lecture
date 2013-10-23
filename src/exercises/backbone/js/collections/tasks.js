var app = app || {}; // Task Collection
// ---------------
// The collection of tasks is backed by *localStorage* instead of a remote // server.
var Tasks = Backbone.Collection.extend({

	// Reference to this collection's model.
	model: app.Task,

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
	},

	// We keep the Tasks in sequential order, despite being saved by unordered 
	// GUID in the database. This generates the next order number for new items. 
	nextOrder: function() {
		if ( !this.length ) { 
			return 1;
		}
	return this.last().get('order') + 1; 
	},
    
    // Todos are sorted by their original insertion order.
		comparator: function( todo ) { return todo.get('order');
	} 
});

// Create our global collection of **Todos**.
app.Tasks = new Tasks();