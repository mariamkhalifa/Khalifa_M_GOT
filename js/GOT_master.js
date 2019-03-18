(() => {
	console.log("working");

	// variable stack
	// grab the shields at the bottom of the page
	const 	shields 	= document.querySelectorAll('.sigil-container'),
			lightBox 	= document.querySelector('.lightbox'),
			video		= document.querySelector('video');

	function showLightbox() {
		lightBox.classList.add('show-lightbox');
	}

	function hideLightbox() {
		lightBox.classList.remove('show-lightbox');
		//rewind the video to the beginning
		////and also pause it
		video.currentTime = 0;
		video.pause();
	}

	shields.forEach(shield => shield.addEventListener('click', showLightbox));

	video.addEventListener('ended', hideLightbox);
})();