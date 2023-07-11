import {square, cube, avg, digitsSum, sum} from './math.js';

let res = square(3) + cube(3);
console.log(res);

// import arr from './test.js';

// console.log(sum(arr));

// import {square, cube} from './math';

// let res = square(2) + cube(3);
// console.log(res);

// import _ from 'underscore';

// let arr = [1, 2, 3, 4, 5]
// let res = _.first(arr) + _.last(arr);
// console.log(res);

// import $ from "jquery";
// import  jquery-ui  from "jquery-ui";

console.log($)


$(document).ready(function(){
			$('#block1').click(
				function(){
					$('.transitionEachRowText').effect('slide', {mode: 'hide', direction: 'down'}, 1000);
					
					return false;
				}
			)
		});

$(document).ready(function(){
			$('#block1').click(
				function(){
					$('.transitionEachRowText').effect('slide', {mode: 'hide', direction: 'up'}, 1000);
					return false;
				}
			)
		});