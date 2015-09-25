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
    mixins: [],
    PropTypes: {},

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

        this.nextStep()
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
                                          previousStep={this.previousStep}
                                          submitRegistration={this.submitRegistration}/>
            case 4:
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
                {this.showStep()}
                <span className="progress step">{this.state.step} / 9</span>
            </div>
        )
    }
});