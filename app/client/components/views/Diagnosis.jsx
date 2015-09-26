App.Diagnosis = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},

    getMeteorData() {
        var data = {},
            handle = Meteor.subscribe('scores');

        if (handle.ready()) {
            data.scores = Scores.find({}, {limit: 1, sort: {createdAt: -1}}).fetch();
            data.messages = [
                {
                    _id: 1,
                    from: 0,
                    to: 4,
                    message: 'You don\'t seem to be depressed... stay happy.',
                    status: 'positive'
                },
                {
                    _id: 2,
                    from: 5,
                    to: 9,
                    message: 'You seem to have mild depression... all things pass.',
                    status: 'caution'
                },
                {
                    _id: 3,
                    from: 10,
                    to: 14,
                    message: 'You seem to have moderate depression... how about seeing one of these specialists?',
                    status: 'negative'
                },
                {
                    _id: 4,
                    from: 15,
                    to: 19,
                    message: 'You seem to have moderately severe depression... consider seeing one of these specialists:',
                    status: 'negative'
                },
                {
                    _id: 5,
                    from: 20,
                    to: 27,
                    message: 'You seem to have severe depression... please schedule to see one of these specialists:',
                    status: 'negative'
                }
            ]
        }

        return data;
    },

    renderMessages() {
        return this.data.messages.map(function (message) {
            return (
                <small className="message" key={message._id}>{message.message}</small>
            )
        });
    },

    renderScores() {
        return this.data.scores.map(function (score) {
            //for(var i = 0; i < this.data.messages.length; ++i) {
            //    console.log(i)
            //}
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