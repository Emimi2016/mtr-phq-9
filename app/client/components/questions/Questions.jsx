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

    calculateChoices: function (event) {
        event.preventDefault();

        var sum = 0,
            threshold = 10;

        $('.radio.input:checked').each(function() {
            sum += Number($(this).val());
        });

        (sum >= threshold) ? FlowRouter.go('Referrals') : FlowRouter.go('Complete');
    },

    renderQuestions() {
        return this.data.questions.map(function (question) {
            return (
                <section className="question" key={question._id}>
                    <h2 className="title">{question.order}. {question.question}</h2>

                    <div className="radio input group">
                        <App.FormInput type="radio" label={question.choices[0].choice} name={question.name} value={question.choices[0].value} />
                        <App.FormInput type="radio" label={question.choices[1].choice} name={question.name} value={question.choices[1].value} />
                        <App.FormInput type="radio" label={question.choices[2].choice} name={question.name} value={question.choices[2].value} />
                        <App.FormInput type="radio" label={question.choices[3].choice} name={question.name} value={question.choices[3].value} />
                    </div>
                </section>
            )
        });
    },

    render: function () {
        return (
            <form className="questions form module" onSubmit={this.calculateChoices}>
                {(this.data.questions) ? this.renderQuestions() : <App.Loading />}
                <button type="submit" className="fluid primary button">Feel Better</button>
            </form>
        )
    }
});