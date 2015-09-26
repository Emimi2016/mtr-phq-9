App.Referrals = React.createClass({
    render() {
        return (
            <main className="animated fadeIn referrals view">
                <App.Doctors />
                <a className="fluid button" href="/">Take the PHQ-9 Survey</a>
            </main>
        )
    }
});