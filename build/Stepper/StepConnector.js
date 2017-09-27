'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlainStepConnector = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Override the inline-style of the root element.
   */
  style: _react.PropTypes.object
};

var contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired,
  stepper: _react.PropTypes.object
};

var StepConnector = function StepConnector(props, context) {
  var muiTheme = context.muiTheme,
      stepper = context.stepper;


  var styles = {
    wrapper: {
      flex: '1 1 auto',
      alignSelf: 'flex-start',
      marginTop: '10px',
      position: 'absolute',
      width: '100%'
    },
    line: {
      display: 'block',
      borderColor: muiTheme.stepper.connectorLineColor
    }
  };

  /**
   * Clean up once we can use CSS pseudo elements
   */
  if (stepper.orientation === 'horizontal') {
    styles.line.marginLeft = '-20%';
    styles.line.marginRight = '-20%';
    styles.line.borderBottomStyle = 'solid';
    styles.line.borderBottomWidth = 1;
    styles.line.borderTopStyle = 'solid';
    styles.line.borderTopWidth = 1;
    styles.line.height = 5;
    styles.line.background = '#ccc';
  } else if (stepper.orientation === 'vertical') {
    styles.wrapper.marginLeft = 14 + 11; // padding + 1/2 icon
    styles.line.borderLeftStyle = 'solid';
    styles.line.borderLeftWidth = 1;
    styles.line.minHeight = 28;
  }

  var prepareStyles = muiTheme.prepareStyles;


  return _react2.default.createElement(
    'div',
    { style: prepareStyles(styles.wrapper) },
    _react2.default.createElement('span', { style: prepareStyles(styles.line) })
  );
};

StepConnector.propTypes = propTypes;
StepConnector.contextTypes = contextTypes;

exports.PlainStepConnector = StepConnector;
exports.default = (0, _pure2.default)(StepConnector);