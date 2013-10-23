var MyModel = Backbone.Model.extend({
    initialize: function(attr) {
        this.set({over_18: false});
    	if(attr.age > 18) {
    		this.set({over_18: true});
    	}
    }
});
var myModel = new MyModel({name:'Antonio', age: 36, over_18: null});