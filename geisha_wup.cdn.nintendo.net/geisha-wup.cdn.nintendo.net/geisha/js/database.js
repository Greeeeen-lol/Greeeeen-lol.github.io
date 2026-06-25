// Local Game Database for Custom Games Portal
(function(window) {
    "use strict";

    // Offline-safe placeholder art (gray box). Real box art is a cosmetic TODO:
    // drop a real URL into image/banner/screenshots per title when available.
    var PH = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='800'><rect width='100%25' height='100%25' fill='%23cfd8dc'/></svg>";

    // Card art served from the platform server. icon (square) = card image;
    // game-banner (wide) = hero banner + screenshot. NOTE: these are absolute
    // paths under /platform/* — fine in dev (vite proxy) and when the backend is
    // same-origin; if the eShop is hosted on GitHub Pages with the backend on a
    // separate host, these must point at the backend's public URL.
    var ICON   = function (id) { return "/platform/assets/icons/" + id + ".png"; };
    var BANNER = function (id) { return "/platform/assets/game-banners/" + id + ".png"; };

    var GameDatabase = {
        "20010000020451": {
            "id": "20010000020451",
            "name": "Minecraft: Wii U Edition",
            "release_date": "2015-12-17",
            "content_type": "WUP",
            "publisher": "Mojang",
            "rating": "ESRB: E10+",
            "genre": "Action-Adventure",
            "players": "1-4 Players",
            "size": "620.1 MB",
            "description": "Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off the dangerous mobs.",
            "votes": "36522",
            "stars": "5",
            "price": "Free",
            "regular_price": "Free",
            "image": "https://kanzashi-wup.cdn.nintendo.net/i/b55e4428ed6ccc40c6c2f267b0166247f49dc2173927fc364af8c55330112db0.jpg",
            "banner": "https://kanzashi-wup.cdn.nintendo.net/i/03b79bb2e593a932ec342fb913a992426b40f2b171a7fedf2cdb1a709026a673.jpg",
            "screenshots": [
                "https://kanzashi-wup.cdn.nintendo.net/i/13816cb4c502953cab6cffe62d95d4e91cba1c44ce463431ff4fa9cae232db99.jpg",
                "https://kanzashi-wup.cdn.nintendo.net/i/fd710d98640012c209c8911670978cb570fca02d9d9e0a660b6a01f102db129f.jpg",
                "https://kanzashi-wup.cdn.nintendo.net/i/c6656aa0a328af8096d8ebbc8b4d546c8889120d847a13450e55b8d32aca0b63.jpg"
            ]
        },
        "20010000030001": {
            "id": "20010000030001",
            "name": "Baldi's Basics Plus",
            "release_date": "2020-06-12",
            "content_type": "WUP",
            "publisher": "Basically Games",
            "rating": "ESRB: E10+",
            "genre": "Horror / Edutainment",
            "players": "1 Player",
            "size": "210.0 MB",
            "description": "Collect all seven notebooks while avoiding Baldi in this randomly generated survival horror parody of low-budget '90s edutainment games. Now in glorious 3D.",
            "votes": "9821", "stars": "5", "price": "Free", "regular_price": "Free",
            "image": ICON("20010000030001"), "banner": BANNER("20010000030001"), "screenshots": [BANNER("20010000030001")]
        },
        "20010000030002": {
            "id": "20010000030002",
            "name": "Class of '09",
            "release_date": "2021-08-19",
            "content_type": "WUP",
            "publisher": "SBN3",
            "rating": "ESRB: M",
            "genre": "Visual Novel",
            "players": "1 Player",
            "size": "180.0 MB",
            "description": "A darkly comedic visual novel following the worst day in the life of Nicole. Make choices and watch them spiral hilariously out of control.",
            "votes": "5310", "stars": "4", "price": "Free", "regular_price": "Free",
            "image": ICON("20010000030002"), "banner": BANNER("20010000030002"), "screenshots": [BANNER("20010000030002")]
        },
        "20010000030003": {
            "id": "20010000030003",
            "name": "Kindergarten",
            "release_date": "2017-09-15",
            "content_type": "WUP",
            "publisher": "SmashGames",
            "rating": "ESRB: T",
            "genre": "Puzzle / Adventure",
            "players": "1 Player",
            "size": "120.0 MB",
            "description": "A monstrously cute puzzle game where you relive the same horrifying school day, solving the dark mysteries of your fellow students and faculty.",
            "votes": "7044", "stars": "5", "price": "Free", "regular_price": "Free",
            "image": ICON("20010000030003"), "banner": BANNER("20010000030003"), "screenshots": [BANNER("20010000030003")]
        },
        "20010000030004": {
            "id": "20010000030004",
            "name": "Kindergarten 2",
            "release_date": "2019-07-29",
            "content_type": "WUP",
            "publisher": "SmashGames",
            "rating": "ESRB: T",
            "genre": "Puzzle / Adventure",
            "players": "1 Player",
            "size": "140.0 MB",
            "description": "Return to the most messed up school around. New students, new faculty, new mysteries — and a brand new cafeteria full of secrets to uncover.",
            "votes": "6122", "stars": "5", "price": "Free", "regular_price": "Free",
            "image": ICON("20010000030004"), "banner": BANNER("20010000030004"), "screenshots": [BANNER("20010000030004")]
        },
        "20010000030005": {
            "id": "20010000030005",
            "name": "Undertale Yellow",
            "release_date": "2023-12-22",
            "content_type": "WUP",
            "publisher": "Team Undertale Yellow",
            "rating": "ESRB: E10+",
            "genre": "RPG",
            "players": "1 Player",
            "size": "260.0 MB",
            "description": "A fan-made Undertale prequel. Play as Clover, a human who falls into the Underground, and decide the fate of monsterkind across a full-length adventure.",
            "votes": "12877", "stars": "5", "price": "Free", "regular_price": "Free",
            "image": ICON("20010000030005"), "banner": BANNER("20010000030005"), "screenshots": [BANNER("20010000030005")]
        },
        "20010000030006": {
            "id": "20010000030006",
            "name": "Super Mario 64",
            "release_date": "1996-06-23",
            "content_type": "WUP",
            "publisher": "Nintendo",
            "rating": "ESRB: E",
            "genre": "Platformer",
            "players": "1 Player",
            "size": "8.0 MB",
            "description": "The classic 3D platformer, in your browser. Collect Power Stars across 15 worlds to rescue Princess Peach from Bowser.",
            "votes": "48210", "stars": "5", "price": "Free", "regular_price": "Free",
            "image": ICON("20010000030006"), "banner": BANNER("20010000030006"), "screenshots": [BANNER("20010000030006")]
        }
    };

    window.GameDatabase = GameDatabase;
})(window);
