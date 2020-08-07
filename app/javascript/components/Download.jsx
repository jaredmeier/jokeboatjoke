import React from 'react';

import Button from './Button';

export default ({ data }) => {
  const convertToFile = data => {
    const fileTemplate = {
       "episodeid": 1397,
        "content": [...ogJokes]
    }

    const startId = 5700;
    data.forEach((joke, idx) => {
      const obj = {
        punchline: joke.punchline.split('BLANK').join('<BLANK>'),
        decoys: [
          'staples | the staples store.',
          'perfumes | Scents You are Here.',
          'library books | This Feels Illegal.',
          'horses | Your Neigh-borhood Horse Store.',
          'tutus | Buy Tu Get Tu.',
        ],
        timing: '3.0',
        x: false,
        setup: joke.setup.split('TOPIC').join('<TOPIC>'),
        id: startId + idx,
        categories: ',#things',
        type: '5',
      };

      fileTemplate.content.push(obj);
    })

    return JSON.stringify(fileTemplate);
  }

  const downloadTxtFile = () => {
    const fileData = convertToFile(data);
    const element = document.createElement('a');
    const file = new Blob([fileData], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'JokeboatSetup.jet';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  return (
    <Button
      id='download'
      styleName='edit__btn-download'
      handler={downloadTxtFile}
    >
      <span className='material-icons' id="download">get_app</span>
    </Button>
  );
}

const ogJokes = [
  {
    punchline: 'and call it <BLANK>',
    decoys: [
      'staples | the staples store.',
      'perfumes | Scents You are Here.',
      'library books | This Feels Illegal.',
      'horses | Your Neigh-borhood Horse Store.',
      'tutus | Buy Tu Get Tu.',
    ],
    timing: '4.25',
    x: false,
    setup: 'I want to open a store that only sells <TOPIC>',
    id: 55843,
    categories: ',#things',
    type: '5',
  },
  {
    punchline: '<BLANK>?',
    decoys: [
      'Peter Pan | a silly boy scout',
      'Karl Marx | a depressed Santa',
      'Sherlock Holmes | a hipster dad',
      'Loki | a guy from the Ren Faire went emo',
      'Bigfoot | a tall guy in a costume',
    ],
    timing: '3.0',
    x: false,
    setup: 'You ever notice how <TOPIC> looks like',
    id: 55840,
    categories: ',#person',
    type: '2',
  },
  {
    punchline: 'We had <BLANK>',
    decoys: [
      'online followers | in-person stalkers.',
      'ice cream sundaes | gelato mondays.',
      'brooms | extra dogs.',
      'coolers | to blow on things constantly.',
      'bulldozers | very alert bulls.',
    ],
    timing: '3.0',
    x: false,
    setup: 'When I was a kid we didn\u2019t have <TOPIC>.',
    id: 55839,
    categories: ',#things',
    type: '3',
  },
  {
    punchline: 'That\u2019s where you <BLANK>',
    decoys: [
      'Jackbox | waste hours of your life.',
      'rat | eat garbage and hide.',
      'donut | donut do anything.',
      'Big Bad Wolf | exercise til you huff and puff.',
      'college | get in debt for the rest of your life.',
    ],
    timing: '3.0',
    x: false,
    setup: 'Have you heard about the <TOPIC> challenge?',
    id: 55813,
    categories: ',object',
    type: '1',
  },
  {
    punchline: '<BLANK>',
    decoys: [
      'Old Spice | New Spice.',
      'Batman | someone with parents.',
      'Guy Fieri | the intern of Flavortown.',
      'King Kong | Prince Kong.',
      'Garfield | into spaghetti.',
    ],
    timing: '3.0',
    x: false,
    setup: 'I\u2019m so old I remember when <TOPIC> was',
    id: 55811,
    categories: ',#person',
    type: '3',
  },
  {
    punchline: '<BLANK>',
    decoys: [
      'guacamole | it got old fast.',
      'Superman | it had a lot of quick changes.',
      'kale | I didn\u2019t get the appeal.',
      'sunshine | fine unless you are looking directly at it.',
      'wifi | great for a few, terrible for everyone else.',
    ],
    timing: '3.0',
    x: false,
    setup: 'Middle school for me was like <TOPIC>:',
    id: 55810,
    categories: ',person',
    type: '1',
  },
  {
    punchline: '<BLANK>',
    decoys: [
      'churches | the plate of free money.',
      'virtual reality games | where did everyone go?!',
      'group texts | nothing. They\u2019re terrible.',
      'mattresses | that they\u2019re safer than a bank.',
      'passwords | they\u2019re always 1234.',
    ],
    timing: '3.5',
    x: false,
    setup: 'My grandma said the best thing about <TOPIC> is',
    id: 55809,
    categories: ',#things',
    type: '5',
  },
  {
    punchline: '<BLANK>',
    decoys: [
      'nachos | with fake cheese.',
      'deep dish pizza | it makes me immediately fall asleep.',
      'candy corn | once a year.',
      'blenders | functional with lots of settings.',
      'toothbrush | oral.',
    ],
    timing: '3.0',
    x: true,
    setup: 'I like my sex like I like my <TOPIC>:',
    id: 55807,
    categories: ',food',
    type: '1',
  },
  {
    punchline: 'because <BLANK>',
    decoys: [
      'flashlight | I have bright ideas.',
      'hot dog | what\u2019s inside me is a mystery.',
      'panini | I find myself pressed for time.',
      'end table | I am a welcomed addition to a room.',
      'tornado | I pass wind and destroy homes.',
    ],
    timing: '3.0',
    x: true,
    setup: 'I\u2019m a nasty little <TOPIC>',
    id: 55805,
    categories: ',object',
    type: '3',
  },
  {
    punchline: 'Three. One to screw it in and two to <BLANK>',
    decoys: [
      'astronauts | fake it.',
      'bathtubs | soak it all in.',
      'mugs | make cheesy faces to the camera.',
      'escalators | randomly stop working.',
      'keys | unlock their own potential.',
    ],
    timing: '0.0',
    x: false,
    setup: 'How many <TOPIC> does it take to change a light bulb?',
    id: 56091,
    categories: ',#things',
    type: '4',
  },
  {
    punchline: 'and <BLANK>',
    decoys: [
      'sharks | they say, \u201cwe\u2019re not your chums.\u201d',
      'blenders | really mix things up.',
      'screwdrivers | loosen up.',
      'dog walkers | sit and stay, good boys.',
      'Band-Aids | make everyone feel better.',
    ],
    timing: '0.0',
    x: false,
    setup: 'A group of <TOPIC> walk into a bar',
    id: 56092,
    categories: ',#things',
    type: '4',
  },
  {
    punchline: '<BLANK>',
    decoys: [
      'musicals | It\u2019s really annoying.',
      'architecture | crumbling.',
      'polar bears | slowly going extinct.',
      'meatloaf | you don\u2019t see much of it these days.',
      'surfboards | looks cooler from far away.',
    ],
    timing: '0.0',
    x: true,
    setup: 'My love life is like <TOPIC>:',
    id: 56099,
    categories: ',#person',
    type: '2',
  },
  {
    punchline: '<BLANK>',
    decoys: [
      'public pool | really shallow!',
      'martial arts | wearing colorful belts.',
      'podcasts | quiet and boring.',
      'taxi drivers | they don\u2019t talk to me.',
      'mattresses | I order them online.',
    ],
    timing: '0.0',
    x: false,
    setup: 'I like my friends like I like my <TOPIC>:',
    id: 56923,
    categories: ',#things',
    type: '1',
  },
  {
    punchline: '<BLANK>',
    decoys: [
      'Beethoven | they don\u2019t hear from me.',
      'Maybelline | maybe I was born with it.',
      'Pampers | full of you know what.',
      'rubber duckies | fun at first but quickly lose their appeal.',
      'Bigfoot | they don\u2019t photograph well.',
    ],
    timing: '0.0',
    x: false,
    setup: 'My family is like <TOPIC>:',
    id: 56102,
    categories: ',#person',
    type: '1',
  },
  {
    punchline: '<BLANK>',
    decoys: [
      'paper clips | it barely holds things together.',
      'elevators | there are ups and downs.',
      'encyclopedias | outdated.',
      'Gucci | expensive.',
      'Kleenex | sometimes full of tears.',
    ],
    timing: '0.0',
    x: false,
    setup: 'Marriage is a lot like <TOPIC>:',
    id: 56097,
    categories: ',#things',
    type: '3',
  },
  {
    punchline: 'That\u2019s when you <BLANK>',
    decoys: [
      'penguin | overdress for every occasion.',
      'table | quietly hold things for everyone.',
      'podcast | talk and hope anyone is listening.',
      'soup | are a welcome part of the fall.',
      'cardigan sweater | are sensible and useful in most climates.',
    ],
    timing: '0.0',
    x: false,
    setup: 'Have you ever tried <TOPIC>-ing?',
    id: 56094,
    categories: ',#object',
    type: '4',
  },
  {
    punchline: 'because <BLANK>',
    decoys: [
      'fast food restaurant | most people just drive through.',
      'ball pit | it\u2019s filled with urine.',
      'circus | it\u2019s filled with clowns.',
      'campsite | it gets boring after a day.',
      'wax museum | everybody is fake.',
    ],
    timing: '0.0',
    x: false,
    setup: 'My hometown\u2019s nickname is the <TOPIC>',
    id: 56962,
    categories: ',#location',
    type: '5',
  },
  {
    punchline: 'because <BLANK>',
    decoys: [
      'welcome mat | people walk all over me.',
      'salami | I don\u2019t know what I\u2019m made of.',
      'novelty t-shirt | people laugh when they see me.',
      'lunch break | I usually arrive around noon.',
      'sunscreen | I block guys named Ray.',
    ],
    timing: '0.0',
    x: false,
    setup: 'My nickname is <TOPIC>',
    id: 56121,
    categories: ',#object',
    type: '1',
  },
  {
    punchline: '<BLANK>?',
    decoys: [
      'backpacks | burlap sacks',
      'breakups | ghosting someone',
      'Saturdays | casual Fridays',
      'books | thoughts',
      'marching bands | cover bands',
    ],
    timing: '0.0',
    x: false,
    setup: 'You ever notice how <TOPIC> are just a fancy version of',
    id: 56123,
    categories: ',#things',
    type: '2',
  },
  {
    punchline: '<BLANK>',
    decoys: [
      'cargo shorts | rubbing khakis and dads together.',
      'milk | hugging a cow.',
      'watermelon | filling a squash with juice.',
      'rainbows | throwing up after eating Skittles.',
      'hot air balloons | giving balloons a real job.',
    ],
    timing: '0.0',
    x: false,
    setup: 'God created <TOPIC> by',
    id: 56122,
    categories: ',#things',
    type: '2',
  },
  {
    punchline: '<BLANK>',
    decoys: [
      'vampires | Vampires suck less.',
      'robots | Robots have jobs.',
      'zombies | Zombies walk a lot.',
      'tornadoes | Tornadoes are less destructive.',
      'teachers | Teachers serve a real purpose.',
    ],
    timing: '0.0',
    x: false,
    setup: 'What\u2019s the difference between most people and <TOPIC>?',
    id: 56917,
    categories: ',#things',
    type: '2',
  },
  {
    punchline: '<BLANK>',
    decoys: [
      'Dracula | a British man and someone with even worse teeth.',
      'Pikachu | a squirrel and a lemon.',
      'Your mom | your grandma and grandpa.',
      'Gandalf | a hiker and a mop.',
      'The Joker | a clown and a clown that got caught in the rain.',
    ],
    timing: '4.0',
    x: false,
    setup: '<TOPIC> looks like a cross between',
    id: 55842,
    categories: ',#person',
    type: '2',
  },
  {
    punchline: '<BLANK>',
    decoys: [
      'dogs | just male cats.',
      'noodles | worms that gave up.',
      'pants | optional.',
      'wigs | hair hats.',
      'dragons | going to play a more important role in Game of Thrones.',
    ],
    timing: '3.0',
    x: false,
    setup: 'I\u2019m so dumb I thought <TOPIC> were',
    id: 55808,
    categories: ',things',
    type: '3',
  },
  {
    punchline: '<BLANK>',
    decoys: [
      'hot takes | a thief on fire.',
      'jean shorts | all of Florida combined.',
      'convertibles | a person who thinks rain is a myth.',
      'toasts | a marriage between pieces of cooked bread.',
      'cartoons | a good Saturday morning.',
    ],
    timing: '3.0',
    x: false,
    setup: 'I have more <TOPIC> than',
    id: 55980,
    categories: ',#things',
    type: '3',
  },
  {
    punchline: 'and not \u201c<BLANK>\u201d?',
    decoys: [
      'pacifists | pacihandshakes',
      'schools | oh man, what is that thing called again',
      'waffles | pancakes with an attitude',
      'dad bods | father figures',
      'baths | human soup',
    ],
    timing: '3.0',
    x: false,
    setup: 'Why are they called <TOPIC>...',
    id: 55844,
    categories: ',#things',
    type: '4',
  },
  {
    punchline: '<BLANK>',
    decoys: [
      'yogurt | To get cultured.',
      'picture frame |  It didn\u2019t.  It was framed.',
      'comic book | I\u2019d show you but it is too graphic.',
      'turkey | It wasn\u2019t chicken.',
      'pair of headphones | It was late to a hearing.',
    ],
    timing: '0.0',
    x: false,
    setup: 'Why did the <TOPIC> cross the road?',
    id: 56124,
    categories: ',#object',
    type: '4',
  },
  {
    punchline: 'because <BLANK>',
    decoys: [
      'dragons | I have halitosis.',
      'mermaids | I like collecting stuff...isn\u2019t it neat?',
      'clouds | I form into different ambiguous shapes.',
      'bees | I am disappearing.',
      'roses | I remember to stop and smell myself.',
    ],
    timing: '0.0',
    x: false,
    setup: 'My doctor said I have a bad case of the <TOPIC>',
    id: 56096,
    categories: ',#things',
    type: '5',
  },
  {
    punchline: 'because <BLANK>',
    decoys: [
      'barn | I\u2019m always counting sheep.',
      'silence | it\u2019s uncomfortable.',
      'shopping mall | it\u2019s very dated.',
      'zoo | I should be in a larger space.',
      'public pool | I shouldn\u2019t pee in there but I do.',
    ],
    timing: '0.0',
    x: false,
    setup: 'I call my bedroom the <TOPIC>',
    id: 56961,
    categories: ',#location',
    type: '5',
  },
];