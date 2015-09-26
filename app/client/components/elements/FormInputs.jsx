App.FormInput = React.createClass({
    propTypes: {
        hasError: React.PropTypes.bool,
        label: React.PropTypes.string,
        type: React.PropTypes.string,
        name: React.PropTypes.string,
        value: React.PropTypes.string
    },
    shouldComponentUpdate() {
        return true;
    },
    render() {
        const {label, type, name, value } = this.props;

        return (
            <label className="radio label">
                <input type={ type } className="radio input" name={ name.toLowerCase() } defaultValue={ value }/>
                <span className="choice">{ label }</span>
            </label>
        )

    }
});