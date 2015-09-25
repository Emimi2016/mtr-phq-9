App.QuestionSix = React.createClass({
    renderOptions: function(type, name, value, index) {
        var isChecked = function() {
            if (type == 'radio') return value == this.props.fieldValues[name]

            return false
        }.bind(this)

        return (
            <label key={index} className="radio label">
                <input type={type} name={name} className="radio input" value={value} defaultChecked={isChecked()} /> {value}
            </label>
        )
    },

    render: function () {
        return (
            <div className="question">
                <h2>Feeling bad about yourself - or that you are a failure or have let yourself or your family down?</h2>
                {['Not at all', 'Several days', 'More than half the days', 'Nearly every day'].map(this.renderOptions.bind(this, 'radio', 'question6'))}
                <div className="buttons">
                    <button className="fluid secondary button" onClick={this.props.previousStep}>Back</button>
                    <button className="fluid primary button" onClick={this.nextStep}>Save &amp; Continue</button>
                </div>
            </div>
        )
    },

    nextStep: function (e) {
        e.preventDefault()

        // Get values via query selector
        var answer = document.querySelector('input[name="question6"]:checked');
        var data = {
            question6: answer
        }

        this.props.saveValues(data)
        this.props.nextStep()
    }
})