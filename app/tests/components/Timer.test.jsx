var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var testUtils = require('react-addons-test-utils');

// component to test
var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should pause count up on started status', (done) => {
      var timer = testUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(() =>
      {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it('should clear countdown on stopped status', (done) => {
      var timer = testUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(() =>
      {
        timer.handleStatusChange('stopped');
        expect(timer.state.count).toBe(0);

        //state gets switched to 'paused' so the 'start' button shows
        expect(timer.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should stop count on paused status', (done) => {
      var timer = testUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(() =>
      {
        timer.handleStatusChange('paused');
        expect(timer.state.count).toBe(1);
        expect(timer.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });
  });
});
