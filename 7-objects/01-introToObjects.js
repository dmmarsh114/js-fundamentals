/*
    - and object is a container that stores multiple sets of data 
    - stores them in key/value pairs 
    - objects are denoted by {}
*/

let netflix = {
    id: 1,
    showName: 'The Office',
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: 'Pilot'
            }, {
                episode: 2,
                episodeName: 'Diversity Day'
            }, {
                episode: 3,
                episodeName: 'Health Care'
            }, {
                episode: 4,
                episodeName: 'The Alliance'
            }, {
                episode: 5,
                episodeName: 'Basketball'
            }, {
                episode: 6,
                episodeName: 'Hot Girl'
            }]
        }
    },
    season2: {},
    season3: {},
    season4: {},
}

// to access data inside of an object, use dot notation 
// console.log('all data:', netflix);
console.log('season info:', netflix.season1.seasonInfo);
console.log('specific episode name:', netflix.season1.seasonInfo.episodeInfo[1].episodeName);

/* 
    Challenge: 
        - pick an episode to console.log
        - using dot notation, walk throug netflix object and print off both the episode and the episode name 
*/

console.log('my favorite episode:',
    netflix.season1.seasonInfo.episodeInfo[3].episode,
    netflix.season1.seasonInfo.episodeInfo[3].episodeName);

console.log(`episode number: ${netflix.season1.seasonInfo.episodeInfo[4].episode}, episode name: ${netflix.season1.seasonInfo.episodeInfo[4].episodeName}`);

/*
    JSON objects
        - json stands for 'javascript object notation'
        - json syntax derives from js object, but it's text only 
        - need to convert jsons before they can be used 
            -- from strings to js objects 
        - can go to https://jsonformatter.org/ to convert 
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

// console.log(Object.keys(spaceJam.toonSquad));
// console.log(Object.keys(spaceJam.toonSquad.duck)); // this will return the indeces of the string 'Daffy Duck'
// console.log(Object.keys(spaceJam.toonSquad).toString());
console.log(Object.values(spaceJam.nbaPlayers));

/*
    object bracket notation
        - like dot notation, allows us to find a value in an object 
        - allows us to set keys of an object 
        - store keys from an object as a variable 

        - object bracket notation works because all keys inside of an object are strings 
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower', 
    fruit: 'grape', 
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden); // returns an array of all keys in this object 
console.log(typeof test[1]);

let zucchini = garden['vegetable']; // object bracken notation. Notice the single quotes around the vegetable key!! 
console.log(zucchini);


let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower', 
    fruit: 'grape', 
    water: true,
    sun: true,
    size: 10
}

let baking = {};
baking['zucchini'] = 'better make some bread';
// console.log(baking);
console.log(baking[garden['vegetable']]);  // lines 133 and 134 output the same thing -- garden['vegetable'] is resolved first
console.log(baking['zucchini']);  

let testObj = {
    "Spaces Here": true,
    noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj["Spaces Here"]); // you have to use square bracket notation if your keys have spaces 