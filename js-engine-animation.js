/*
// все измеряется в пикселях(кроме исключений)
function Animation(options) {// {el, tostyle, fromstyle, action, duration, interval, grid, events}, events: start, end, pause, stop, progress

	var o = {
		tostyle:{},
		fromstyle:{},
		duration:0,// общая длинна временного вектора
		interval:0,// интервал между setTimeout
		grid:0,// сетка к которой должна привязиватся функция, которая анимирует обьект
		action:null,
		el:null,
		tpos:0,// текущая позиция на временном векторе
		id:null,
		start:null
	}
	var pause = false;
	var loop = false;
	var step = 0;

	function __construct(opts) {
		
	}
	
	__construct(options);
	
	this.play = function() {
		o.start = (new Date().getTime());
		
		
		
	}
	
	this.pause = function() {
		pause = true;
	}
	
	this.stop = function() {
		
	}
	
	this.loop = function(st) {
		
	}
	
	function tick() {
		id = setTimeout(function() {
		
			if(pause) return;
		
			var time = (new Date().getTime()) - o.start;
			
			if(o.duration <= time) {
				// отрисовка последнего кадра
				// провека наличия loop
				return;
			} else {
				// отрисовка кадра
				
				o.tpos = o.duration - time;
				
				// определяем вызывать ли отрисовку кадра
				if(o.grid > 0) {
					var tmp = (new Math()).ceil(o.tpos/o.grid);
					if(tmp > step) {
						step = tmp;
						// css
					}
				} else {
					// css
				}
				
				//tick();
			}
			
			// end
			
			// ...
			var style = {};
			if(typeof o.action == 'function') {
				style = o.action();
			} else {
				// вычислить style динамически
			}
			
			writeCSS(style);
			
		}, o.interval);
	}
	
	function writeCSS(arg) {
		
	}
	
}
*/

function listAnimations(options) {

	options = options || {};

	var id;
	var time = (new Date()).getTime();
	var o = {
		interval:options.interval || 1
	}
	
	function tick(){
		
		
		
		id = setTimeout(tick, o.interval);
	}
	
	function create() {
		id = setTimeout(tick, o.interval);
	}
	
	this.add = function(domEl, name, styles, options) {// {action=null, duration=1000, interval=0, grid=null, internal=true}
		
	}
	
	this.remove = function(domEl, name) {
		
	}
	
	this.addListener = function(domEl, name, type, callback) {// type: start, pause, end, stop, progress
		
	}
	
	this.removeListener = function(domEl, name, type, callback) {
		
	}
	
	this.play = function(domEl, name){
		
	}
	
	this.stop = function(domEl, name) {
		
	}
	
	this.stopPlay = function(domEl, name) {
		
	}
	
	this.pause = function(domEl, name) {
		
	}
	
	this.loop = function(domEl, name, status) {
		
	}
	
	function _engine() {
		
	}
	
	this.__destroy = function() {
		clearTimeout(id);
	}
	
	create();
	
}





















