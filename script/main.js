let btnCall = document.querySelector('.btnCall');
let menuMo = document.querySelector('.menuMo');

btnCall.addEventListener('click', (e) => {
	// e = 이벤트 객체
	e.preventDefault();
	btnCall.classList.toggle('on');
	// 토글 = 스위치
	menuMo.classList.toggle('on');
});
