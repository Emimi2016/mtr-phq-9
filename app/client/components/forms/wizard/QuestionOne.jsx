App.QuestionOne = React.createClass({
    renderOptions: function(type, name, value, index) {
        var isChecked = function() {
            if (type == 'radio') return value == this.props.fieldValues[name]

            return false
        }.bind(this)

        return (
            <label for={name} key={index} className="radio label">
                <input type={type} name={name} className="radio input" value={value} defaultChecked={isChecked()} /> {value}
            </label>
        )
    },

    render: function () {
        return (
            <div className="question">
                <h2 className="title">Little interest or pleasure in doing things?</h2>
                {['Not at all', 'Several days', 'More than half the days', 'Nearly every day'].map(this.renderOptions.bind(this, 'radio', 'question1'))}
                <button className="button primary" onClick={this.nextStep}>Save &amp; Continue</button>
            </div>
        )
    },

    nextStep: function (e) {
        e.preventDefault()

        // Get values via query selector
        var question1 = document.querySelector('input[name="question1"]:checked');
        var data = {
            question1: question1
        }

        this.props.saveValues(data)
        this.props.nextStep()
    }
})