"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TextLayerItemInternal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PageContext = _interopRequireDefault(require("../PageContext"));

var _propTypes2 = require("../shared/propTypes");

var TextLayerItemInternal =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(TextLayerItemInternal, _PureComponent);

  function TextLayerItemInternal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TextLayerItemInternal);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TextLayerItemInternal).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getElementWidth", function (element) {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          sideways = _assertThisInitialize.sideways;

      return element.getBoundingClientRect()[sideways ? "height" : "width"];
    });
    _this.state = {
      actualWidth: 1,
      targetWidth: 1
    };
    return _this;
  }

  (0, _createClass2["default"])(TextLayerItemInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.alignTextItem();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.alignTextItem();
    }
  }, {
    key: "getFontData",
    value: function () {
      var _getFontData = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(fontName) {
        var page, font;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = this.props.page;
                _context.next = 3;
                return new Promise(function (resolve) {
                  page.commonObjs.get(fontName, resolve);
                });

              case 3:
                font = _context.sent;
                return _context.abrupt("return", font);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getFontData(_x) {
        return _getFontData.apply(this, arguments);
      }

      return getFontData;
    }()
  }, {
    key: "alignTextItem",
    value: function () {
      var _alignTextItem = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var element, _this$props, fontName, scale, width, fontData, fallbackFontName, targetWidth, actualWidth, transform, ascent;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                element = this.item;

                if (element) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                element.style.transform = "";
                _this$props = this.props, fontName = _this$props.fontName, scale = _this$props.scale, width = _this$props.width;
                element.style.fontFamily = "".concat(fontName, ", sans-serif");
                _context2.next = 8;
                return this.getFontData(fontName);

              case 8:
                fontData = _context2.sent;
                fallbackFontName = fontData ? fontData.fallbackName : "sans-serif";
                element.style.fontFamily = "".concat(fontName, ", ").concat(fallbackFontName);
                targetWidth = width * scale;
                actualWidth = this.getElementWidth(element);
                this.setState({
                  actualWidth: actualWidth,
                  targetWidth: targetWidth,
                  width: width
                }); // NOTE: Changed in attempt to remove text layer offset

                transform = "scaleX(".concat(targetWidth / actualWidth, ")"); // let transform = `scaleX(1)`;

                ascent = fontData ? fontData.ascent : 0;

                if (ascent) {
                  transform += " translateY(".concat((1 - ascent) * 100, "%)");
                }

                element.style.transform = transform;

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function alignTextItem() {
        return _alignTextItem.apply(this, arguments);
      }

      return alignTextItem;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          actualWidth = _this$state.actualWidth,
          targetWidth = _this$state.targetWidth,
          width = _this$state.width;
      var fontSize = this.fontSize,
          top = this.top,
          left = this.left;
      var _this$props2 = this.props,
          customTextRenderer = _this$props2.customTextRenderer,
          scale = _this$props2.scale,
          text = _this$props2.str;
      return _react["default"].createElement("div", null, _react["default"].createElement("span", {
        style: {
          fontFamily: "sans-serif",
          fontSize: "".concat(fontSize * scale, "px"),
          position: "absolute",
          top: "".concat(top * scale, "px"),
          left: "".concat(left * scale, "px"),
          width: "".concat(actualWidth, "px"),
          transformOrigin: "left bottom",
          whiteSpace: "pre",
          pointerEvents: "all"
        },
        ref: function ref(_ref) {
          _this2.item = _ref;
        }
      }, customTextRenderer ? customTextRenderer(this.props) : text), _react["default"].createElement("span", {
        style: {
          display: "none"
        }
      }, "targetWidth: ".concat(targetWidth, ", actualWidth: ").concat(actualWidth, ", width: ").concat(width)));
    }
  }, {
    key: "unrotatedViewport",
    get: function get() {
      var _this$props3 = this.props,
          page = _this$props3.page,
          scale = _this$props3.scale;
      return page.getViewport({
        scale: scale
      });
    }
    /**
     * It might happen that the page is rotated by default. In such cases, we shouldn't rotate
     * text content.
     */

  }, {
    key: "rotate",
    get: function get() {
      var _this$props4 = this.props,
          page = _this$props4.page,
          rotate = _this$props4.rotate;
      return rotate - page.rotate;
    }
  }, {
    key: "sideways",
    get: function get() {
      var rotate = this.rotate;
      return rotate % 180 !== 0;
    }
  }, {
    key: "defaultSideways",
    get: function get() {
      var rotation = this.unrotatedViewport.rotation;
      return rotation % 180 !== 0;
    }
  }, {
    key: "fontSize",
    get: function get() {
      var transform = this.props.transform;
      var defaultSideways = this.defaultSideways;

      var _transform = (0, _slicedToArray2["default"])(transform, 2),
          fontHeightPx = _transform[0],
          fontWidthPx = _transform[1];

      return defaultSideways ? fontWidthPx : fontHeightPx;
    }
  }, {
    key: "top",
    get: function get() {
      var transform = this.props.transform;
      var viewport = this.unrotatedViewport,
          defaultSideways = this.defaultSideways;

      var _transform2 = (0, _slicedToArray2["default"])(transform, 6),

      /* fontHeightPx */

      /* fontWidthPx */
      offsetX = _transform2[2],
          offsetY = _transform2[3],
          x = _transform2[4],
          y = _transform2[5];

      var _viewport$viewBox = (0, _slicedToArray2["default"])(viewport.viewBox, 4),

      /* xMin */
      yMin
      /* xMax */
      = _viewport$viewBox[1],
          yMax = _viewport$viewBox[3];

      return defaultSideways ? x + offsetX + yMin : yMax - (y + offsetY);
    }
  }, {
    key: "left",
    get: function get() {
      var transform = this.props.transform;
      var viewport = this.unrotatedViewport,
          defaultSideways = this.defaultSideways;

      var _transform3 = (0, _slicedToArray2["default"])(transform, 6),

      /* fontHeightPx */

      /* fontWidthPx */

      /* offsetX */

      /* offsetY */
      x = _transform3[4],
          y = _transform3[5];

      var _viewport$viewBox2 = (0, _slicedToArray2["default"])(viewport.viewBox, 1),
          xMin = _viewport$viewBox2[0];

      return defaultSideways ? y - xMin : x - xMin;
    }
  }]);
  return TextLayerItemInternal;
}(_react.PureComponent);

exports.TextLayerItemInternal = TextLayerItemInternal;
TextLayerItemInternal.propTypes = {
  customTextRenderer: _propTypes["default"].func,
  fontName: _propTypes["default"].string.isRequired,
  itemIndex: _propTypes["default"].number.isRequired,
  // eslint-disable-line react/no-unused-prop-types
  page: _propTypes2.isPage.isRequired,
  rotate: _propTypes2.isRotate,
  scale: _propTypes["default"].number,
  str: _propTypes["default"].string.isRequired,
  transform: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  width: _propTypes["default"].number.isRequired
};

var TextLayerItem = function TextLayerItem(props) {
  return _react["default"].createElement(_PageContext["default"].Consumer, null, function (context) {
    return _react["default"].createElement(TextLayerItemInternal, (0, _extends2["default"])({}, context, props));
  });
};

var _default = TextLayerItem;
exports["default"] = _default;