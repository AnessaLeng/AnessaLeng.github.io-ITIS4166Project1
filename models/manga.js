const { v4: uuidv4 } = require('uuid');

const collection = [
    {
        id: '1',
        title: 'Death Note',
        seller: 'Tsugumi Ohba',
        condition: 'Like New',
        price: 10.99,
        details: 'The manga follows Light Yagami, a genius high school student who discovers a mysterious notebook: the "Death Note", which belonged to the shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.',
        image: '../images/death-note2281c3dc843d2a2e289673eb2589f143.jpg',
        totalOffers: 0,
        active: true
    },
    {
        id: '2',
        title: 'My Hero Academia',
        seller: 'Kōhei Horikoshi',
        condition: 'Like New',
        price: 17.99,
        details: 'Set in a world where superpowers (called "Quirks") have become commonplace, the manga follows Izuku Midoriya, a boy who was born without a Quirk but still dreams of becoming a superhero himself.',
        image: '../images/my-hero-d944197940b326c2ce2f872e645f5c29.jpg',
        totalOffers: 4,
        active: true
    },
    {
        id: '3',
        title: 'Naruto',
        seller: 'Masashi Kishimoto',
        condition: 'Like New',
        price: 10.99,
        details: 'Naruto is an orphan who wants to be acknowledged by his village and become the Hokage, the strongest and most respected ninja. He has a secret: he is the host of a powerful demon fox that attacked his village many years ago. The series follows his adventures and challenges as he trains and fights with his friends and enemies.',
        image: '../images/naruto-239ce62a32c1914313eb8daf2b91756b.jpg',
        totalOffers: 0,
        active: true
    },
    {
        id: '4',
        title: 'One-Piece',
        seller: 'Eiichiro Oda',
        condition: 'Slightly Used',
        price: 12.99,
        details: 'One Piece is a Japanese manga and anime series that follows the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, as they explore the Grand Line in search of the mythical treasure known as the "One Piece". His dream is to become the Pirate King by finding the ultimate treasure located at the end of the Grand Line',
        image: '../images/one-piece-6eeb589be1138a2c0d5766be64f1ce5b.jpg',
        totalOffers: 1,
        active: true
    },
    {
        id: '5',
        title: 'One-Punch Man',
        seller: 'Tomohiro',
        condition: 'Slightly Used',
        price: 15.99,
        details: 'One Punch Man tells the manga of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. He joins the Hero Association, a group of professional heroes who protect the world from various threats, and meets other heroes and villains along the way. The series is a parody and homage to the superhero genre, with humor, action, and satire',
        image: '../images/one-punchmanOIP.jpeg',
        totalOffers: 2,
        active: true
    },
    {
        id: '6',
        title: 'Solo Leveling',
        seller: 'Chu-gong',
        condition: 'New',
        price: 19.99,
        details: 'Solo Leveling is a manhwa written by Chu-gong that focuses on the adventures of the main protagonist Sung Jin-Woo. Jin-Woo is known as a weak hunter in a world where creatures such as monsters and dungeons always appear and threaten humans. After surviving an overwhelmingly powerful double dungeon that nearly wipes out his entire party, a mysterious program called the System chooses him as its sole player and in turn, gives him the extremely rare ability to level up in strength, possibly beyond any known limits.',
        image: '../images/sololeveling-4231035.jpg',
        totalOffers: 3,
        active: true
    }
];

exports.find = () => collection;

exports.findById = id => collection.find(manga=>manga.id === id);

exports.save = function(manga) { 
    manga.id = uuidv4(); 
    manga.totalOffers = 0;
    manga.active = true;
    collection.push(manga);
};

exports.updateById = function(id, updateManga) {
    let manga = collection.find(manga=>manga.id === id);
    if (manga) {
        manga.title = updateManga.title;
        manga.seller = updateManga.seller;
        manga.condition = updateManga.condition;
        manga.price = updateManga.price;
        manga.details = updateManga.details;
        manga.image = updateManga.image;
        return true;
    } else {
        return false;
    }
};

exports.deleteById = function(id) {
    let index = collection.findIndex(manga=>manga.id === id);
    if (index !== -1) {
        collection.splice(index, 1);
        return true;
    } else {
        return false;
    }
};