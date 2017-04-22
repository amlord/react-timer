var React = require('react');
var Clock = require('Clock');

var Countdown = (props) => {
  return (
    <div>
      <Clock totalSeconds={129}/>
    </div>
  );
};

module.exports = Countdown;
