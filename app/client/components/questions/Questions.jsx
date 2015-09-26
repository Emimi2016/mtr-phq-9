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

                    <div className="choices">
                        <label className="radio label">
                            <input type="radio" className="radio input" name={question.order} value={question.choices[0].value} />
                            {question.choices[0].choice}
                        </label>
                        <label className="radio label">
                            <input type="radio" className="radio input" name={question.order} value={question.choices[1].value} />
                            {question.choices[1].choice}
                        </label>
                        <label className="radio label">
                            <input type="radio" className="radio input" name={question.order} value={question.choices[2].value} />
                            {question.choices[2].choice}
                        </label>
                        <label className="radio label">
                            <input type="radio" className="radio input" name={question.order} value={question.choices[3].value} />
                            {question.choices[3].choice}
                        </label>
                    </div>
                </div>
            )
        });
    },

    render: function () {
        return (
            <form className="form wizard module">
                {(this.data.questions) ? this.renderQuestion() : 'Loading...'}
                <button type="submit" className="fluid primary button">Evaluate</button>
            </form>
        )
    }
});