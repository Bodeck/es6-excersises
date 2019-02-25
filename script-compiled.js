'use strict';
//zadanie1

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var stringA = 'Hello';
var stringB = 'World!';
var stringFinal = stringA + ' ' + stringB;
//zadanie2
var multiply = function multiply(num1) {
  var num2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return num1 * num2;
};
//zadanie3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var sum = args.reduce(function (total, curr) {
    return total += curr;
  });
  return sum / args.length;
};
//zadanie4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var averGrade = average.apply(undefined, grades);
//zadanie5
var inputArray = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = inputArray[2],
    lastName = inputArray[4];

//Kata - zadanie1

function buildString() {
  for (var _len2 = arguments.length, template = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    template[_key2] = arguments[_key2];
  }

  return 'I like ' + template.join(', ') + '!';
}
//Kata - zadanie2
function shuffleIt(arr) {
  for (var _len3 = arguments.length, param = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    param[_key3 - 1] = arguments[_key3];
  }

  param.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        index1 = _ref2[0],
        index2 = _ref2[1];

    var index2Value = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = index2Value;
  });
  return arr;
}
//Kata zadanie3
function Sum(arr) {
  return arr.reduce(function (acc, curr) {
    return acc + curr;
  });
}

//Kata zadanie4
function spread(func, args) {
  return func.apply(undefined, _toConsumableArray(args));
}
