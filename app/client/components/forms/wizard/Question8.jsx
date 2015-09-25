App.QuestionEight = React.createClass({
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
                <h2>Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?</h2>
                {['Not at all', 'Several days', 'More than half the days', 'Nearly every day'].map(this.renderOptions.bind(this, 'radio', 'question8'))}
                <button className="fluid secondary button" onClick={this.props.previousStep}>Back</button>
                <button className="fluid primary button" onClick={this.nextStep}>Save &amp; Continue</button>
            </div>
        )
    },

    nextStep: function (e) {
        e.preventDefault()

        // Get values via query selector
        var answer = document.querySelector('input[name="question8"]:checked');
        var data = {
            question8: answer
        }

        this.props.saveValues(data)
        this.props.nextStep()
    }
})