App.QuestionOne = React.createClass({
    mixins: [],
    PropTypes: {},
    getInitialState() {
        return {
            errors: {}
        }
    },
    onSubmit(event) {
        event.preventDefault();

        var self = this,
            questionOne = $(event.target).find('[name=title]').val(),
            errors = {};

        if (!questionOne) {
            errors.title = 'This question is required'
        }

        self.setState({
            errors: errors
        });

        if (!_.isEmpty(errors)) {
            return;
        }

        // TODO: go to next step

    },
    renderQuestion() {
        return (
            <form className="form wizard" onSubmit={this.onSubmit}>
                <App.AuthErrors errors={this.state.errors}/>
                <App.FormInput hasError={!!this.state.errors.questionOne} label="QuestionOne" name="QuestionOne"
                               type="radio" placeholder=""/>
                <button type="submit" className="primary fluid insert button">Next</button>
            </form>

        )
    },
    render() {
        return (
            <div className="form wizard module">
                <h3 className="title">Little interest or pleasure in doing things?</h3>
                {this.renderQuestion()}
            </div>
        )
    }
});