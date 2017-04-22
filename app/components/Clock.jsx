var React = require('react');

var Clock = React.createClass({
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  getDefaultProps: function()
  {
    return {
      totalSeconds: 0
    };
  },
  formatSeconds: function(totalSeconds)
  {
    var seconds = totalSeconds % 60,
        minutes = Math.floor(totalSeconds / 60);

    // add leading zero, where required
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return minutes + ':' + seconds;
  },
  render: function()
  {
    var {totalSeconds} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
      </div>
    );
  }
});

module.exports = Clock;
