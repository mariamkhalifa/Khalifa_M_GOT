(() => {
	console.log("working");

	// variable stack
	// grab the shields at the bottom of the page
	const 	shields 	= document.querySelectorAll('.sigil-container'),
			lightBox 	= document.querySelector('.lightbox'),
			video		= document.querySelector('video');
			closeLB		= document.querySelector('.close-lightbox');
			banners 	= document.querySelector('#houseImages');
			houseName 	= document.querySelector('.house-name');
			houseInfo 	= document.querySelector('.house-info');
			houseData 	= [//STARK
`House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`];	

	function showLightbox() {
		//grab the right video source
		//debugger;
		//get th elower case house name form the class list
		let targetHouse = this.className.split(" ")[1];

		//make sure the names match - needs to be upper case
		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		//replace text in html
		////the backtics are called js template strings
		houseName.textContent = `House ${targetSrc}`;
		//this only even retrieves the forst first index in the array
		houseInfo.textContent = houseData[0];

		video.src = `video/House-${targetSrc}.mp4`;

		lightBox.classList.add('show-lightbox');
		video.load();
		video.play();
	}

	function hideLightbox() {
		lightBox.classList.remove('show-lightbox');
		//rewind the video to the beginning
		//and also pause it
		video.currentTime = 0;
		video.pause();
	}

	function animateBanner() {
		const offSet = 600;
		//this i sthe total distance teh images need to move as a pixel value
		//dataset.offset is coming from each 
		totalOffset = this.dataset.offset * offSet; //+ 'px';
		// banners.style.right = totalOffset;
		TweenMax.to(banners, 0.8, { right: totalOffset });
	}

	shields.forEach(shield => shield.addEventListener('click', showLightbox));
	// shields.forEach(shield => shield.addEventListener('click', animateBanner));
	video.addEventListener('ended', hideLightbox);
	closeLB.addEventListener('click', hideLightbox);
})();