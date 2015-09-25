App.FormInput = React.createClass({
    propTypes: {
        hasError: React.PropTypes.bool,
        label: React.PropTypes.string,
        type: React.PropTypes.string,
        name: React.PropTypes.string,
        value: React.PropTypes.string,
    },
    shouldComponentUpdate() {
        return true;
    },
    render() {
        const {type, label, name, value } = this.props;
        let input;

        var className = 'radio input group';
        if (this.props.hasError) {
            className += ' negative';
        }

        input = (
            <input type={ type } className="input" name={ name.toLowerCase() } defaultValue={ value }/>
        );


        return (
            <div className={ className }>
                <label htmlFor={ name.toLowerCase() } className="label">
                    { input }
                    { value }
                </label>
            </div>
        )

    }
});