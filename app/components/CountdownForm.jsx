var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e)
  {
    e.preventDefault();

    var strSeconds = this.refs.seconds.value;

    if(strSeconds.length > 0 && strSeconds.match(/^[0-9]*$/))
    {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds));
    }
  },
  render: function()
  {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" placeholder="Enter time in seconds" ref="seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
