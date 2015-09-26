Meteor.publish('questions', function () {
    return Questions.find();
});

Meteor.publish('question', function (questionId) {
    check(questionId, String);
    return Questions.find({_id: questionId});
});