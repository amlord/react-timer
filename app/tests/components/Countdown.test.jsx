var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var testUtils = require('react-addons-test-utils');

// component to test
var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started, and count down', (done) => {
      var countdown = testUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() =>
      {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should not set count less than 0', (done) => {
      var countdown = testUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout(() =>
      {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });
});
