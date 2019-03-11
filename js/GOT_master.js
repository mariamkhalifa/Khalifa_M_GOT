(() => {
	console.log('fired');

	//variable stack
	//grab teh shields at teh bottm f the page
	const shields = document.querySelectorAll('.sigil-container'),
		  lightBox = document.querySelector('.light-box');
		  video = document.querySelector('video');


	function showLightBox() {
		lightBox.classList.add('show-lightbox');
	}

	function hideLightBox() {
		lightBox.classList.remove('show-lightbox');
	}

	shields.forEach(shield => {
		shield.addEventListener("click", showLightBox)
	});
	video.addEventListener('click', hideLightBox);


})();