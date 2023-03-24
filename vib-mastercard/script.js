const shadow = document.querySelectorAll(".shadow");
const card = document.querySelector(".card-floating");
const cardBounding = card.getBoundingClientRect();
const handleMouseMove = (e) => {
	let mousePosX = e.x - cardBounding.left - cardBounding.width / 2;
	let mousePosY = e.y - cardBounding.top - cardBounding.height / 2;

	shadow.forEach((element) => {
		element.style = `filter: drop-shadow(${-mousePosX / 70}px ${
			-mousePosY / 70
		}px 2px #00000055)`;
	});

	card.style = `transform:rotateX(${-mousePosY / 30}deg) rotateY(${
		mousePosX / 30
	}deg);
  filter: drop-shadow(${-mousePosX / 10}px ${
		-mousePosY / 10
	}px 8px #00000055);`;
};
addEventListener("mousemove", handleMouseMove, false);
