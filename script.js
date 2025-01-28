// Sample Anime Data
const animeData = [
    { title: "Demon Slayer:Kimetsu no Yaiba",
    image: "image/demon-slayer-kimetsu-no-yaiba-1-190x266.jpg",
    description:"A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister." ,
    isWeeklyPopular : false },
    { title: "Attack On Titan",
        image: "image/attack-on-titan-1-190x266.jpg",
        description:"After his hometown is destroyed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction." ,
        isWeeklyPopular : false},
    { title: "Fullmetal Alchemist:\nBrotherhood",
        image: "image/fullmetal-alchemist-brotherhood-1-190x285.jpg",
        description:"Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms." ,
        isWeeklyPopular : false },
    { title: "One Piece",
        image: "image/one-piece-1-190x260.jpg",
        description:"Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the 'One Piece'",
        isWeeklyPopular : false },
    { title: "Hunter x Hunter (2011)",
        image: "image/hunter-x-hunter-2011-1-190x285.jpg",
        description:"Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks out his father, who left him when he was younger." ,
        isWeeklyPopular : false },
    { title: "Frieren: Beyond Journey's End",
        image: "image/frieren-beyond-journeys-end-1-285x399.webp",
        description:"Elf mage Frieren and her fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her?",
        isWeeklyPopular : false },
    { title: "Death Note",
        image: "image/death-note-1-190x285.jpg",
        description: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it." ,
        isWeeklyPopular : true},
    { title: "Vinland Saga",
        image: "image/vinland-saga-1-190x268.jpg",
        description:"Following a tragedy, Thorfinn embarks on a journey with the man responsible for it to take his life in a duel as a true and honorable warrior to pay homage.",
        isWeeklyPopular : false },
    { title: "Dragon Ball Z",
        image: "image/dragon-ball-z-1-190x285.jpg",
        description:"With the help of the powerful Dragonballs, a team of fighters led by the saiyan warrior Goku defend the planet earth from extraterrestrial enemies.",
        isWeeklyPopular : false },
    { title: "Steins;Gate",
        image: "image/steins-gate-1-190x285.jpg",
        description:"After discovering time travel, a university student and his colleagues must use their knowledge of it to stop an evil organization and their diabolical plans.",
        isWeeklyPopular : false },
    { title: "Naruto Shippuden",
        image: "image/naruto-shippuden-1-190x285.jpg",
        description:"Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
        isWeeklyPopular : true },
    { title: "Berserk",
        image: "image/berserk-1-190x265.jpg",
        description:"Guts, a wandering mercenary, joins the Band of the Hawk after being defeated in a duel by Griffith, the group's leader and founder. Together, they dominate every battle, but something menacing lurks in the shadows.",
        isWeeklyPopular : false },
    { title: "One-Punch Man",
        image: "image/one-punch-man-1-190x270.jpg",
        description:"The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch." ,
        isWeeklyPopular : false },
    { title: "Gintama",
        image: "image/gintama-2017-1-190x285.jpg",
        description:"In an era where aliens have invaded and taken over feudal Tokyo, an unemployed samurai finds work however he can.",
        isWeeklyPopular : false },
    { title: "Code Geass: Lelouch of the Rebellion",
        image: "image/code-geass-lelouch-of-the-rebellion-1-190x265.jpg",
        description:"After being given a mysterious power to control others, an outcast prince becomes the masked leader of the rebellion against an all-powerful empire." ,
        isWeeklyPopular : true },
    { title: "Haikyu!!",
        image: "image/haikyuu-1-190x285.jpg",
        description:"Determined to be like the volleyball championship's star player nicknamed 'the small giant', Shoyo joins his school's volleyball club.",
        isWeeklyPopular : false },
    { title: "Dandadan",
        image: "image/dandadan-1-285x417.webp",
        description:"When Momo and Okarun's beliefs clash, they're thrown into a world of ghosts, aliens and awakened powers.",
        isWeeklyPopular : true },
    { title: "The Apothecary Diaries",
        image: "image/the-apothecary-diaries-1-285x399.webp",
        description:"A young maiden is kidnapped and sold into servitude at the emperor's palace, where she secretly employs her pharmacist skills with the help of the head eunuch to unravel medical mysteries in the inner court.",
        isWeeklyPopular : false },
    { title: "Mob Psycho 100",
        image: "image/mob-psycho-100-1-190x285.jpg",
        description:"A psychic middle school boy tries to live a normal life and keep his growing powers under control, even though he constantly gets into trouble.",
        isWeeklyPopular : false },
    { title: "Fullmetal Alchemist",
        image: "image/fullmetal-alchemist-1-190x256.jpg",
        description:"When a failed alchemical ritual leaves brothers Edward and Alphonse Elric with severely damaged bodies, they begin searching for the one thing that can save them: the fabled philosopher's stone." ,
        isWeeklyPopular : true },
    { title: "Naruto",
        image: "image/naruto-1-190x266.jpg",
        description:"Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja." ,
        isWeeklyPopular : true },
    { title: "Your name",
        image: "image/your-name-1-190x274.jpg",
        description:"Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person." ,
        isWeeklyPopular : true },
    { title: "Erased",
        image: "image/erased-1-190x285.jpg",
        description:"29-year-old Satoru Fujinuma is sent back in time 18 years to prevent the events leading to his mother's death, which began with a series of kidnappings while he was in 5th grade.",
        isWeeklyPopular : false },
    { title: "Violet Evergarden",
        image: "image/violet-evergarden-1-190x279.jpg",
        description:"In the aftermath of a great war, Violet Evergarden, a young female ex-soldier, gets a job at a writers' agency and goes on assignments to create letters that can connect people."
        ,isWeeklyPopular : false },
    { title: "Chainsaw Man",
        image: "image/chainsaw-man-1-285x399.webp",
        description:"Following a betrayal, a young man left for dead is reborn as a powerful devil-human hybrid after merging with his pet devil and is soon enlisted into an organization dedicated to hunting devils."
        ,isWeeklyPopular : false },
    { title: "Mushoku Tensei: Jobless Reincarnation",
        image: "image/mushoku-tensei-jobless-reincarnation-1-285x399.webp",
        description:"A 34-year-old underachiever gets run over by a bus, but his story isn't over. Reincarnated as an infant, he'll embark on an epic adventure."
        ,isWeeklyPopular : false },
    { title: "Jujutsu Kaisen",
        image: "image/jujutsu-kaisen-1-190x286.jpg",
        description:"A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself."
        ,isWeeklyPopular : true },
        { title: "Spirited Away",
        image: "image/spirited-away-1-190x281.jpg",
        description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts." ,
        isWeeklyPopular : false },
    { title: "My Hero Academmia",
        image: "image/my-hero-academia-1-190x285.jpg",
        description:"A superhero-admiring boy enrolls in a prestigious hero academy and learns what it really means to be a hero, after the strongest superhero grants him his own powers." ,
        isWeeklyPopular : false},
    { title: "Sword Art Online",
        image: "image/sao.jpg",
        description:"In the year 2022, thousands of people get trapped in a new virtual MMORPG and the lone wolf player, Kirito, works to escape." ,
        isWeeklyPopular : true },
    { title: "Tokyo Ghoul",
        image: "image/tokyo-ghoul-1-190x266.jpg",
        description:"A Tokyo college student is attacked by a ghoul, a superpowered human who feeds on human flesh. He survives, but has become part ghoul and becomes a fugitive on the run." ,
        isWeeklyPopular : true },
    { title: "My Hero Academia 2",
        image: "image/my-hero-academia-2-1-190x285.jpg",
        description:"A superhero-admiring boy enrolls in a prestigious hero academy and learns what it really means to be a hero, after the strongest superhero grants him his own powers." ,
        isWeeklyPopular : false },
    { title: "Howl's Moving Castle",
        image: "image/howls-moving-castle-1-190x259.jpg",
        description:"When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle." ,
        isWeeklyPopular : false },
    { title: "Blue Exorcist",
        image: "image/blue-exorcist-1-285x399.jpg",
        description:"After discovering that he's the son of Satan, a young man must join the True Cross Academy in order to master his abilities and defeat Satan himself." ,
        isWeeklyPopular : false },
    { title: "A Silent Voice",
        image: "image/a-silent-voice-1-190x274.jpg",
        description:"A deaf girl, Shoko, is bullied by the popular Shoya. As Shoya continues to bully Shoko, the class turns its back on him. Shoko transfers and Shoya grows up as an outcast. Alone and depressed, the regretful Shoya finds Shoko to make amends." ,
        isWeeklyPopular : false },
    { title: "Attack on Titan 2nd Season",
        image: "image/attack-on-titan-2nd-season-1-190x285.jpg",
        description:"After his hometown is destroyed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction." ,
        isWeeklyPopular : true },
    { title: "My Hero Academia 3",
        image: "image/my-hero-academia-3-1-190x285.jpg",
        description:"A superhero-admiring boy enrolls in a prestigious hero academy and learns what it really means to be a hero, after the strongest superhero grants him his own powers." ,
        isWeeklyPopular : false },
    { title: "No Game No Life",
        image: "image/no-game-no-life-1-190x285.jpg",
        description:"Siblings Sora and Shiro make up the most feared team of pro gamers in the world, The Blank. When they manage to beat God himself in a game of chess, they are sent to a world where all disputes are settled with games." ,
        isWeeklyPopular : true },
    { title: "The Seven Deadly Sins",
        image: "image/the-seven-deadly-sins-1-190x268.jpg",
        description:"The story of the Seven Deadly Sins, a group of warriors who were wrongly accused of a crime they didn't commit and went on a quest to vindicate themselves." ,
        isWeeklyPopular : false },
    { title: "Spy x Family",
        image: "image/spy-x-family-1-285x403.webp",
        description:"A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together."
        ,isWeeklyPopular : true },
    { title: "The Eminence in Shadow",
        image: "image/the-eminence-in-shadow-1-285x399.webp",
        description:"When Cid is isekai'd to another world, he creates an underground organization to live out a fight against a made-up cult. Little does he know the cult is real, and they're not happy his power fantasy just impeded their plans."
        ,isWeeklyPopular : true },
    { title: "Boruto: Naruto Next Generations",
        image: "image/boruto-naruto-next-generations-1-190x285.jpg",
        description:"Son of Naruto Uzumaki, Boruto, follows his father's footsteps along with his friends to become great ninja. Throughout all their adventures, Boruto is determined to make his mark in the ninja world and live outside of his father's shadow"
        ,isWeeklyPopular : false },
    { title: "Dr. Stone",
        image: "image/dr-stone-1-190x285.jpg",
        description:"High schooler Taiju awakens from petrification millennia after a blinding light turned humanity to stone. He finds his scientific genius friend Senku working on a plan to rebuild civilization using science."
        ,isWeeklyPopular : true },
    { title: "Tokyo Revengers",
        image: "image/tokyo-revengers-1-190x286.jpg",
        description:"Hanagaki Takemichi lives an unsatisfying life right up until his death. Waking up 12 years in the past, he reckons with the eventual fate of his friends and tries to prevent an unfortunate future."
        ,isWeeklyPopular : true },
    { title: "Shangri-La Frontier",
        image: "image/shangri-la-frontier-1.webp",
        description:"High schooler Rakuro loves beating bad games. But can he discover all the secrets hidden in a best-selling VR game?"
        ,isWeeklyPopular : false },
    { title: "Overlord",
        image: "image/overlord-1-190x285.jpg",
        description:"When a popular MMORPG is scheduled to be shut down permanently, veteran player Momonga refuses to log out. As NPCs begin to develop personalities and minds of their own he decides to put his skills to use as the game's new overlord.",
        isWeeklyPopular : false },
];
let currentIndex = 0;
const itemsPerPage = 10;

const animeCardsContainer = document.querySelector('.anime-cards');
const loadMoreButton = document.getElementById('load-more');
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

// Load More Anime
function loadMoreAnime() {
    displayAnimeCards(currentIndex, itemsPerPage);
    currentIndex += itemsPerPage;
    if (currentIndex >= animeData.length) {
        loadMoreButton.style.display = 'none';
    }
}

// Initial Load
loadMoreAnime();
loadMoreButton.addEventListener('click', loadMoreAnime);

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
