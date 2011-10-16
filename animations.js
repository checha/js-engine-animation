function Animations(options) {

	options = options || {};
	var self = this;
	var prefix = 'Webkit';
	
	function __construct() {
		
	}
	
	self.add = function(obj, name, options) {// options {toStyle, action, duration, delay, direction, type}
		if(!obj || (typeof obj != 'object' && typeof obj != 'function')) {
			console.log('ANIMATIONS ERROR: "'+obj+'" is not object');
			return false;
		}
		obj['__animations__'] = obj['__animations__'] || {};
		if(obj['__animations__'][name] && typeof obj['__animations__'][name] == 'object') {
			console.log('ANIMATIONS ERROR: animate - "'+name+'" -  already exist');
			return false;
		}
		
		// type
		var type = options.type || 'js';
		if(type != 'css3' && type != 'js' && type != 'html5') type = 'js';
		
		// action
		var action = options.action;
		var actionArg = [];
		if(typeof action == 'function') {
		
			action = action;
			type = 'js';// html5
			
		} else if(typeof action == 'object') {
		
			if(!action.type) {
				console.log('ANIMATIONS ERROR: animation type - "'+action.type+'" - not found');
				return false;
			}
			
			switch(action.type) {
				case 'steps':
					actionArg.push(action.arg[0] || 0);// steps
					actionArg.push(action.arg[1] || 'start');// position
				break;
				case 'cubic-bezier':
					actionArg.push(action.arg[0] || 0);
					actionArg.push(action.arg[1] || 0);
					actionArg.push(action.arg[2] || 1);
					actionArg.push(action.arg[3] || 1);
				break;
				default:
					console.log('ANIMATIONS ERROR: type animation - "'+action.type+'" - not found');
					return false;
			}
			
			action = action.type;
			
			if(type == 'js' || type == 'html5') {
				console.log('ANIMATIONS ERROR: not implemented');
			} else if(type == 'css3') {
				action = action.type+'('+actionArg.join(',')+')';
			}
			
		} else {
		
			if(action != 'ease' && action != 'linear' && action != 'ease-in' && action != 'ease-out' && action != 'ease-in-out') {
				console.log('ANIMATIONS ERROR: animation "'+action+'" - not found');
				return false;
			}
			
			if(type == 'js' || type == 'html5') {
				console.log('ANIMATIONS ERROR: not implemented');
			}
			
		}
		
		// direction		
		var direction = options.direction;
		if(direction == 'normal') direction = 1;
		else if(direction == 'alternate') direction = 2;
		else direction = 1;
		
		// style
		options.toStyle = options.toStyle || {};
		
		// property
		var property = [];
		for(var i in options.toStyle) property.push(i);
		
		// animation object
		obj['__animations__'][name] = {
			fromStyle: {},
			toStyle: options.toStyle,
			property: property,
			action: action,
			actionArg: actionArg,
			duration: parseInt(options.duration) || 1000,
			delay: parseInt(options.delay) || 0,
			direction: direction,
			indexs: [],
			loop: false,
			state: 0,// 1 - play, 0 - stop, 2 - pause
			type: type
		}
		
		if(type == 'css3') {
		
			var sNames = [prefix+'TransitionProperty', prefix+'TransitionDuration', prefix+'TransitionTimingFunction', prefix+'TransitionDelay'];
			
			var transition = {};
			for(var i=0; i<sNames.length; i++) { transition[sNames[i]] = obj.style[sNames[i]] || null; }
			
			for(var i in transition) { if(transition[i]) transition[i] = transition[i].split(','); else transition[i] = []; }
			
			for(var i=0; i<property.length; i++) {
				obj['__animations__'][name]['indexs'].push(transition[prefix+'TransitionProperty'].length);
				transition[prefix+'TransitionProperty'].push('none');//property[i]);
				transition[prefix+'TransitionDuration'].push(obj['__animations__'][name]['duration']+'ms');
				transition[prefix+'TransitionTimingFunction'].push(obj['__animations__'][name]['action']);
				transition[prefix+'TransitionDelay'].push(obj['__animations__'][name]['delay']+'ms');
			}
			
			for(var i=0; i<sNames.length; i++) { obj.style[sNames[i]] = transition[sNames[i]].join(','); }
			
		} else if(type == 'html5') {
			console.log('ANIMATIONS ERROR: not implemented');
		} else if(type == 'js') {
			console.log('ANIMATIONS ERROR: not implemented');
		}
		
		// end
		
	}
	
	self.remove = function(obj, name) {
		
	}
	
	// test
	self.play = function(obj, name, fromStyle) {
		var arg = ['__animations__'][name];
		
		
		
	}
	
	self.pause = function(obj, name) {
		
	}
	
	self.stop = function(obj, name) {
		
	}
	
	self.loop = function(obj, name, count) {
		
	}
	
	function getStyle(obj, name) {// name - String, Array
		var style = obj.currentStyle || window.getComputedStyle(obj, null);
		style = style || {};
		var s = {};
		if(typeof name == 'object') {
			for(var i=0; i<name.length; i++) s[name[i]] = style[name[i]] || '';
		} else {
			s[name] = style[name];
		}
		return s;
	}
	
	__construct();

}

window.ANIMATIONS = new Animations();
