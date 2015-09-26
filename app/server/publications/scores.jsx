Meteor.publish('scores', function () {
    return Scores.find();
});

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