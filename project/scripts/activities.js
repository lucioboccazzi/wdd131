// ------ activity cards --------

const activities = [
	{
	  activityName: "Cerro Castor Snowboarding",
	  location: "Ushuaia - Tierra del Fuego",
	  type: "Outdoors",
	  imageUrl: "https://static2.onlinetravel.com.ar/images/destinos/cerro-castor-1.jpg?s375x200",
      websiteLynk: "https://www.cerrocastor.com/es_ar/home.html",
	},

    {
        activityName: "Tango Shows at night",
        location: "Buenos Aires City, Buenos Aires",
        type: "Night Life",
        imageUrl: "https://hoornvintage.com/wp-content/uploads/2017/01/TANGO.jpg",
        websiteLynk: "https://signaturetours.com.ar/buenos-aires-tours/tango-shows/best-tango-show-with-private-transfer/",
    },

    {
        activityName: "Laguna de los tres via Monte Fitz Roy Trail - Hiking",
        location: "El Chaltén, Santa Cruz",
        type: "Outdoors",
        imageUrl: "https://destinationlesstravel.com/wp-content/uploads/2022/11/Bailey-stands-at-a-viewpoint-on-the-trail-with-Mount-Fitz-Roy-Laguna-de-los-Tres-in-the-background.jpg",
        websiteLynk: "https://www.alltrails.com/trail/argentina/santa-cruz/laguna-de-los-tres-via-sendero-al-fitz-roy",
    },

    {
        activityName: "Buenos Aires City Tour",
        location: "Buenos Aires City, Buenos Aires",
        type: "Night Life",
        imageUrl: "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1684589947/jqt6vclfpnn2ypd6drhd.jpg",
        websiteLynk: "https://signaturetours.com.ar/buenos-aires-tours/unconventional/buenos-aires-at-night/",
    },

    {
        activityName: "Aldea Nevada - Cabanas Camping",
        location: "Ushuaia",
        type: "Outdoors",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/42/72/01/aldea-nevada-cabanas.jpg?w=1200&h=-1&s=1",
        websiteLynk: "https://www.tripadvisor.com/Hotel_Review-g312855-d1888823-Reviews-Aldea_Nevada_Cabanas-Ushuaia_Province_of_Tierra_del_Fuego_Patagonia.html",
    },

    {
        activityName: "Buenos Aires La Recoleta Cemetery Tour",
        location: "Buenos Aires City, Buenos Aires",
        type: "Night Life",
        imageUrl: "https://images.myguide-cdn.com/argentina/companies/buenos-aires-la-recoleta-cemetery-guided-tour-in-english/large/buenos-aires-la-recoleta-cemetery-guided-tour-in-english-3030775.jpg",
        websiteLynk: "https://www.hellotickets.com/argentina/buenos-aires/recoleta-cemetery-tour/a/pa-3235",
    },

    {
        activityName: "Hunting in Argentina",
        location: "Depends",
        type: "Outdoors",
        imageUrl: "https://cdn.prod.website-files.com/636b8ab5a10ec2163cb9112f/63a1a9ffc366de22af949a78_red-stag-4seasons-1-900.jpg",
        websiteLynk: "https://www.craigboddington.com/hunting-tips/the-best-hunt-in-argentina#:~:text=Planning%20the%20Perfecting%20Hunting%20Trip%20to%20Argentina,-It%20is%20thus&text=famous%20destinations%20for%20high%2Dvolume,(Patagonia)%20and%20La%20Pampa",
    },

    {
        activityName: "Buenos Aires Teatro Colon Guided Tour",
        location: "Buenos Aires City, Buenos Aires",
        type: "Night Life",
        imageUrl: "https://elojodelarte.com/media/k2/items/cache/f63fb9fc1888bac2143cb5d1de3bea0f_XL.webp?t=20240507_030213",
        websiteLynk: "https://www.hellotickets.com/argentina/buenos-aires/teatro-colon-guided-tour/a/pa-3233",
    },
];

const activitiesContainer = document.getElementById('activitiesContainer');

function renderActivities(filteredActivities) {
    activitiesContainer.innerHTML = '';

    filteredActivities.forEach(activity => {
        const activityDiv = document.createElement('div');
        activityDiv.classList.add('activity');

        const activityContent = `
            <h2>${activity.activityName}</h2>
            <p><strong>Location:</strong> ${activity.location}</p>
            <p><strong>Type:</strong> ${activity.type}</p>
            <img class="lazy" data-src="${activity.imageUrl}" alt="${activity.activityName}">
            <p><a href="${activity.websiteLynk}" target="_blank">More Info</a></p>
        `;

        activityDiv.innerHTML = activityContent;
        activitiesContainer.appendChild(activityDiv);
    });

    const lazyImages = document.querySelectorAll('.lazy');

    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    img.setAttribute('src', src);
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };

    lazyImages.forEach(lazyLoad);
}

renderActivities(activities);

const btnNightLife = document.getElementById('btnNightLife');
btnNightLife.addEventListener('click', () => {
    const filtered = activities.filter(activity => activity.type === 'Night Life');
    renderActivities(filtered);
});

const btnOutdoors = document.getElementById('btnOutdoors');
btnOutdoors.addEventListener('click', () => {
    const filtered = activities.filter(activity => activity.type === 'Outdoors');
    renderActivities(filtered);
});

const btnAll = document.getElementById('btnAll');
btnAll.addEventListener('click', () => {
    renderActivities(activities);
});


