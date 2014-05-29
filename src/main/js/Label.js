/** @jsx React.DOM */

var React  = require("react");

// copy from http://myshareoftech.com/2013/12/unit-testing-react-dot-js-with-jasmine-and-karma.html

module.exports = React.createClass({
    handleClick: function() {
        this.props.children = "Text After Click";
        this.setState({liked: false});
    },

    render: function () {
        return (
            <p ref="p" onClick={this.handleClick}>{this.props.children}</p>
        );
    }
});