let currentIndex = 0;
const itemsPerPage = 10;

const animeCardsContainer = document.querySelector('.anime-cards');
const mangaCardsContainer = document.querySelector('.manga-cards');
const loadMoreAnimeButton = document.getElementById('load-more-anime');
const loadMoreMangaButton = document.getElementById('load-more-manga');
const weeklyAnimeContainer = document.getElementById('weekly-anime-scroll');
const weeklyPopularSection = document.getElementById('weekly-popular');
const bannerContentSection=document.getElementById('banner-content')

//Weekly Popular Anime cards
const weeklyPopularAnime = animeData.filter(anime => anime.isWeeklyPopular);
weeklyPopularAnime.forEach(anime => {
    const card = document.createElement('div');
    card.classList.add('anime-card-week');
    card.innerHTML = `
        <img src="${anime.image}" alt="${anime.title}">
        <h3>${anime.title}</h3>`;
    weeklyAnimeContainer.appendChild(card);
});

// Displaying Anime Cards
function displayAnimeCards(startIndex, count) {
    const endIndex = Math.min(startIndex + count, animeData.length);
    for (let i = startIndex; i < endIndex; i++) {
        const anime = animeData[i];
        const card = document.createElement('div');
        card.classList.add('anime-card');
        card.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <div class="info">
                <h3>${anime.title}</h3>
                <p>${anime.description}</p>
            </div>`;
        animeCardsContainer.appendChild(card);
    }
}


// Displaying Manga Cards
function displayMangaCards(startIndex, count) {
    const endIndex = Math.min(startIndex + count, mangaData.length);
    for (let i = startIndex; i < endIndex; i++) {
        const manga = mangaData[i];
        const card = document.createElement('div');
        card.classList.add('manga-card');
        card.innerHTML = `
            <img src="${manga.image}" alt="${manga.title}">
            <div class="info">
                <h3>${manga.title}</h3>
                <p>${manga.description}</p>
            </div>`;
        mangaCardsContainer.appendChild(card);
    }
}

// Load More Anime
function loadMoreAnime() {
    displayAnimeCards(currentIndex, itemsPerPage);
    currentIndex += itemsPerPage;
    if (currentIndex >= animeData.length) {
        loadMoreButton.style.display = 'none';
    }
}

// Load More Manga
function loadMoreManga() {
    displayMangaCards(mangaIndex, itemsPerPage);
    mangaIndex += itemsPerPage;
    if (mangaIndex >= mangaData.length) {
        loadMoreMangaButton.style.display = 'none';
    }
}

// Initial Load
loadMoreAnime();
loadMoreButton.addEventListener('click', loadMoreAnime);

loadMoreManga();
loadMoreMangaButton.addEventListener('click', loadMoreManga);

// Search
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filteredData = animeData.filter(anime => anime.title.toLowerCase().includes(query));
    animeCardsContainer.innerHTML = ''; // Clear current cards
    const featuredHeading = document.querySelector('#featured-heading'); // Update the correct selector
    featuredHeading.textContent = `Search Results for "${query}"`;


   // Hiding sections during search
   weeklyPopularSection.style.display = 'none';
   bannerContentSection.style.display = 'none';
   document.getElementById('genres-section').style.display = 'none';
   document.getElementById('about-section').style.display = 'none';
   document.getElementById('featured-manga').style.display = 'none';


    if (filteredData.length > 0) {
        filteredData.forEach(anime => {
            const card = document.createElement('div');
            card.classList.add('anime-card');
            card.innerHTML = `<img src="${anime.image}" alt="${anime.title}">
            <div class="info">
                <h3>${anime.title}</h3>
                <p>${anime.description}</p>
            </div>`;

            animeCardsContainer.appendChild(card);
        });
        loadMoreButton.style.display = 'none';
    } else {
        animeCardsContainer.innerHTML = '<p>No results found.</p>';
        loadMoreButton.style.display = 'none';
        document.getElementById('about-section').style.display = 'none';
    }
});

// Reset Search
/*document.getElementById('search-bar').addEventListener('input', () => {
    const query = document.getElementById('search-bar').value.trim();
    if (!query) {
        animeCardsContainer.innerHTML = ''; // Clear search results
        weeklyPopularSection.style.display = 'block'; // Show Weekly section
        bannerContentSection.style.display = 'block'; // Show Banner
        document.getElementById('genres-section').style.display = 'block'; // Show Genres
        document.getElementById('about-section').style.display = 'block'; // Show About section

        // Update H2
        const featuredHeading = document.querySelector('#featured-heading'); // Update the correct selector
        featuredHeading.textContent = 'Featured Anime';

        loadMoreButton.style.display = 'block'; // Show "Load More" button
        currentIndex = 0;
        loadMoreAnime(); // Reload initial anime cards
    }
});*/


/*document.getElementById('featured-btn').addEventListener('click', () => {
    document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
});*/

// Weekly Anime Scroll
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');
const animeScroll = document.getElementById('weekly-anime-scroll');

scrollLeftBtn.addEventListener('click', () => {
    animeScroll.scrollBy({ left: -1000, behavior: 'smooth' });
});

scrollRightBtn.addEventListener('click', () => {
    animeScroll.scrollBy({ left: 1000, behavior: 'smooth' });
});


document.getElementById('toggle-more').addEventListener('click', function () {
    const container = document.getElementById('genres-container');
    const isExpanded = container.classList.toggle('expanded'); // Toggle the 'expanded' class
    this.textContent = isExpanded ? 'Show Less' : 'Show More'; // Update button text
});
