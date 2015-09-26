var fieldValues = {
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question9: null
};

App.FormWizard = React.createClass({
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

    getInitialState: function () {
        return {
            step: 1
        }
    },

    saveValues: function (field_value) {
        return function () {
            fieldValues = objectAssign({}, fieldValues, field_value)
        }.bind(this)()
    },

    nextStep: function () {
        this.setState({
            step: this.state.step + 1
        })
    },

    previousStep: function () {
        this.setState({
            step: this.state.step - 1
        })
    },

    submitRegistration: function () {
        // Handle submitting the user data, upon
        // success return this.nextStop(). If it fails,
        // show the user the error but don't advance

        // TODO: Route to positive or negative
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

    showStep: function () {
        switch (this.state.step) {
            case 1:
                return <App.QuestionOne fieldValues={fieldValues}
                                        nextStep={this.nextStep}
                                        previousStep={this.previousStep}
                                        saveValues={this.saveValues}/>
            case 2:
                return <App.QuestionTwo fieldValues={fieldValues}
                                        nextStep={this.nextStep}
                                        previousStep={this.previousStep}
                                        saveValues={this.saveValues}/>
            case 3:
                return <App.QuestionThree fieldValues={fieldValues}
                                          nextStep={this.nextStep}
                                          previousStep={this.previousStep}
                                          saveValues={this.saveValues}/>
            case 4:
                return <App.QuestionFour fieldValues={fieldValues}
                                         nextStep={this.nextStep}
                                         previousStep={this.previousStep}
                                         saveValues={this.saveValues}/>
            case 5:
                return <App.QuestionFive fieldValues={fieldValues}
                                         nextStep={this.nextStep}
                                         previousStep={this.previousStep}
                                         saveValues={this.saveValues}/>
            case 6:
                return <App.QuestionSix fieldValues={fieldValues}
                                        nextStep={this.nextStep}
                                        previousStep={this.previousStep}
                                        saveValues={this.saveValues}/>
            case 7:
                return <App.QuestionSeven fieldValues={fieldValues}
                                          nextStep={this.nextStep}
                                          previousStep={this.previousStep}
                                          saveValues={this.saveValues}/>
            case 8:
                return <App.QuestionEight fieldValues={fieldValues}
                                          nextStep={this.nextStep}
                                          previousStep={this.previousStep}
                                          saveValues={this.saveValues}/>
            case 9:
                return <App.QuestionNine fieldValues={fieldValues}
                                         nextStep={this.nextStep}
                                         previousStep={this.previousStep}
                                         saveValues={this.saveValues}/>
            case 10:
                return <App.WizardConfirm fieldValues={fieldValues}
                                          previousStep={this.previousStep}
                                          submitRegistration={this.submitRegistration}/>
            case 11:
                return <App.WizardPositive fieldValues={fieldValues}/>
        }
    },

    render: function () {
        var style = {
            width: (this.state.step / 9 * 100) + '%'
        }

        return (
            <div className="form wizard module">
                <div className="progress meter">
                    <progress className="progress bar" style={style}></progress>
                </div>
                {this.renderQuestion()}
                {this.showStep()}
                <span className="progress step">{this.state.step} / 9</span>
            </div>
        )
    }
});