SID = {
	canvas: null,
	width: 1920,
	height: 1080,
	json: {},
	thing: {},
	scene: null,
	start: 0,
	maskout: false,
	acceptinput: false
};
function LOAD(json) {
	var data = json;
	var name = data.name || "anonymous";
	SID.json[name] = data;
}
if(!console) {
	console = {
		log: function() {},
		error: function() {}
	}
}

function tick(scene) {
	var prog = (new Date() - SID.start) / 1000;

	SID.thing.bug.obj._$.body.offset.y = 192 + (Math.cos(prog * 3) * 20);
	SID.thing.bug.obj._$.blood.scale = 1 + ((Math.sin(prog * 3)) /  4);
	SID.thing.bug.obj._$.wing1.rotate = (Math.sin(prog * 30) * 45);
	SID.thing.bug.obj._$.wing2.rotate = -(Math.sin(prog * 30) * 45);

	SID.thing.bug.obj._$.body.offset.x = 238 + (Math.cos(prog * 1) * 10);
	SID.thing.bug.obj._$.body.scale = 1 + (Math.cos(prog * 3) / 100);
	SID.thing.bug.obj._$.body.rotate = (Math.cos(prog * 2) * 1);
	SID.thing.bug.obj._$.blood.rotate = (Math.sin(prog * 2) * 3);
}

function transitionEnd() {
	// examine state, set up next scene

	if(SID.maskout) {
		SID.scene.pause();
	}
	SID.acceptinput = true;
}

function start() {
	console.log("start");
	SID.start = new Date();
	SID.scene = new penduinSCENE(SID.canvas, SID.width, SID.height,
								 tick, 60);
//	SID.scene.showFPS(true);
	SID.scene.addOBJ(SID.thing.bug);
	SID.scene.setBG("#ddd");
	SID.thing.bug.x = 1920/2;
	SID.thing.bug.y = 1080/2;

	SID.scene.transition(SID.mask, SID.maskout);
}

function combineCallbacks(cbList, resultsVary, cb) {
	var results = [];
	var res = [];
	var uniq = [];
	while(results.length < cbList.length) {
		results.push(null);
	}

	cbList.every(function(callback, idx) {
		return callback(function(val) {
			res.push(val);
			results[idx] = val;
			if(uniq.indexOf(val) < 0) {
				uniq.push(val);
			}
			if(res.length === cbList.length) {
				if(uniq.length === 1) {
					cb(uniq[0], results);
				} else if(uniq.length > 1) {
					cb(resultsVary, results);
				} else {
					cb(null, results);
				}
			}
		});
	});
}

window.addEventListener("load", function() {
	SID.canvas = document.querySelector("#display");
	var cbs = [];

	// load transition
	SID.mask = new penduinTRANSITION(transitionEnd, "image/heart.png");

	// load object armatures
	Object.keys(SID.json).every(function(key) {
		cbs.push(function(cb) {
			SID.thing[key] = new penduinOBJ(SID.json[key], cb);
			return true;
		});
		return true;
	});

	combineCallbacks(cbs, null, start);
});

window.addEventListener("click", function() {
	if(!SID.acceptinput) {
		return;
	}
	SID.scene.resume();
	SID.maskout = !SID.maskout;
	SID.acceptinput = false;
	SID.scene.transition(SID.mask, SID.maskout);
});
