App.FormAlerts = React.createClass({
    propTypes: {
        alert: React.PropTypes.string,
        type: React.PropTypes.string,
        message: React.PropTypes.string
    },
    shouldComponentUpdate() {
        return true;
    },
    render() {
        const {alert, type, message} = this.props;

        return (
            <div className={ alert }>
                <p className={ type }>{ message }</p>
            </div>
        )
    }
});