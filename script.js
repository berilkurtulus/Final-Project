const booksDatabase = [
 //Science Fiction
  {
    writer: 'Jules Verne',
    bookName: 'Twenty Thousand Leagues Under the Sea',
    year: 1870,
    topQuote: 'The sea is everything. It covers seven-tenths of the terrestrial globe. Its breath is pure and healthy. It is an immense desert, where man is never lonely, for he feels life stirring on all sides.',
    shortSummary: 'Jules Verne\'s classic novel follows the adventures of Captain Nemo and Professor Pierre Aronnax as they embark on a submarine journey aboard the Nautilus. The novel explores the wonders and mysteries of the deep sea and incorporates advanced technology for its time.',
    coverImage: 'twenty_thousand_leagues_under_the_sea.jpg',
    genre: 'Science Fiction',
    country: '',
  },
  {
    writer: 'H.G. Wells',
    bookName: 'The War of the Worlds',
    year: 1898,
    topQuote: 'No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than man\'s and yet as mortal as his own. As men busied themselves, they were scrutinized by extraterrestrial minds, silently preparing for an invasion beyond human comprehension.',
    shortSummary: 'H.G. Wells\' groundbreaking work tells the story of an alien invasion of Earth by Martians. The novel is known for its realistic portrayal of the consequences of interplanetary conflict and has had a significant influence on the science fiction genre.',
    coverImage: 'war_of_the_worlds.jpg',
    genre: 'Science Fiction',
    country: '',
  },
  {
    writer: 'Aldous Huxley',
    bookName: 'Brave New World',
    year: 1932,
    topQuote: 'Words, used properly, are like X-rays, penetrating through everything. They read minds and pierce hearts, revealing the truth beneath the surface in a world where conformity and superficiality reign supreme.',
    shortSummary: 'Aldous Huxley\'s dystopian novel presents a future society where individuals are conditioned from birth and assigned specific roles in a highly controlled and technologically advanced world. The story explores themes of technology, social control, and the consequences of sacrificing individuality for societal stability.',
    coverImage: 'brave_new_world.jpg',
    genre: 'Science Fiction',
    country: '',
  },
  {
    writer: 'Isaac Asimov',
    bookName: 'Foundation',
    year: 1951,
    topQuote: 'Hardly any set of values could be more deep-rooted than the belief that force should be the last resort of the incompetent. Yet we are certain beyond doubt that the ultimate power in the universe is incompetence.',
    shortSummary: 'While this novel slightly falls outside the specified timeframe, its influence on science fiction is significant. "Foundation" is the first book in Isaac Asimov\'s Foundation series, which presents a future Galactic Empire and the efforts of mathematician Hari Seldon to preserve knowledge and shorten the inevitable dark age that follows the empire\'s collapse. The series is known for its exploration of psychohistory, a fictional branch of mathematics.',
    coverImage: 'foundation.jpg',
    genre: 'Science Fiction',
    country: '',
  },
  {
    writer: 'George Orwell',
    bookName: '1984',
    year: 1949,
    topQuote: 'War is peace. Freedom is slavery. Ignorance is strength. In a world of perpetual surveillance and thought control, reality is rewritten to serve the interests of the Party, and truth becomes a subversive act.',
    shortSummary: 'Orwell\'s dystopian masterpiece explores a totalitarian society under the rule of the Party and its leader, Big Brother. The novel delves into themes of government surveillance, censorship, and the manipulation of truth. "1984" remains a powerful commentary on the dangers of unchecked political power and the erosion of individual freedoms.',
    coverImage: '1984.jpg',
    genre: 'Science Fiction',
    country: '',
  },
  {
    writer: 'Frank Herbert',
    bookName: 'Dune',
    year: 1965,
    topQuote: 'He who controls the spice controls the universe. The desert planet Arrakis harbors the spice melange, the most valuable substance in the cosmos. In the struggle for power, destiny intertwines with the sands, shaping the future of worlds.',
    shortSummary: 'Frank Herbert\'s "Dune" is a science fiction epic set in the distant future on the desert planet of Arrakis. The novel combines elements of politics, religion, and ecology as it follows the story of Paul Atreides, whose family assumes control of Arrakis and its valuable spice production. "Dune" is celebrated for its intricate world-building, complex characters, and exploration of environmental and political themes.',
    coverImage: 'dune.jpg',
    genre: 'Science Fiction',
    country: '',
  },
  {
    writer: 'Suzanne Collins',
    bookName: 'The Hunger Games',
    year: 2008,
    topQuote: 'I am not pretty. I am not beautiful. I am radiant, not in looks, but in strength, resilience, and the fire within. In the arena of survival, my spirit shines brighter than the sun.',
    shortSummary: '"The Hunger Games" is the first book in a dystopian trilogy that gained immense popularity. Set in a future where a totalitarian government holds an annual event in which young participants must fight to the death, the series delves into themes of survival, rebellion, and the consequences of power.',
    coverImage: 'hunger_games.jpg',
    genre: 'Science Fiction',
    country: '',
  },
  //Fantasy
  {
    writer: 'L. Frank Baum',
    bookName: 'The Wonderful Wizard of Oz',
    year: 1900,
    topQuote: 'I am Oz, the Great and Powerful. Pay no attention to that man behind the curtain! The real power is not in magic but in the belief of the people. You had the power all along, my dear.',
    shortSummary: 'Published in 1900, this novel tells the story of Dorothy Gale\'s adventures in the magical Land of Oz. Filled with whimsical characters, such as the Scarecrow, Tin Man, and Cowardly Lion, the book has become a classic of children\'s literature and fantasy.',
    coverImage: 'wizard_of_oz.jpg',
    genre: 'Fantasy',
    country: '',
  },
  {
    writer: 'George MacDonald',
    bookName: 'The Princess and the Goblin',
    year: 1872,
    topQuote: 'Faith is the great foundation of life. Trust in the unseen, for it is in the realm of the invisible that true strength resides. With faith, even the darkest caverns can be illuminated by the light of hope and courage.',
    shortSummary: 'George MacDonald\'s fantasy novel "The Princess and the Goblin" is a fairy tale that follows the story of Princess Irene and her encounters with magical creatures, including goblins and a miner named Curdie Peterson. The novel is celebrated for its imaginative world-building and allegorical elements.',
    coverImage: 'princess_and_the_goblin.jpg',
    },
    {
      writer: 'J.R.R. Tolkien',
      bookName: 'The Hobbit',
      year: 1937,
      topQuote: 'The road goes ever on and on, down from the door where it began. Now far ahead the road has gone, and I must follow if I can. Pursuing it with eager feet, until it joins some larger way where many paths and errands meet.',
      shortSummary: 'J.R.R. Tolkien\'s "The Hobbit" is a classic fantasy novel that follows the journey of Bilbo Baggins, a hobbit who is reluctantly swept into an epic quest to reclaim a treasure guarded by the dragon Smaug. This novel set the stage for Tolkien\'s later and even more expansive work, "The Lord of the Rings."',
      coverImage: 'the_hobbit.jpg',
      genre: 'Fantasy',
      country: '',
    },
    {
      writer: 'C.S. Lewis',
      bookName: 'The Lion, the Witch and the Wardrobe',
      year: 1950,
      topQuote: 'Once a king or queen of Narnia, always a king or queen. May your wisdom grace our lives and your courage inspire our hearts. Narnia awaits, and in its magic, we find the strength to be true rulers of our destiny.',
      shortSummary: 'While the specific book mentioned falls slightly outside the 1945 cutoff, the first book in C.S. Lewis\'s "The Chronicles of Narnia" series, "The Lion, the Witch and the Wardrobe," was published in 1950. This enchanting tale introduces readers to the magical land of Narnia, where four siblings embark on a quest to free the land from the evil White Witch.',
      coverImage: 'lion_witch_wardrobe.jpg',
      genre: 'Fantasy',
      country: '',
    },
    {
      writer: 'Lloyd Alexander',
      bookName: 'The Chronicles of Prydain: The Book of Three',
      year: 1964,
      topQuote: 'In the tapestry of life, each thread, no matter how small, weaves a story. Embrace the journey, for within adversity lies courage, and within courage, the power to shape destiny. The Book of Three unfolds, and with it, the hero\'s odyssey begins.',
      shortSummary: 'The first book in the "Chronicles of Prydain" series, "The Book of Three," offers a Celtic-inspired fantasy world filled with adventure, magic, and memorable characters. The story follows Taran, an Assistant Pig-Keeper, as he embarks on a journey to stop the evil forces threatening the land of Prydain. Lloyd Alexander\'s series is known for its engaging storytelling and character development.',
      coverImage: 'chronicles_of_prydain.jpg',
      genre: 'Fantasy',
      country: '',
    },
    {
      writer: 'Ursula K. Le Guin',
      bookName: 'A Wizard of Earthsea',
      year: 1968,
      topQuote: 'To light a candle is to cast a shadow. In the dance of balance, every act echoes through the tapestry of fate. The true mastery lies not in dominance but in understanding the intricate threads that weave life\'s design.',
      shortSummary: 'Ursula K. Le Guin\'s "A Wizard of Earthsea" is a classic fantasy novel that follows the coming-of-age story of Ged, a young boy with innate magical abilities. The novel explores themes of power, balance, and the consequences of tampering with natural forces. Le Guin\'s Earthsea series has been highly praised for its depth and originality.',
      coverImage: 'wizard_of_earthsea.jpg',
      genre: 'Fantasy',
      country: '',
    },
    {
      writer: 'J.K. Rowling',
      bookName: 'Harry Potter and the Philosopher\'s Stone',
      year: 1997,
      topQuote: 'It does not do to dwell on dreams and forget to live. Always remember, the magic you seek is within you. The wand may choose the wizard, but it is your choices that define you. Welcome to Hogwarts, where the journey of self-discovery begins.',
      shortSummary: 'The first book in the iconic "Harry Potter" series, this novel introduces readers to the magical world of Hogwarts School of Witchcraft and Wizardry. J.K. Rowling\'s series follows the adventures of a young wizard, Harry Potter, and his friends as they navigate the challenges of magic, friendship, and the ongoing battle against the dark wizard Voldemort.',
      coverImage: 'harry_potter_philosophers_stone.jpg',
      genre: 'Fantasy',
      country: '',
    },
    {
      writer: 'George R.R. Martin',
      bookName: 'A Game of Thrones',
      year: 1996,
      topQuote: 'In the game of thrones, you win or you die. Power is a double-edged sword, and loyalty a rare treasure. As the realms play their deadly game, remember: winter is coming, and with it, the true test of honor, alliances, and the pursuit of the Iron Throne.',
      shortSummary: 'The first book in the "A Song of Ice and Fire" series, "A Game of Thrones" is a complex and politically charged epic fantasy. George R.R. Martin weaves a tale of power, intrigue, and warfare in the fictional continents of Westeros and Essos. The series is known for its intricate plot, morally ambiguous characters, and unpredictable twists.',
      coverImage: 'game_of_thrones.jpg',
      genre: 'Fantasy',
      country: '',
    },
 
 
 
]
const genres = ['Science Fiction', 'Fantasy', 'Crime', 'Romance']
const timePeriods = ['1870-1900', '1900-1945', '1945-1990', '1990-Today']
/*Barney
function filter(chosenGenre, period) {
  const chosenBooks = booksDatabase.filter((book) => book.genre == chosenGenre)
  console.log(chosenBooks)
}

const searchButton= document.getElementById('search')
function searchFirst(){
  dropdown-1
}
*/

/*creating default text*/
function defaultContent() {
  const defaultTitle = document.getElementById("writer");
  defaultTitle.innerHTML = "<h2>Welcome to Book Suggester!</h2>";
  
  const defaultText = document.getElementById("quote");
  defaultText.innerHTML = "<p>Please select a GENRE and a TIME PERIOD to get book suggestions.</p>"
}

/*displaying the default text*/
window.onload=function(){
  defaultContent();
}
console.log(defaultText)

/*
1)function to generate random book suggestions
2)function for a search button
3)function to display the suggestion on the page
*/