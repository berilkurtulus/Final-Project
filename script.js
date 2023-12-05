/*1870-1900
1900-1945
1945-1990
1990-today

{
    writer:'',
    bookName:'',
    timePeriod:'',
    year:'',
    topQuote:"",
    shortSummary:"",
    coverImage:'',
    genre:'',
    country:'',


  },

*/

const books = [
 //Science Fiction
  {
    writer: 'Jules Verne',
    bookName: 'Twenty Thousand Leagues Under the Sea',
    timePeriod:'1870-1900',
    year: 1870,
    topQuote: '"The sea is everything. It covers seven-tenths of the terrestrial globe. Its breath is pure and healthy. It is an immense desert, where man is never lonely, for he feels life stirring on all sides."',
    shortSummary: 'Jules Verne\'s classic novel follows the adventures of Captain Nemo and Professor Pierre Aronnax as they embark on a submarine journey aboard the Nautilus. The novel explores the wonders and mysteries of the deep sea and incorporates advanced technology for its time.',
    coverImage: '20000Leagues_11x17_150dpi-1+jpeg.jpg',
    genre: 'Science Fiction',
    country: '',
  },
  {
    writer: 'H.G. Wells',
    bookName: 'The War of the Worlds',
    timePeriod:'1870-1900',
    year: 1898,
    topQuote: '"No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than man\'s and yet as mortal as his own. As men busied themselves, they were scrutinized by extraterrestrial minds, silently preparing for an invasion beyond human comprehension."',
    shortSummary: 'H.G. Wells\' groundbreaking work tells the story of an alien invasion of Earth by Martians. The novel is known for its realistic portrayal of the consequences of interplanetary conflict and has had a significant influence on the science fiction genre.',
    coverImage: 'the-war-of-the-worlds-120.jpg',
    genre: 'Science Fiction',
    country: '',
  },
  {
    writer: 'Aldous Huxley',
    bookName: 'Brave New World',
    timePeriod:'1900-1945',
    year: 1932,
    topQuote: '"Words, used properly, are like X-rays, penetrating through everything. They read minds and pierce hearts, revealing the truth beneath the surface in a world where conformity and superficiality reign supreme."',
    shortSummary: 'Aldous Huxley\'s dystopian novel presents a future society where individuals are conditioned from birth and assigned specific roles in a highly controlled and technologically advanced world. The story explores themes of technology, social control, and the consequences of sacrificing individuality for societal stability.',
    coverImage: 'brave-new-world-12.jpg',
    genre: 'Science Fiction',
    country: '',
  },
  {
    writer: 'Isaac Asimov',
    bookName: 'Foundation',
    timePeriod:'1945-1990',
    year: 1951,
    topQuote: '"Hardly any set of values could be more deep-rooted than the belief that force should be the last resort of the incompetent. Yet we are certain beyond doubt that the ultimate power in the universe is incompetence."',
    shortSummary: 'While this novel slightly falls outside the specified timeframe, its influence on science fiction is significant. "Foundation" is the first book in Isaac Asimov\'s Foundation series, which presents a future Galactic Empire and the efforts of mathematician Hari Seldon to preserve knowledge and shorten the inevitable dark age that follows the empire\'s collapse. The series is known for its exploration of psychohistory, a fictional branch of mathematics.',
    coverImage: 'foundation1.jpg',
    genre: 'Science Fiction',
    country: '',
  },
  {
    writer: 'George Orwell',
    bookName: '1984',
    timePeriod:'1945-1990',
    year: 1949,
    topQuote: '"War is peace. Freedom is slavery. Ignorance is strength. In a world of perpetual surveillance and thought control, reality is rewritten to serve the interests of the Party, and truth becomes a subversive act."',
    shortSummary: 'Orwell\'s dystopian masterpiece explores a totalitarian society under the rule of the Party and its leader, Big Brother. The novel delves into themes of government surveillance, censorship, and the manipulation of truth. "1984" remains a powerful commentary on the dangers of unchecked political power and the erosion of individual freedoms.',
    coverImage: 'penguin-1984-6.jpg',
    genre: 'Science Fiction',
    country: '',
  },
  {
    writer: 'Frank Herbert',
    bookName: 'Dune',
    timePeriod:'1945-1990',
    year: 1965,
    topQuote: '"He who controls the spice controls the universe. The desert planet Arrakis harbors the spice melange, the most valuable substance in the cosmos. In the struggle for power, destiny intertwines with the sands, shaping the future of worlds."',
    shortSummary: 'Frank Herbert\'s "Dune" is a science fiction epic set in the distant future on the desert planet of Arrakis. The novel combines elements of politics, religion, and ecology as it follows the story of Paul Atreides, whose family assumes control of Arrakis and its valuable spice production. "Dune" is celebrated for its intricate world-building, complex characters, and exploration of environmental and political themes.',
    coverImage: 'OliverAllison_DuneYACover(150).jpg',
    genre: 'Science Fiction',
    country: '',
  },
  {
    writer: 'Suzanne Collins',
    bookName: 'The Hunger Games',
    timePeriod:'1990-Today',
    year: 2008,
    topQuote: '"I am not pretty. I am not beautiful. I am radiant, not in looks, but in strength, resilience, and the fire within. In the arena of survival, my spirit shines brighter than the sun."',
    shortSummary: '"The Hunger Games" is the first book in a dystopian trilogy that gained immense popularity. Set in a future where a totalitarian government holds an annual event in which young participants must fight to the death, the series delves into themes of survival, rebellion, and the consequences of power.',
    coverImage: 'hungergamescover.jpg',
    genre: 'Science Fiction',
    country: '',
  },
  //Fantasy
  {
    writer: 'L. Frank Baum',
    bookName: 'The Wonderful Wizard of Oz',
    timePeriod:'1870-1900',
    year: 1900,
    topQuote: '"I am Oz, the Great and Powerful. Pay no attention to that man behind the curtain! The real power is not in magic but in the belief of the people. You had the power all along, my dear."',
    shortSummary: 'Published in 1900, this novel tells the story of Dorothy Gale\'s adventures in the magical Land of Oz. Filled with whimsical characters, such as the Scarecrow, Tin Man, and Cowardly Lion, the book has become a classic of children\'s literature and fantasy.',
    coverImage: 'wizard_oz8.jpg',
    genre: 'Fantasy',
    country: '',
  },
  {
    writer: 'George MacDonald',
    bookName: 'The Princess and the Goblin',
    timePeriod:'1870-1900',
    year: 1872,
    topQuote: '"Faith is the great foundation of life. Trust in the unseen, for it is in the realm of the invisible that true strength resides. With faith, even the darkest caverns can be illuminated by the light of hope and courage."',
    shortSummary: 'George MacDonald\'s fantasy novel "The Princess and the Goblin" is a fairy tale that follows the story of Princess Irene and her encounters with magical creatures, including goblins and a miner named Curdie Peterson. The novel is celebrated for its imaginative world-building and allegorical elements.',
    coverImage: 'princess_goblin.jpg',
    country:'',
    },
    {
      writer: 'J.R.R. Tolkien',
      bookName: 'The Hobbit',
      timePeriod:'1900-1945',
      year: 1937,
      topQuote: '"The road goes ever on and on, down from the door where it began. Now far ahead the road has gone, and I must follow if I can. Pursuing it with eager feet, until it joins some larger way where many paths and errands meet."',
      shortSummary: 'J.R.R. Tolkien\'s "The Hobbit" is a classic fantasy novel that follows the journey of Bilbo Baggins, a hobbit who is reluctantly swept into an epic quest to reclaim a treasure guarded by the dragon Smaug. This novel set the stage for Tolkien\'s later and even more expansive work, "The Lord of the Rings."',
      coverImage: 'Hobbit.jpg',
      genre: 'Fantasy',
      country: '',
    },
    {
      writer: 'C.S. Lewis',
      bookName: 'The Lion, the Witch and the Wardrobe',
      timePeriod:'1945-1990',
      year: 1950,
      topQuote: '"Once a king or queen of Narnia, always a king or queen. May your wisdom grace our lives and your courage inspire our hearts. Narnia awaits, and in its magic, we find the strength to be true rulers of our destiny."',
      shortSummary: 'While the specific book mentioned falls slightly outside the 1945 cutoff, the first book in C.S. Lewis\'s "The Chronicles of Narnia" series, "The Lion, the Witch and the Wardrobe," was published in 1950. This enchanting tale introduces readers to the magical land of Narnia, where four siblings embark on a quest to free the land from the evil White Witch.',
      coverImage: 'thelion_thewitch.jpg',
      genre: 'Fantasy',
      country: '',
    },
    {
      writer: 'Lloyd Alexander',
      bookName: 'The Chronicles of Prydain: The Book of Three',
      timePeriod:'1945-1990',
      year: 1964,
      topQuote: '"In the tapestry of life, each thread, no matter how small, weaves a story. Embrace the journey, for within adversity lies courage, and within courage, the power to shape destiny. The Book of Three unfolds, and with it, the hero\'s odyssey begins."',
      shortSummary: 'The first book in the "Chronicles of Prydain" series, "The Book of Three," offers a Celtic-inspired fantasy world filled with adventure, magic, and memorable characters. The story follows Taran, an Assistant Pig-Keeper, as he embarks on a journey to stop the evil forces threatening the land of Prydain. Lloyd Alexander\'s series is known for its engaging storytelling and character development.',
      coverImage: 'The-Chronicles-of-Prydain 2.jpg',
      genre: 'Fantasy',
      country: '',
    },
    {
      writer: 'Ursula K. Le Guin',
      bookName: 'A Wizard of Earthsea',
      timePeriod:'1945-1990',
      year: 1968,
      topQuote: '"To light a candle is to cast a shadow. In the dance of balance, every act echoes through the tapestry of fate. The true mastery lies not in dominance but in understanding the intricate threads that weave life\'s design."',
      shortSummary: 'Ursula K. Le Guin\'s "A Wizard of Earthsea" is a classic fantasy novel that follows the coming-of-age story of Ged, a young boy with innate magical abilities. The novel explores themes of power, balance, and the consequences of tampering with natural forces. Le Guin\'s Earthsea series has been highly praised for its depth and originality.',
      coverImage: 'A_wizard_of_Earthsea.jpg',
      genre: 'Fantasy',
      country: '',
    },
    {
      writer: 'J.K. Rowling',
      bookName: 'Harry Potter and the Philosopher\'s Stone',
      timePeriod:'1990-Today',
      year: 1997,
      topQuote: '"It does not do to dwell on dreams and forget to live. Always remember, the magic you seek is within you. The wand may choose the wizard, but it is your choices that define you. Welcome to Hogwarts, where the journey of self-discovery begins."',
      shortSummary: "The first book in the iconic 'Harry Potter' series, this novel introduces readers to the magical world of Hogwarts School of Witchcraft and Wizardry. J.K. Rowling's series follows the adventures of a young wizard, Harry Potter, and his friends as they navigate the challenges of magic, friendship, and the ongoing battle against the dark wizard Voldemort.",
      coverImage: 'harry_potter.jpg',
      genre: 'Fantasy',
      country: '',
    },
    {
      writer: 'George R.R. Martin',
      bookName: 'A Game of Thrones',
      timePeriod:'1990-Today',
      year: 1996,
      topQuote: '"In the game of thrones, you win or you die. Power is a double-edged sword, and loyalty a rare treasure. As the realms play their deadly game, remember: winter is coming, and with it, the true test of honor, alliances, and the pursuit of the Iron Throne."',
      shortSummary: 'The first book in the "A Song of Ice and Fire" series, "A Game of Thrones" is a complex and politically charged epic fantasy. George R.R. Martin weaves a tale of power, intrigue, and warfare in the fictional continents of Westeros and Essos. The series is known for its intricate plot, morally ambiguous characters, and unpredictable twists.',
      coverImage: 'gameOfThrones.jpg',
      genre: 'Fantasy',
      country: '',
    },
 //Crime
 {
  writer:' Arthur Conan Doyle',
  bookName:'The Adventures of Sherlock Holmes',
  timePeriod:'1870-1900',
  year:'1892',
  topQuote:'"I cannot live without brainwork. What else is there to live for? Was ever such a dreary, dismal world? See how the yellow fog swirls down the street. What could be more hopelessly prosaic? Life without mystery is no life at all."',
  shortSummary:'A collection of short stories featuring the legendary detective Sherlock Holmes and his loyal friend Dr. John Watson. These stories, including classics like "The Hound of the Baskervilles" and "The Adventure of the Speckled Band," established the detective genre and left an enduring impact on crime fiction.',
  coverImage:'Sherlock_holmes.jpeg',
  genre:'Crime',
  country:'',
},
{
  writer:'Robert Louis Stevenson',
  bookName:'The Strange Case of Dr Jekyll and Mr Hyde',
  timePeriod:'1870-1900',
  year:'1886',
  topQuote:'"There comes an end to all things; the most capacious measure is filled at last; and this brief condescension to my evil finally destroyed the balance of my soul."',
  shortSummary:"While more of a novella than a novel, Stevenson's work is a classic exploration of the duality of human nature. It tells the story of Dr. Jekyll, a respected scientist who develops a potion that unleashes the sinister Mr. Hyde. The novella delves into themes of morality, the consequences of unchecked ambition, and the nature of good and evil.",
  coverImage:'strange_case_of_o.jpg',
  genre:'Crime',
  country:'',
},
{
  writer:'Dashiell Hammett',
  bookName:'The Maltese Falcon',
  timePeriod:'1900-1945',
  year:'1930',
  topQuote:"When a man's partner is killed, he's supposed to do something about it. It doesn't make any difference what you thought of him. He was your partner and you're supposed to do something about it.",
  shortSummary:"This classic detective novel introduces readers to private investigator Sam Spade as he becomes embroiled in the search for a valuable statuette, the Maltese Falcon. Dashiell Hammett's writing style and the character of Sam Spade set a standard for hard-boiled detective fiction.",
  coverImage:'maltese_falcon.jpg',
  genre:'Crime',
  country:'',
},
{
  writer:'Agatha Christie',
  bookName:'Murder on the Orient Express',
  timePeriod:'1900-1945',
  year:'1934',
  topQuote:"When a crime is committed, it is not just the criminal who is guilty. The world, with its complexities and contradictions, becomes an accomplice. In the puzzle of justice, the pieces may not always fit neatly, but they reveal a deeper truth.",
  shortSummary:'Agatha Christie, the Queen of Crime, wrote numerous popular mysteries, and "Murder on the Orient Express" is one of her most famous works. Featuring the legendary detective Hercule Poirot, the novel presents a murder mystery that occurs on a luxurious train traveling through Europe. The story is known for its clever plotting and surprising resolution.',
  coverImage:'murder-on-orient-express.jpg',
  genre:'Crime',
  country:'',
},
{
  writer:'Raymond Chandler',
  bookName:'The Big Sleep',
  timePeriod:'1900-1945',
  year:'1939',
  topQuote:"In the city of angels, the line between virtue and vice blurs. In the shadows of L.A.'s glamorous façade, secrets thrive, and the pursuit of truth can be as treacherous as the crimes it seeks to unravel.",
  shortSummary:"While slightly earlier than the specified time frame, Raymond Chandler's \"The Big Sleep\" is an influential work that had a lasting impact on crime fiction. Published in 1939, it introduces the iconic private detective Philip Marlowe and is renowned for its hard-boiled style, intricate plot, and gritty portrayal of Los Angeles.",
  coverImage:'the_big_sleep.jpg',
  genre:'Crime',
  country:'',
},
{
  writer:'Thomas Harris',
  bookName:'The Silence of the Lambs',
  timePeriod:'1945-1990',
  year:'1988',
  topQuote:"In the city of angels, the line between virtue and vice blurs. In the shadows of L.A.'s glamorous façade, secrets thrive, and the pursuit of truth can be as treacherous as the crimes it seeks to unravel.",
  shortSummary:"Thomas Harris's psychological thriller, \"The Silence of the Lambs\" introduces the character of FBI trainee Clarice Starling and the brilliant but monstrous Hannibal Lecter. The novel delves into the hunt for a serial killer and is known for its suspenseful narrative, complex characters, and psychological depth.",
  coverImage:'silence-of-the-lambs.jpg',
  genre:'Crime',
  country:'',
},
{
  writer:'Stieg Larsson',
  bookName:'The Girl with the Dragon Tattoo',
  timePeriod:'1990-Today',
  year:'2005',
  topQuote:"In a world of secrets and corruption, the unlikely alliance of a journalist and a mysterious hacker unravels a web of deceit. The past holds the key, and the pursuit of justice weaves a thrilling tale of redemption and revenge.",
  shortSummary:"The first book in the Millennium series, this international bestseller combines crime, mystery, and thriller elements. The novel follows investigative journalist Mikael Blomkvist and computer hacker Lisbeth Salander as they delve into the dark secrets of a wealthy family. Stieg Larsson's work gained immense popularity for its intricate plot and compelling characters.",
  coverImage:'dragon_tattoo.jpg',
  genre:'Crime',
  country:'',
},
{
  writer:'Gillian Flynn',
  bookName:'Gone Girl',
  timePeriod:'1990-Today',
  year:'2012',
  topQuote:"I was told love should be unconditional. That's the rule, everyone says so. But if love has no boundaries, no limits, no conditions, why should anyone try to do the right thing ever? If I know I am loved no matter what, where is the challenge?",
  shortSummary:"Gillian Flynn's psychological thriller \"Gone Girl\" became a sensation for its gripping narrative and unexpected twists. The story revolves around the disappearance of Amy Dunne and the subsequent media frenzy and police investigation. Flynn skillfully explores themes of marriage, deception, and the media's role in shaping public perception.",
  coverImage:'gone-girl.jpg',
  genre:'Crime',
  country:'',
},
//Romance
{
  writer:'Jane Austen',
  bookName:'Pride and Prejudice',
  timePeriod:'1870-1900',
  year:'1813',
  topQuote:"In the world of social expectations, Elizabeth Bennet grapples with the complexities of love and societal norms. As misunderstandings unfold, hearts and minds are tested, revealing the enduring power of true affection amid the dance of manners and romance.",
  shortSummary:"Although slightly earlier (published in 1813), Jane Austen's \"Pride and Prejudice\" continued to be influential in the late 19th century. This classic novel explores themes of love, class, and social expectations as Elizabeth Bennet navigates her feelings for the proud Mr. Darcy.",
  coverImage:'Jane_austen .jpg',
  genre:'Romance',
  country:'',
},
{
  writer:'Charlotte Brontë',
  bookName:'Jane Eyre',
  timePeriod:'1870-1900',
  year:'1847',
  topQuote:"I am no bird; no net ensnares me. I am a free human with an independent will. I choose to leave. I'll continue as Adele's governess, earning my keep. I'll be self-reliant, taking only what I earn.",
  shortSummary:"Similar to \"Pride and Prejudice\",\"Jane Eyre\" predates the specified time frame but continued to be influential in the late 19th century. The novel tells the story of the orphaned Jane Eyre and her complex relationship with the brooding Mr. Rochester. It explores themes of love, morality, and social class.",
  coverImage:'jane-eyre-426.jpg',
  genre:'Romance',
  country:'',
},
{
  writer:'Daphne du Maurier',
  bookName:'Rebecca',
  timePeriod:'1900-1945',
  year:'1938',
  topQuote:"Last night I dreamt I went to Manderley again. It seemed to me I stood by the iron gate leading to the drive, and for a while I could not enter, for the way was barred to me.",
  shortSummary:"Daphne du Maurier's \"Rebecca\" is a classic Gothic romance novel that follows the story of a young bride who becomes entangled in the mysterious past of her husband's first wife, Rebecca. The novel explores themes of love, jealousy, and the haunting presence of the past.",
  coverImage:'rebecca.jpg',
  genre:'Romance',
  country:'',
},
{
  writer:'Margaret Mitchell',
  bookName:'Gone with the Wind',
  timePeriod:'1900-1945',
  year:'1936',
  topQuote:"In the tumultuous South, Scarlett O'Hara grapples with love and loss against the backdrop of the Civil War. A resilient heroine, she faces the challenges of a changing world with unwavering determination, leaving an indelible mark on the pages of history.",
  shortSummary:" Margaret Mitchell's epic novel \"Gone with the Wind\" is a sweeping historical romance set against the backdrop of the American Civil War and Reconstruction era. The story revolves around the strong-willed Scarlett O'Hara and her tumultuous relationship with the enigmatic Rhett Butler. The novel became a cultural phenomenon and won the Pulitzer Prize for Fiction.",
  coverImage:'gone_with_the_wind.jpg',
  genre:'Romance',
  country:'',
},
{
  writer:'Marsha Canham',
  bookName:'Pride of Lions',
  timePeriod:'1945-1990',
  year:'1977',
  topQuote:"In the era of passion and conflict, where lions of pride roam, two hearts entwine amidst the chaos. Love becomes a battleground, and as the pride of lions rises, a tale unfolds, weaving together desire, duty, and the enduring strength of a tumultuous romance.",
  shortSummary:"Set against the backdrop of the Scottish Highlands, \"Pride of Lions\" is a historical romance novel that follows the passionate and tumultuous love story between a Scottish lord and an Englishwoman. Marsha Canham's novel is known for its vivid historical detail and compelling characters.",
  coverImage:'pride_of_lions.jpg',
  genre:'Romance',
  country:'',
},
{
  writer:'Rosamunde Pilcher',
  bookName:'The Shell Seekers',
  timePeriod:'1945-1990',
  year:'1987',
  topQuote:"In the coastal charm of Cornwall, familial tales blend with artistic legacies. Through Penelope's journey of love and loss, a tapestry of memories unfolds—a testament to the enduring beauty woven into the fabric of generations.",
  shortSummary:"\"The Shell Seekers\" is a family drama and romance novel that follows the life of Penelope Keeling. As she reflects on her past and her relationships with her children, the novel explores themes of love, art, and the enduring bonds within a family. Rosamunde Pilcher's work is known for its rich character development and evocative settings.",
  coverImage:'shell_seekers.jpg',
  genre:'Romance',
  country:'',
},
{
  writer:'Nicholas Sparks',
  bookName:'The Notebook',
  timePeriod:'1990-Today',
  year:'1996',
  topQuote:"In the embrace of a quaint town, a timeless love story unfolds. Noah and Allie, through the dance of destiny and the years' passage, discover the enduring power of true connection, etching their tale onto the pages of memory, a narrative painted with the hues of passion.",
  shortSummary:"Nicholas Sparks is known for his emotionally charged romance novels, and \"The Notebook\" is one of his most famous works. The story follows Noah Calhoun and Allie Nelson, two people who fall in love during the summer of 1940. The novel explores themes of love, memory, and the enduring power of true love.",
  coverImage:'TheNotebook.jpg',
  genre:'Romance',
  country:'',
},
{
  writer:'Stephenie Meyer',
  bookName:'Twilight',
  timePeriod:'1990-Today',
  year:'2005',
  topQuote:"In the twilight's gentle embrace, where shadows intertwine with the heartbeat of eternity, love sparkles like a secret whispered between the sun and the moon, casting a spell that only the heart truly understands.",
  shortSummary:" A cultural phenomenon in the 2000s, \"Twilight\" is the first book in the Twilight Saga. The novel introduces readers to the love story between Bella Swan, a human, and Edward Cullen, a vampire. The series became immensely popular and had a significant impact on the young adult and paranormal romance genres.",
  coverImage:'twilight.jpeg',
  genre:'Romance',
  country:'',
},

 
];

