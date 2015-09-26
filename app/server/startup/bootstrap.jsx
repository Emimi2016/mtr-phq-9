Meteor.startup(function () {

    function loadFixture(fixtures, collection) {
        var i;

        for (i = 0; i < fixtures.length; i += 1) {
            collection.insert(fixtures[i]);
        }
    }

    if (Questions.find().count() === 0) {
        loadFixture(Fixtures['questions'], Questions);
    }

    if (Doctors.find().count() === 0) {
        loadFixture(Fixtures['doctors'], Doctors);
    }

    if (Reports.find().count() === 0) {
        loadFixture(Fixtures['reports'], Reports);
    }
});