// past event 

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

function lerp(n1, n2, speed) {
	return (1 - speed) * n1 + speed * n2;
}

function angle(from, to) {
	return Math.atan2(
		to[1] - from[1],
		to[0] - from[0]
	);
}

function distance(from, to) {
	return Math.sqrt(
		Math.pow(to[0] - from[0], 2),
		Math.pow(to[1] - from[1], 2)
	);
}

function distNorm(from, to, xMax, yMax) {
	return Math.sqrt(
		Math.pow((to[0] - from[0]) / xMax, 2),
		Math.pow((to[1] - from[1]) / yMax, 2)
	);
}

Array.prototype.lerp = function(target, speed) {
	this.forEach((n, i) => this[i] = lerp(n, target[i], speed));
};

class Frame {
	constructor(node) {
		this.node = node;
		this.scale = 1;
		this.maxScale = 1.25;
		this.rotation = [0, 0, 0];
		this.translation = [0, 0, 0];
		this.center = [0, 0];
		this.target = [
			0.5 * window.innerWidth,
			0.5 * window.innerHeight
		];
		this.padding = [
			0.5 * this.node.clientWidth,
			0.5 * this.node.clientHeight
		];
		this.focus = false;
		this.mouseover = false;
		this.distance = 0;
		this.node.addEventListener('mousemove', this.hover.bind(this));
		this.node.addEventListener('mouseleave', this.hover.bind(this));
		this.setCenter();
	}
	setCenter() {
		let rect = this.node.getBoundingClientRect();
		this.center[0] = rect.left + this.padding[0];
		this.center[1] = rect.top + this.padding[1];
		return this;
	}
	setTarget(target) {
		this.target[0] = target[0];
		this.target[1] = target[1];
		return this;
	}
	setDistance() {
		this.distNorm = distNorm(this.center, this.target, window.innerWidth, 0.5 * window.innerHeight);
		return this;
	}
	translate() {
		this.translation.lerp([
			0,
			0,
			this.mouseover ? 300 : 200 - this.distNorm * 400
		], 0.15);
		return this;
	}
	rotate() {
		let theta = angle(this.center, this.target);
		this.rotation.lerp([
			Math.sin(-theta) * 60 * this.distNorm,
			Math.cos(theta) * 90 * this.distNorm
		], 0.15);
		return this;
	}
	update() {
		this.node.style.transform = `
			translate3d(${this.translation[0]}px,${this.translation[1]}px,${this.translation[2]}px) 
			rotateX(${this.rotation[0]}deg) rotateY(${this.rotation[1]}deg)
		`;
	}
	hover(e) {
		this.mouseover = e.type === 'mousemove';
	}
}

class Gallery {
	constructor() {
		this.container = $('.gallery');
		this.center = [
			0.5 * window.innerWidth,
			0.5 * window.innerHeight
		];
		this.mouse = this.center.slice(0);
		this.target = this.mouse.slice(0);
		this.container.addEventListener('mousemove', this.hover.bind(this));
		this.container.addEventListener('mouseleave', this.hover.bind(this));
		window.addEventListener('resize', this.resize.bind(this));
		this.initFrames();
		this.update();
	}
	initFrames() {
		this.frames = [];
		$$('.frame').forEach(node => this.frames.push(new Frame(node)));
	}
	resize() {
		this.center = [
			0.5 * window.innerWidth,
			0.5 * window.innerHeight
		]
		this.frames.forEach(frame => frame.setCenter());
	}
	hover(e) {
		this.mouseover = e.type === 'mousemove';
		this.target[0] = e.clientX;
		this.target[1] = e.clientY;
	}
	update() {
		this.mouse.lerp(
			this.mouseover ? this.target : this.center, 
			0.125
		);
		this.frames.forEach(frame => {
			frame.setTarget(this.mouse)
				.setDistance()
				.translate()
				.rotate()
				.update();
		});
		this.container.style.perspectiveOrigin = `${this.mouse[0]}px 50%`;
		window.requestAnimationFrame(this.update.bind(this));
	}
}

const gallery = new Gallery();
