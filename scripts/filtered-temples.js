
//hamburger menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});




// temple cards

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Buenos Aires",
	  location: "Buenos Aires, Argentina",
	  dedicated: "1983, April, 20",
	  area: 30659,
	  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-12546.jpg"
	},
	{
	  templeName: "Cordoba",
	  location: "Cordoba, Argentina",
	  dedicated: "2015, October, 30",
	  area: 34369,
	  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093.jpg"
	},
	{
	  templeName: "Salta",
	  location: "Salta, Argentina",
	  dedicated: "2024",
	  area: 27000,
	  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48236.jpg"
	}
  ];
  

  function renderTemples(templesToRender) {
	const templeCards = document.getElementById('templeCards');
	templeCards.innerHTML = ''; 
  
	templesToRender.forEach(imageObj => {
	  const imgElement = document.createElement('img');
	  imgElement.src = imageObj.imageUrl;
	  imgElement.alt = imageObj.templeName;
	  imgElement.loading = "lazy";
  
	  const templeElement = document.createElement('h1');
	  templeElement.textContent = imageObj.templeName;
  
	  const locationElement = document.createElement('p');
	  locationElement.textContent = `Location: ${imageObj.location}`;
  
	  const dedicationElement = document.createElement('p');
	  dedicationElement.textContent = `Dedicated: ${imageObj.dedicated}`;
  
	  const areaElement = document.createElement('p');
	  areaElement.textContent = `Area: ${imageObj.area} sq ft`;
  
	  const imageContainer = document.createElement('div');
	  imageContainer.classList.add('image-container');
	  imageContainer.appendChild(imgElement);
	  imageContainer.appendChild(templeElement);
	  imageContainer.appendChild(locationElement);
	  imageContainer.appendChild(dedicationElement);
	  imageContainer.appendChild(areaElement);
  
	  templeCards.appendChild(imageContainer);
	});
  }
  
  document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('navHome').addEventListener('click', function(event) {
	  event.preventDefault();
	  renderTemples(temples); 
	});
  
	document.getElementById('navOld').addEventListener('click', function(event) {
	  event.preventDefault();
	  const oldTemples = temples.filter(temple => {
		const dedicationYear = parseInt(temple.dedicated.split(',')[0]);
		return dedicationYear < 1900;
	  });
	  renderTemples(oldTemples);
	});
  
	document.getElementById('navNew').addEventListener('click', function(event) {
	  event.preventDefault();
	  const newTemples = temples.filter(temple => {
		const dedicationYear = parseInt(temple.dedicated.split(',')[0]);
		return dedicationYear > 2000;
	  });
	  renderTemples(newTemples); 
	});
  
	document.getElementById('navLarge').addEventListener('click', function(event) {
	  event.preventDefault();
	  const largeTemples = temples.filter(temple => temple.area > 90000);
	  renderTemples(largeTemples); 
	});
  
	document.getElementById('navSmall').addEventListener('click', function(event) {
	  event.preventDefault();
	  const smallTemples = temples.filter(temple => temple.area < 10000);
	  renderTemples(smallTemples); 
	});
  
	renderTemples(temples);
  });
  