/*
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
  const defaultTitle = document.getElementById("display");
  defaultTitle.innerHTML = "<h2><strong>Welcome to Book Suggester!</strong> <br> <br> Please select a GENRE and a TIME PERIOD to get book suggestions.</h2>";
  
}

/*displaying the default text*/
window.onload=function(){
  defaultContent();
}

function generateRandomSuggestion (genre, timePeriod){
  const filteredBooks = books.filter(book => book.genre === genre && book.timePeriod.startsWith(timePeriod));

  const shuffledBooks = shuffleArray(filteredBooks);

  return shuffledBooks.length > 0 ? shuffledBooks[0] : null;
}

/*function to display book details*/
function displayBookDetails(book){
  
  const bookInfo = document.getElementById("display");
  

if (!bookInfo) {
    console.error('Error: Element with ID "display" not found.');
    return;
}


  if (book){
    
    bookInfo.innerHTML=`
    <div id='textAndImage'>
     <div id='allText'> 
       <p id="writer"> ${book.writer} </p>
       <p id="book-name"> ${book.bookName}</p>
       <p id="year">${book.year}</p>
       <p id="quote">${book.topQuote}</p>
       <p id="summary">${book.shortSummary}</p>
     </div>
     <img id="bookCover" src="${book.coverImage}" alt="${book.bookName} Cover" >
    </div>
    `;
  } else{
    bookInfo.innerHTML= '<p>No books here yet! But there will be..</p>'
  }
}
//create a new div element
const newDiv = document.createElement('div')

// give it an id attribute
newDiv.id = 'divForText';

document.body.appendChild(newDiv);


const texts = document.querySelectorAll('p')
texts.forEach(function(text) {
  newDiv.appendChild(text);
  console.log (hello);
});

/*function for the search button*/
function getRandomBook (){
  const genre = document.getElementById('dropdown-1').value;
  const timePeriod = document.getElementById('dropdown-2').value;
 
  const suggestion = generateRandomSuggestion(genre, timePeriod);
  displayBookDetails(suggestion);
  console.log ('is it working??');
}
document.getElementById('search-button').addEventListener('click' , getRandomBook);


//function for the regenerate button (same as search button)
function regenerateBook(){
  const genre = document.getElementById('dropdown-1').value;
  const timePeriod = document.getElementById('dropdown-2').value;

  const suggestion = generateRandomSuggestion(genre, timePeriod);
  displayBookDetails(suggestion);
}
document.getElementById('regenerate-button').addEventListener('click', regenerateBook);

//Shuffle
function shuffleArray(array){
  for ( let i = array.length -1; i>0; i--){
   const j = Math.floor(Math.random() * (i+1));
   [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}






