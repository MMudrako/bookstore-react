const books = [

  {
    id: "9781847497826",
    title: "The Master and Margarita",
    author: "Mikhail Bulgakov",
    cover: "https://covers.openlibrary.org/b/isbn/9781847497826-M.jpg",
    categories: ["classic", "novel", "fantasy", "religious philosophy", "political", "satire", "Soviet Union", "20th-century"],
    description: "The story concerns a visit by the devil and his entourage to the officially atheistic Soviet Union. The devil, manifested as one Professor Woland, challenges the Soviet citizens' beliefs towards religion and condemns their behavior throughout the book. The Master and Margarita combines supernatural elements with satirical dark comedy and Christian philosophy, defying categorization within a single genre. Many critics consider it to be one of the best novels of the 20th century, as well as the foremost of Soviet satires."
  },
  {
    id: "9781519526861",
    title: "Dead Souls",
    author: "Nikolai Gogol",
    cover: "https://covers.openlibrary.org/b/isbn/9781519526861-M.jpg",
    categories: ["classic", "poem in prose", "comedy", "political", "satire", "Russian Empire", "19th-century"],
    description: "The story follows the exploits of Chichikov, a middle-aged gentleman of middling social class and means. Chichikov arrives in a small town and turns on the charm to woo key local officials and landowners. He reveals little about his life thus far, or his purpose, as he sets about carrying out his bizarre and mysterious plan to acquire 'dead souls'."
  },
  {
    id: "61002146",
    title: "The Twelve Chairs",
    author: "Ilf and Petrov",
    cover: "https://covers.openlibrary.org/b/lccn/61002146-M.jpg",
    categories: ["classic", "novel", "political", "satire", "Soviet Union", "20th-century"],
    description: "In the Soviet Union in 1927, during the NEP era, a former Marshal of the Nobility, Ippolit Matveyevich 'Kisa' Vorobyaninov, works as the registrar of marriages and deaths in a sleepy provincial town. His mother-in-law reveals on her deathbed that her family jewellery was hidden from the Bolsheviks in one of the twelve chairs from the family's dining-room set. Those chairs, along with all other personal property, were taken away by the Communists after the 1917 Russian Revolution. Vorobyaninov wants to find the treasure."
  },
  {
    id: "5820509",
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    cover: "https://covers.openlibrary.org/b/id/5820509-M.jpg",
    categories: ["classic", "stories", "detective fiction", "United Kingdom", "19th-century"],
    description: "All of the stories within The Adventures of Sherlock Holmes are told in a first-person narrative from the point of view of Dr. Watson, as is the case for all but four of the Sherlock Holmes stories. The Oxford Dictionary of National Biography entry for Doyle suggests that the short stories contained in The Adventures of Sherlock Holmes tend to point out social injustices, such as a king's betrayal of an opera singer, a stepfather's deception of his ward as a fictitious lover, an aristocratic crook's exploitation of a failing pawnbroker, a beggar's extensive estate in Kent."
  },
  {
    id: "3087607",
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    olid: "OL15397123W",
    cover: "https://covers.openlibrary.org/b/oclc/3087607-M.jpg",
    categories: ["classic", "historical novel", "novel", "adventure", "France", "19th-century"],
    description: "On the day in 1815 when Napoleon escapes from Elba, Edmond Dantès sails the Pharaon into Marseille after the death of the captain, Leclère. The ship's owner, Morrel, will make Dantès the next captain. On his deathbed, Leclère charged Dantès to deliver a package to General Bertrand (exiled with Napoleon), and a letter from Elba to a Bonapartist in Paris named Noirtier. Crewmate Danglars is jealous of Dantès's rapid promotion."
  },
  {
    id: "9781403717221",
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    cover: "https://covers.openlibrary.org/b/isbn/9781403717221-M.jpg",
    categories: ["classic", "realist novel", "novel", "Russian Empire", "20th-century"],
    description: "Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky. Tragedy unfolds as Anna rejects her passionless marriage and thereby exposes herself to the hypocrisies of society."
  },
  {
    id: "9780395520215",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    olid: "OL26331989W",
    cover: "https://covers.openlibrary.org/b/isbn/9780395520215-M.jpg",
    categories: ["fantasy", "novel", "United Kingdom", "20th-century"],
    description: "The Hobbit is a tale of high adventure, undertaken by a company of dwarves in search of dragon-guarded gold. A reluctant partner in this perilous quest is Bilbo Baggins, a comfort-loving unambitious hobbit, who surprises even himself by his resourcefulness and skill as a burglar."
  },
  {
    id: "7222246",
    title: "1984",
    author: "George Orwell",
    cover: "https://covers.openlibrary.org/b/id/7222246-M.jpg",
    categories: ["dystopian", "novel", "political fiction", "social science fiction", "United Kingdom", "20th-century"],
    description: "It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final completed book. Thematically, it centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of people and behaviours within society.[3][4] Orwell, a staunch believer in democratic socialism and member of the anti-Stalinist Left, modelled Britain under authoritarian socialism in the novel on the Soviet Union in the era of Stalinism and on the very similar practices of both censorship and propaganda in Nazi Germany.[5] More broadly, the novel examines the role of truth and facts within societies and the ways in which they can be manipulated."
  },
  {
    id: "OL50444320M",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "https://covers.openlibrary.org/b/olid/OL50444320M-M.jpg",
    categories: ["classic", "Regency novel", "romance novel", "novel", "United Kingdom", "20th-century"],
    description: "Pride and Prejudice is the second novel by English author Jane Austen, published in 1813. A novel of manners, it follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness."
  },
  {
    id: "OL35657482M",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "https://covers.openlibrary.org/b/olid/OL35657482M-M.jpg",
    categories: ["tragedy", "novel", "United States", "20th-century"],
    description: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan has been acclaimed by generations of readers."
  },
  {
    id: "OL6682530M",
    title: "Twenty Thousand Leagues Under the Seas",
    author: "Jules Verne",
    cover: "https://covers.openlibrary.org/b/olid/OL6682530M-M.jpg",
    categories: ["classic", "adventure", "novel", "science fiction", "France", "19th-century"],
    description: "A nineteenth-century science fiction tale of an electric submarine, its eccentric captain, and undersea world."
  },
  {
    id: "9781784043209",
    title: "Brave New World",
    author: "Aldous Huxley",
    cover: "https://covers.openlibrary.org/b/isbn/9781784043209-M.jpg",
    categories: ["dystopian novel", "novel", "science fiction", "United Kingdom", "20th-century"],
    description: "Satirical and disturbing, Brave New World is set some 600 years into the future. Reproduction is controlled through genetic engineering, and people are bred into a rigid class system."
  },
  {
    id: "OL53869220M",
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    cover: "https://covers.openlibrary.org/b/olid/OL53869220M-M.jpg",
    categories: ["historical fiction", "historical novel", "novel", "tragedy", "United States", "20th-century"],
    description: "This is the tale of Scarlett O'Hara, the spoiled, ruthless daughter of a wealthy plantation owner, who arrives at young womanhood just in time to see the Civil War sweep away the life for which her upbringing has prepared her."
  },
  {
    id: "OL39800428M",
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    cover: "https://covers.openlibrary.org/b/olid/OL39800428M-M.jpg",
    categories: ["classic", "philosophical novel", "novel", "theological fiction", "detective novel", "Russian Empire", "19th-century"],
    description: "The Brothers Karamazov, Dostoevsky’s crowning achievement, is a tale of patricide and family rivalry that embodies the moral and spiritual dissolution of an entire society (Russia in the 1870s)."
  },
  {
    id: "9789354402173",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    cover: "https://covers.openlibrary.org/b/isbn/9789354402173-S.jpg",
    categories: ["gothic literature", "philosophical fiction", "decadent literature", "United Kingdom", "19th-century"],
    description: "The story revolves around a portrait of Dorian Gray painted by Basil Hallward, a friend of Dorian's and an artist infatuated with Dorian's beauty. Through Basil, Dorian meets Lord Henry Wotton and is soon enthralled by the aristocrat's hedonistic worldview: that beauty and sensual fulfilment are the only things worth pursuing in life. Knowing that he will lose his beauty with time, Dorian impulsively chooses to sell his soul and asks for the portrait, rather than himself, to age and fade."
  }
];

export default books;