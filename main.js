let ideas = [{
    title: 'Tubing',
    description: 'Get on a tube and float down the river!',
    cost: '$$',
    place: [
      'outdoor'
    ],
    season: [
      'spring',
      'summer'
    ]
  },
  {
    title: 'Biking and a Picnic',
    description: 'Go on a bike ride and have a picnic',
    cost: '$',
    place: [
      'outdoor'
    ],
    season: [
      'summer'
    ]
  },
  {
    title: 'Coloring',
    description: 'Grab some crayons and some snackage and find a fun spot to color',
    cost: '$',
    place: [
      'outdoor',
      'indoor'
    ],
    season: [
      'winter'
    ]
  },
  {
    title: 'Geocaching',
    description: 'Download a free Geocaching app on your phones and explore your town',
    cost: '$',
    place: 'outdoor',
    season: [
      'spring'
    ]
  }, {
    title: 'Fishing',
    description: 'Catch some fishes.',
    cost: '$$',
    place: 'outdoor',
    season: [
      'summer'
    ]
  }
];

// Navigation

function changePage(target) {
  // target.style.visibility = ;
}

let navItems = document.querySelectorAll('.nav');
console.log(navItems);

for (let navItem of navItems) {
  navItem.addEventListener('click', changePage);
}


ideas.map(idea => {
  let season = idea.season;
  console.log(season);
  let dateIdea = `
  <div class="idea">
    <img class="idea-photo" src="./images/${season[0]}.png">
    <div class="idea-information">
    <div class="idea-title"><strong>Title: </strong>${idea.title}</div>
    <div class="idea-cost"> <strong>Cost: </strong> ${idea.cost} </div>
    <div class="idea-description"><strong>Description: </strong>${idea.description}</div>
    </div>
  
  </div>
  `
  document.getElementById('ideasPlace').innerHTML += dateIdea;
});

document.querySelector('.fa-search').addEventListener('click', search());
document.querySelector('.topnav input[type=text]').innerHTML = 'Stuff';

function search() {
  let things = document.querySelector('.topnav input[type=text]').innerHTML;
  console.log(things);
}