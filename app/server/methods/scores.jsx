Meteor.methods({
   insertScore: function(sum) {
       Scores.insert({
           sum: sum,
           createdAt: new Date()
       });
   }
});