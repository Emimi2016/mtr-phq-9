App.Quotes = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},

    getMeteorData() {
        var data = {},
            handle = Meteor.subscribe('quotes');

        if (handle.ready()) {
            data.quotes = Quotes.find({}, {limit: 1}).fetch();
            data.quote = _.flatten(_.sample(Quotes.find().fetch(), 1));
        }

        return data;
    },

    renderQuote() {
        return this.data.quotes.map(function (quote) {
            return (
                <blockquote className="quote">
                    {quote.quote}
                    <span className="author">-{quote.author}</span>
                </blockquote>
            )
        });
    },

    render() {
        return (
            <div className="animated fadeIn quotes module">
                {(this.data.questions) ? this.renderQuote() : 'PHQ-9'}
            </div>
        )
    }
});