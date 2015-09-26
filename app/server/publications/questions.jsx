Meteor.publish('questions', function (selector) {
    check(selector, Object);
    return Questions.find(selector);
});

Meteor.publish('question', function (questionId) {
    check(questionId, String);
    return Questions.find({_id: questionId});
});