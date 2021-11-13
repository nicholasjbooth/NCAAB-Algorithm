module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1gDF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const teams = ['Abilene Christian', 'Air Force', 'Akron', 'Alabama', 'Alabama A&M', 'Alabama St.', 'Albany', 'Alcorn St.', 'American', 'Appalachian St.', 'Arizona', 'Arizona St.', 'Arkansas', 'Arkansas Pine Bluff', 'Arkansas St.', 'Army', 'Auburn', 'Austin Peay', 'Ball St.', 'Baylor', 'Bellarmine', 'Belmont', 'Bethune Cookman', 'Binghamton', 'Boise St.', 'Boston College', 'Boston University', 'Bowling Green', 'Bradley', 'Brown', 'Bryant', 'Bucknell', 'Buffalo', 'Butler', 'BYU', 'Cal Baptist', 'Cal Poly', 'Cal St. Bakersfield', 'Cal St. Fullerton', 'Cal St. Northridge', 'California', 'Campbell', 'Canisius', 'Central Arkansas', 'Central Connecticut', 'Central Michigan', 'Charleston', 'Charleston Southern', 'Charlotte', 'Chattanooga', 'Chicago St.', 'Cincinnati', 'Clemson', 'Cleveland St.', 'Coastal Carolina', 'Colgate', 'Colorado', 'Colorado St.', 'Columbia', 'Connecticut', 'Coppin St.', 'Cornell', 'Creighton', 'Dartmouth', 'Davidson', 'Dayton', 'Delaware', 'Delaware St.', 'Denver', 'DePaul', 'Detroit', 'Dixie St.', 'Drake', 'Drexel', 'Duke', 'Duquesne', 'East Carolina', 'East Tennessee St.', 'Eastern Illinois', 'Eastern Kentucky', 'Eastern Michigan', 'Eastern Washington', 'Elon', 'Evansville', 'Fairfield', 'Fairleigh Dickinson', 'FIU', 'Florida', 'Florida A&M', 'Florida Atlantic', 'Florida Gulf Coast', 'Florida St.', 'Fordham', 'Fresno St.', 'Furman', 'Gardner Webb', 'George Mason', 'George Washington', 'Georgetown', 'Georgia', 'Georgia Southern', 'Georgia St.', 'Georgia Tech', 'Gonzaga', 'Grambling St.', 'Grand Canyon', 'Green Bay', 'Hampton', 'Hartford', 'Harvard', 'Hawaii', 'High Point', 'Hofstra', 'Holy Cross', 'Houston', 'Houston Baptist', 'Howard', 'Idaho', 'Idaho St.', 'Illinois', 'Illinois Chicago', 'Illinois St.', 'Incarnate Word', 'Indiana', 'Indiana St.', 'Iona', 'Iowa', 'Iowa St.', 'IUPUI', 'Jackson St.', 'Jacksonville', 'Jacksonville St.', 'James Madison', 'Kansas', 'Kansas St.', 'Kennesaw St.', 'Kent St.', 'Kentucky', 'La Salle', 'Lafayette', 'Lamar', 'Lehigh', 'Liberty', 'Lipscomb', 'Little Rock', 'LIU', 'Long Beach St.', 'Longwood', 'Louisiana', 'Louisiana Monroe', 'Louisiana Tech', 'Louisville', 'Loyola Chicago', 'Loyola Marymount', 'Loyola MD', 'LSU', 'Maine', 'Manhattan', 'Marist', 'Marquette', 'Marshall', 'Maryland', 'Maryland Eastern Shore', 'Massachusetts', 'McNeese St.', 'Memphis', 'Mercer', 'Merrimack', 'Miami FL', 'Miami OH', 'Michigan', 'Michigan St.', 'Middle Tennessee', 'Milwaukee', 'Minnesota', 'Mississippi', 'Mississippi St.', 'Mississippi Valley St.', 'Missouri', 'Missouri St.', 'Monmouth', 'Montana', 'Montana St.', 'Morehead St.', 'Morgan St.', "Mount St. Mary's", 'Murray St.', 'N.C. State', 'Navy', 'Nebraska', 'Nebraska Omaha', 'Nevada', 'New Hampshire', 'New Mexico', 'New Mexico St.', 'New Orleans', 'Niagara', 'Nicholls St.', 'NJIT', 'Norfolk St.', 'North Alabama', 'North Carolina', 'North Carolina A&T', 'North Carolina Central', 'North Dakota', 'North Dakota St.', 'North Florida', 'North Texas', 'Northeastern', 'Northern Arizona', 'Northern Colorado', 'Northern Illinois', 'Northern Iowa', 'Northern Kentucky', 'Northwestern', 'Northwestern St.', 'Notre Dame', 'Oakland', 'Ohio', 'Ohio St.', 'Oklahoma', 'Oklahoma St.', 'Old Dominion', 'Oral Roberts', 'Oregon', 'Oregon St.', 'Pacific', 'Penn', 'Penn St.', 'Pepperdine', 'Pittsburgh', 'Portland', 'Portland St.', 'Prairie View A&M', 'Presbyterian', 'Princeton', 'Providence', 'Purdue', 'Purdue Fort Wayne', 'Quinnipiac', 'Radford', 'Rhode Island', 'Rice', 'Richmond', 'Rider', 'Robert Morris', 'Rutgers', 'Sacramento St.', 'Sacred Heart', "Saint Joseph's", 'Saint Louis', "Saint Mary's", "Saint Peter's", 'Sam Houston St.', 'Samford', 'San Diego', 'San Diego St.', 'San Francisco', 'San Jose St.', 'Santa Clara', 'Seattle', 'Seton Hall', 'Siena', 'SIU Edwardsville', 'SMU', 'South Alabama', 'South Carolina', 'South Carolina St.', 'South Dakota', 'South Dakota St.', 'South Florida', 'Southeast Missouri St.', 'Southeastern Louisiana', 'Southern', 'Southern Illinois', 'Southern Miss', 'Southern Utah', 'St. Bonaventure', 'St. Francis NY', 'St. Francis PA', "St. John's", 'Stanford', 'Stephen F. Austin', 'Stetson', 'Stony Brook', 'Syracuse', 'Tarleton St.', 'TCU', 'Temple', 'Tennessee', 'Tennessee Martin', 'Tennessee St.', 'Tennessee Tech', 'Texas', 'Texas A&M', 'Texas A&M Corpus Chris', 'Texas Southern', 'Texas St.', 'Texas Tech', 'The Citadel', 'Toledo', 'Towson', 'Troy', 'Tulane', 'Tulsa', 'UAB', 'UC Davis', 'UC Irvine', 'UC Riverside', 'UC San Diego', 'UC Santa Barbara', 'UCF', 'UCLA', 'UMass Lowell', 'UMBC', 'UMKC', 'UNC Asheville', 'UNC Greensboro', 'UNC Wilmington', 'UNLV', 'USC', 'USC Upstate', 'UT Arlington', 'UT Rio Grande Valley', 'Utah', 'Utah St.', 'Utah Valley', 'UTEP', 'UTSA', 'Valparaiso', 'Vanderbilt', 'VCU', 'Vermont', 'Villanova', 'Virginia', 'Virginia Tech', 'VMI', 'Wagner', 'Wake Forest', 'Washington', 'Washington St.', 'Weber St.', 'West Virginia', 'Western Carolina', 'Western Illinois', 'Western Kentucky', 'Western Michigan', 'Wichita St.', 'William & Mary', 'Winthrop', 'Wisconsin', 'Wofford', 'Wright St.', 'Wyoming', 'Xavier', 'Yale', 'Youngstown St.'];
/* harmony default export */ __webpack_exports__["default"] = (teams);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1gDF");


/***/ })

/******/ });