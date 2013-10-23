var app = app || {}; // The Application

// ---------------
// Our overall **AppView** is the top-level piece of UI.

app.AppView = Backbone.View.extend({

	// Instead of generating a new element, bind to the existing skeleton of 
	// the App already present in the HTML.
	el: '#todoapp',
    
    // Our template for the line of statistics at the bottom of the app.
	statsTemplate: _.template( $('#stats-template').html() ),

	// At initialization we bind to the relevant events on the `Tasks`
	// collection, when items are added or changed. Kick things off by
	// loading any preexisting Tasks that might be saved in *localStorage*. 
	initialize: function() {

		this.input = this.$('#new-todo'); 
		this.allCheckbox = this.$('#toggle-all')[0]; 
		this.$footer = this.$('#footer');
		this.$main = this.$('#main');

		window.app.Tasks.on( 'add', this.addOne, this ); 
		window.app.Tasks.on( 'reset', this.addAll, this ); 
		window.app.Tasks.on( 'all', this.render, this );

		app.Tasks.fetch(); 
	},

	// Re-rendering the App just means refreshing the statistics -- the rest // of the app doesn't change.
	render: function() {
		var completed = app.Tasks.completed().length;
		var remaining = app.Tasks.remaining().length;
		if ( app.Tasks.length ) { 
			this.$main.show(); 
			this.$footer.show();
			this.$footer.html(this.statsTemplate({ 
				completed: completed,
				remaining: remaining
			}));
		} else { 
			this.$main.hide(); 
			this.$footer.hide();
		}

		this.allCheckbox.checked = !remaining; 
	},

	// Add a single todo item to the list by creating a view for it, and // appending its element to the `<ul>`.
	/*todo-list*/
	addOne: function( todo ) {
		var view = new app.TodoView({ 
			model: todo 
		});

		$('#todo-list').append( view.render().el ); 
	},

    // Add all items in the **Tasks** collection at once.
	addAll: function() { 
		this.$('#todo-list').html(''); 
		app.Tasks.each(this.addOne, this);
	} 
});
