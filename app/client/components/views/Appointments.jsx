App.Appointments = React.createClass({
    PropTypes: {},

    render() {
        return (
            <main className="animated fadeIn appointments view">
                <div className="centered message module">
                    <h1 className="positive message">Your appointment is now scheduled!</h1>
                </div>
                <a className="fluid button" href="/">Take the PHQ-9 Survey</a>
            </main>
        )
    }
});