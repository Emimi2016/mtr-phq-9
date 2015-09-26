App.Diagnosis = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},

    getMeteorData() {
        var data = {},
            handle = Meteor.subscribe('scores');
            Meteor.subscribe('reports');

        if (handle.ready()) {
            data.scores = Scores.find({}, {limit: 1, sort: {createdAt: -1}}).fetch();
            data.reports = Reports.find({}, {sort: {from: 1}}).fetch();
        }

        return data;
    },

    renderReports() {
        // TODO: create as child component to scores component
        // loop through each report object
        // if status negative, show doctors component
        return this.data.reports.map(function (report) {
            return (
                <small className="message" key={report._id}>{report.message}</small>
            )
        });
    },

    renderScores() {
        // TODO: integrate with reports component
        // loop through using from to variables in reports
        return this.data.scores.map(function (score) {
            if (score.sum >= 0 && score.sum <= 4) {
                return (
                    <div className="centered scores module" key={score._id}>
                        <h1 className="positive score">You scored a {score.sum}!
                            <small className="message">You don't seem to be depressed... stay happy.</small>
                        </h1>
                    </div>
                )
            }
            if (score.sum >= 5 && score.sum <= 9) {
                return (
                    <div className="centered scores module" key={score._id}>
                        <h1 className="caution score">You scored a {score.sum}!
                            <small className="message">You seem to have mild depression... all things pass.</small>
                        </h1>
                    </div>
                )
            }
            if (score.sum >= 10 && score.sum <= 14) {
                return (
                    <div className="scores module" key={score._id}>
                        <h1 className="negative score">You scored a {score.sum}!
                            <small className="message">You seem to have moderate depression... how about seeing one of these
                                specialists?</small>
                        </h1>
                        <App.Doctors />
                    </div>
                )
            }
            if (score.sum >= 15 && score.sum <= 19) {
                return (
                    <div className="scores module" key={score._id}>
                        <h1 className="negative score">You scored a {score.sum}!
                            <small className="message">You seem to have moderately severe depression... consider seeing one of
                                these specialists:</small>
                        </h1>
                        <App.Doctors />
                    </div>
                )
            }
            if (score.sum >= 20 && score.sum <= 27) {
                return (
                    <div className="scores module" key={score._id}>
                        <h1 className="negative score">You scored a {score.sum}!
                            <small className="message">You seem to have severe depression... please schedule to see one of these
                                specialists:</small>
                        </h1>
                        <App.Doctors />
                    </div>
                )
            }
        });
    },

    render() {
        return (
            <main className="animated fadeIn diagnosis view">
                {(this.data.scores) ? this.renderScores() : <App.Loading />}
                <a className="fluid button" href="/">Take the PHQ-9 Again</a>
            </main>
        )
    }
});