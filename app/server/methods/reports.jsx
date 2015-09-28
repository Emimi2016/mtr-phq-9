Meteor.methods({
   insertReport: function(score) {
       // TODO: loop conditions

       if (score >= 0 && score <= 4) {

           Reports.insert({
               score: score,
               message: 'You don\'t seem to be depressed... stay happy.',
               status: 'neutral',
               class: 'positive report',
               createdAt: new Date()
           });
       }

       if (score >=5  && score <= 9) {

           Reports.insert({
               score: score,
               message: 'You seem to have mild depression... all things pass.',
               status: 'mild',
               class: 'caution report',
               createdAt: new Date()
           });
       }

       if (score >=10  && score <= 14) {

           Reports.insert({
               score: score,
               message: 'You seem to have moderate depression... how about seeing one of these specialists?',
               status: 'moderate',
               class: 'negative report',
               createdAt: new Date()
           });
       }

       if (score >=15  && score <= 19) {

           Reports.insert({
               score: score,
               message: 'You seem to have moderately severe depression... consider seeing one of these specialists:',
               status: 'moderately-severe',
               class: 'negative report',
               createdAt: new Date()
           });
       }

       if (score >=20  && score <= 27) {

           Reports.insert({
               score: score,
               message: 'You seem to have severe depression... please schedule to see one of these specialists:',
               status: 'severe',
               class: 'negative report',
               createdAt: new Date()
           });
       }
   }
});