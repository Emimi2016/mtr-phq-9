App.Questions = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},

    getMeteorData() {
        var data = {},
            handle = Meteor.subscribe('questions');

        if (handle.ready()) {
            data.questions = Questions.find({}, {sort: {order: 1}}).fetch();
        }

        return data;
    },

    submitSurvey: function () {
        // TODO: Evaluate and route to positive or negative
    },

    renderQuestion() {
        return this.data.questions.map(function (question) {
            return (
                <div className="question" key={question._id}>
                    <h2 className="title">{question.title}</h2>
                </div>
            )
        });
    },

    render: function () {
        return (
            <div className="form wizard module">
                {(this.data.questions) ? this.renderQuestion() : 'Loading...'}
            </div>
        )
    }
});