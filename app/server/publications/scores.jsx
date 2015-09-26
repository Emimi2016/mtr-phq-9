Meteor.publish('scores', function () {
    return Scores.find();
});

Meteor.publish('score', function (scoreId) {
    check(scoreId, String);
    return Scores.find({_id: scoreId});
});