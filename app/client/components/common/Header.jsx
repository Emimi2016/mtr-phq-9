App.Header = React.createClass({
    renderStatement() {
        return (
            <p className="animated fadeInDown statement">
                Over the last two weeks, how often have you been bothered by any of the following problems?
            </p>
        )
    },

    render() {
        return (
            <header className="header">
                {(FlowRouter.getRouteName() === 'Root') ? this.renderStatement() : <App.Quotes />}
            </header>
        )
    }
});