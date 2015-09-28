Meteor.publish('reports', {
    find: function() {
        return Reports.find();
    }
});