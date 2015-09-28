App.Scores = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},

    getMeteorData() {
        var data = {},
            handle = Meteor.subscribe('scores');

        if (handle.ready()) {
            data.scores = Scores.find({}, {limit: 1, sort: {createdAt: -1}}).fetch();
        }

        return data;
    },

    renderScores() {
        return this.data.scores.map(function (score) {
            return (
                <h1 className="score" key={score._id}>You scored a {score.sum}!</h1>
            )
        });
    },

    render() {
        return (
            <figcaption className="scores module">
                {(this.data.scores) ? this.renderScores() : <App.Loading />}
            </figcaption>
        )
    }
});