$(function() {
    var FriendList = Backbone.Collection.extend({});

    var FriendView = Backbone.View.extend({

        tagName: 'li',

        friendslist: new FriendList,

        events: {
            'click #add-input':  'getFriend',
        },

        initialize: function() {
            this.friendslist.on('add',this.render)
            _.bindAll(this, 'render');
        }, 

        getFriend: function() {
            var friend_name = $('#input').val();
            this.friendslist.add( {name: friend_name} );
        },

        render: function(model) {
            $("#friends-list").append("<li>"+ model.get("name")+"</li>");
            console.log('rendered');
        },

    });

    var view = new FriendView({el: 'body'});
});

