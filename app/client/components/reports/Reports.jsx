App.Reports = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},

    getMeteorData() {
        var data = {},
            handle = Meteor.subscribe('reports');

        if (handle.ready()) {
            data.reports = Reports.find({}, {limit: 1, sort: {createdAt: -1}}).fetch();
        }

        return data;
    },

    renderReports() {

        return this.data.reports.map(function (report) {
            return (
                <figure className={report.class} key={report._id}>
                    <h1 className="score">You scored a {report.score}!</h1>
                    <p className="message">{report.message}</p>
                    {(report.class === 'negative report') ? <App.Doctors /> : ''}
                </figure>
            )
        });
    },

    render() {
        return (
            <div className="centered reports module">
                {(this.data.reports) ? this.renderReports() : <App.Loading />}
            </div>
        )
    }
});