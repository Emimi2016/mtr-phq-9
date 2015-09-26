App.Appointments = React.createClass({
    render() {
        return (
            <main className="animated fadeIn appointments view">
                <div className="centered message module">
                    <h1 className="message">Your appointment has been set.</h1>
                </div>
                <a className="fluid button" href="/">Take the PHQ-9 Survey</a>
            </main>
        )
    }
});