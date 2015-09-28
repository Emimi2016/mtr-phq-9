App.Reports = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},

    getMeteorData() {
        var data = {},
            handle = Meteor.subscribe('scores');

        if (handle.ready()) {
            Meteor.subscribe('reports');
            data.scores = Scores.find({}, {limit: 1, sort: {createdAt: -1}}).fetch();
            data.reports = Reports.find({}, {sort: {from: 1}}).fetch();
        }

        return data;
    },

    renderReports() {
        // TODO: integrate with reports component
        // loop through using from to variables in reports
        return this.data.scores.map(function (score) {
            if (score.sum >= 0 && score.sum <= 4) {
                return (
                    <figure className="report" key={score._id}>
                        <h1 className="positive score">You scored a {score.sum}!
                            <small className="message">You don't seem to be depressed... stay happy.</small>
                        </h1>
                    </figure>
                )
            }
            if (score.sum >= 5 && score.sum <= 9) {
                return (
                    <figure className="report" key={score._id}>
                        <h1 className="caution score">You scored a {score.sum}!
                            <small className="message">You seem to have mild depression... all things pass.</small>
                        </h1>
                    </figure>
                )
            }
            if (score.sum >= 10 && score.sum <= 14) {
                return (
                    <figure className="report" key={score._id}>
                        <h1 className="negative score">You scored a {score.sum}!
                            <small className="message">You seem to have moderate depression... how about seeing one of these
                                specialists?</small>
                        </h1>
                        <App.Doctors />
                    </figure>
                )
            }
            if (score.sum >= 15 && score.sum <= 19) {
                return (
                    <figure className="report" key={score._id}>
                        <h1 className="negative score">You scored a {score.sum}!
                            <small className="message">You seem to have moderately severe depression... consider seeing one of
                                these specialists:</small>
                        </h1>
                        <App.Doctors />
                    </figure>
                )
            }
            if (score.sum >= 20 && score.sum <= 27) {
                return (
                    <figure className="report" key={score._id}>
                        <h1 className="negative score">You scored a {score.sum}!
                            <small className="message">You seem to have severe depression... please schedule to see one of these
                                specialists:</small>
                        </h1>
                        <App.Doctors />
                    </figure>
                )
            }
        });
    },

    render() {
        return (
            <div className="centered reports module">
                {(this.data.scores) ? this.renderReports() : <App.Loading />}
            </div>
        )
    }
});