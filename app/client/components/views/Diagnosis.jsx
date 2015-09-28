App.Diagnosis = React.createClass({
    render() {
        return (
            <main className="animated fadeIn diagnosis view">
                <App.Reports />
                <a className="fluid button" href="/">Take the PHQ-9 Again</a>
            </main>
        )
    }
});