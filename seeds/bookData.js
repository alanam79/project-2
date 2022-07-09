const { Book } = require("../models");

const bookdata = [
  {
    title: "Carrie",
    author: "Stephen King",
    published_date: "04/05/1974",
    file_name: "Carrie.jpg",
    pages: "199",
  },
  {
    title: "Salem's Lot",
    author: "Stephen King",
    published_date: "10/17/1975",
    file_name: "Salem's-Lot.jpg",
    pages: "439",
  },
  {
    title: "The Shining",
    author: "Stephen King",
    published_date: "01/2/1977",
    file_name: "The-Shining.jpg",
    pages: "447",
  },
  {
    title: "Rage",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "211",
  },
  {
    title: "The Stand",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "823",
  },
  {
    title: "The Long Walk",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "384",
  },
  {
    title: "The Dead Zone",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "428",
  },
  {
    title: "Firestarter",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "426",
  },
  {
    title: "Roadwork",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "274",
  },
  {
    title: "Cujo",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "319",
  },
  {
    title: "The Running Man",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "219",
  },
  {
    title: "The Dark Tower: The Gunslinger",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "224",
  },
  {
    title: "Christine",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "526",
  },
  {
    title: "Pet Sematary",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "374",
  },
  {
    title: "Cycle of the Werewolf",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "127",
  },
  {
    title: "The Talisman",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "646",
  },
  {
    title: "The Eyes of the Dragon",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "326",
  },
  {
    title: "Thinner",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "309",
  },
  {
    title: "IT",
    author: "Stephen King",
    published_date: "09/15/1986",
    file_name: "IT.jpg",
    pages: "1138",
  },
  {
    title: "The Dark Tower: The Drawing of the Three",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "400",
  },
  {
    title: "Misery",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "310",
  },
  {
    title: "The Tommyknockers",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "558",
  },
  {
    title: "The Dark Half",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "421",
  },
  {
    title: "The Stand",
    author: "Stephen King",
    published_date: "10/03/1978",
    file_name: "The-Stand.jpg",
    pages: "1152",
  },
  {
    title: "The Dark Tower III: The Waste Lands",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "512",
  },
  {
    title: "Needful Things",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "690",
  },
  {
    title: "Gerald's Game",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "352",
  },
  {
    title: "Dolores Claiborne",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "305",
  },
  {
    title: "Insomnia",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "787",
  },
  {
    title: "Rose Madder",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "420",
  },
  {
    title: "The Green Mile",
    author: "Stephen King",
    published_date: "08/29/1996",
    file_name: "The-Green-Mile.jpg",
    pages: "400",
  },
  {
    title: "Desperation",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "704",
  },
  {
    title: "The Regulators",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "480",
  },
  {
    title: "The Dark Tower IV: Wizard and Glass",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "787",
  },
  {
    title: "Bag of Bones",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "529",
  },
  {
    title: "The Girl Who Loved Tom Gordon",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "224",
  },
  {
    title: "Dreamcatcher",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "620",
  },
  {
    title: "Black House",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "625",
  },
  {
    title: "From a Buick 8",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "368",
  },
  {
    title: "The Dark Tower V: Wolves of the Calla",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "714",
  },
  {
    title: "The Dark Tower VI: Song of Susannah",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "432",
  },
  {
    title: "The Dark Tower VII: The Dark Tower",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "845",
  },
  {
    title: "The Colorado Kid",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "184",
  },
  {
    title: "Cell",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "351",
  },
  {
    title: "Lisey's Story",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "528",
  },
  {
    title: "Blaze",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "304",
  },
  {
    title: "Duma Key",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "607",
  },
  {
    title: "Under the Dome",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "1074",
  },
  {
    title: "11/22/63",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "849",
  },
  {
    title: "The Dark Tower: The Wind Through the Keyhole",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "336",
  },
  {
    title: "Joyland",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "288",
  },
  {
    title: "Doctor Sleep",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "531",
  },
  {
    title: "Mr. Mercedes",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "436",
  },
  {
    title: "Revival",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "403",
  },
  {
    title: "Finders Keepers",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "434",
  },
  {
    title: "End of Watch",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "496",
  },
  {
    title: "Gwendy's Button Box",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "175",
  },
  {
    title: "Sleeping Beauties",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "702",
  },
  {
    title: "The Outsider",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "576",
  },
  {
    title: "Elevation",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "144",
  },
  {
    title: "The Institute",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "576",
  },
  {
    title: "Later",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "256",
  },
  {
    title: "Billy Summers",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "528",
  },
  {
    title: "Gwendy's Final Task",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "412",
  },
  {
    title: "Fairy Tale",
    author: "Stephen King",
    published_date: "",
    file_name: "",
    pages: "608",
  },
];

const seedBooks = () => Book.bulkCreate(bookdata);

module.exports = seedBooks;
