const tools = document.getElementById('tools-wrapper');
const btn = document.getElementById('contact-float');

const modBtn = () => {

	const dTop = tools.getBoundingClientRect().top;
	const dBottom = tools.getBoundingClientRect().bottom;

	if (dTop < 49 && dBottom > 14) {
		btn.classList.add('moz-dark');
	} else {
		btn.classList.remove('moz-dark');
	}
};


let wait = false;

const throttle = () => {
	setTimeout(() => {
		wait = false;
	},40);
};

const sync = () => {
	setTimeout(() => {
		modBtn()
	},80);
};

window.onscroll = () => {
	if (wait) return;

	wait = true;

	clearTimeout(throttle);
	modBtn();
	throttle();
	sync();
};