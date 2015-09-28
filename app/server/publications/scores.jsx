Meteor.publishComposite('scores', {
    find: function() {
        return Scores.find();
    },
    children: [{
        find: function() {
            return Reports.find();
        }
    }]
});