App.Quotes = React.createClass({
    // @TODO: Pull random quote from Quotes Collection
    render: function () {
        return (
            <blockquote className="quote">
                "It does not matter how slowly you go as long as you do not stop"
                <span className="author">- Confucius</span>
            </blockquote>
        )
    }
});