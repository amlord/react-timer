var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var testUtils = require('react-addons-test-utils');

// component to test
var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause button when started', () => {
      var controls = testUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var pauseButton = $el.find('button:contains(Pause)');

      expect(pauseButton.length).toBe(1);
    });

    it('should render start button when paused', () => {
      var controls = testUtils.renderIntoDocument(<Controls countdownStatus='paused'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var startButton = $el.find('button:contains(Start)');

      expect(startButton.length).toBe(1);
    });
  });
});
