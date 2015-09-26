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

    submitSurvey: function (event) {
        event.preventDefault();

        var surveyResults = {
            question1: $(event.target).find('input[name="1"]:checked').val(),
            question2: $(event.target).find('input[name="2"]:checked').val(),
            question3: $(event.target).find('input[name="3"]:checked').val(),
            question4: $(event.target).find('input[name="4"]:checked').val(),
            question5: $(event.target).find('input[name="5"]:checked').val(),
            question6: $(event.target).find('input[name="6"]:checked').val(),
            question7: $(event.target).find('input[name="7"]:checked').val(),
            question8: $(event.target).find('input[name="8"]:checked').val(),
            question9: $(event.target).find('input[name="9"]:checked').val()
        };

        $('.radio.input:checked').each(function() {
            var value = $(this).val();
            console.log(value);
        });

        console.log(surveyResults);

        // TODO: Evaluate and route to positive or negative

    },

    renderQuestion() {
        return this.data.questions.map(function (question) {
            return (
                <section className="question" key={question._id}>
                    <h2 className="title">{question.order}. {question.title}</h2>

                    <div className="radio input group">
                        <App.FormInput type="radio" label={question.choices[0].choice} name={question.order} value={question.choices[0].value} />
                        <App.FormInput type="radio" label={question.choices[1].choice} name={question.order} value={question.choices[1].value} />
                        <App.FormInput type="radio" label={question.choices[2].choice} name={question.order} value={question.choices[2].value} />
                        <App.FormInput type="radio" label={question.choices[3].choice} name={question.order} value={question.choices[3].value} />
                    </div>
                </section>
            )
        });
    },

    render: function () {
        return (
            <form className="questions form module" onSubmit={this.submitSurvey}>
                {(this.data.questions) ? this.renderQuestion() : <App.Loading />}
                <button type="submit" className="fluid primary button">Feel Better</button>
            </form>
        )
    }
});