App.Header = React.createClass({
    render() {
        if (FlowRouter.getRouteName() === 'Root') {
            return (
                <header className="animated fadeInDown header">
                    <p className="statement">
                        Over the last two weeks, how often have you been bothered by any of the following problems?
                    </p>
                </header>
            )
        } else {
            return (
                <header className="animated fadeInDown header">
                    <App.Quotes />
                </header>
            )
        }
    }
});