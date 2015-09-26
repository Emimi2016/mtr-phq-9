App.Root = React.createClass({
    render() {
        return (
            <main className="animated fadeIn root view">
                <p className="intro statement">
                    Over the last two weeks, how often have you been bothered by any of the following problems?
                </p>
                <App.Questions />
            </main>
        )
    }
});