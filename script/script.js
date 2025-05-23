let movies = [
  {
    name: "loki",
    des: "Loki is an American television series created by Michael Waldron for the streaming service Disney.",
    image: "./assets/images/slider 1.PNG",
  },
  {
    name: "falcon and the winter soldier",
    des: "Falcon and the Winter Soldier is an American television series created for the streaming platform Disney+.",
    image: "./assets/images/slider 2.PNG",
  },
  {
    name: "WandaVision",
    des: "WandaVision is an American television series created for the streaming service Disney+",
    image: "./assets/images/slider 3.PNG",
  },

  {
    name: "Raya and the Last Dragon",
    des: "Raya and the Last Dragon is an animated Disney film released in 2021.",
    image: "./assets/images/slider 4.PNG",
  },

  {
    name: "Luca",
    des: "Luca is a Disney-Pixar animated film released in 2021.",
    image: "./assets/images/slider 5.PNG",
  },
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // create DOM Elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all element
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// video cards

const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// cards sliders

let cardContainers = document.querySelectorAll(".card-container");
let preBtns = document.querySelectorAll(".pre-btn");
let nxtBtns = document.querySelectorAll(".nxt-btn");

// Function to scroll the card container to the left
function scrollLeft(container) {
  container.scrollLeft -= container.clientWidth;
}

// Function to scroll the card container to the right
function scrollRight(container) {
  container.scrollLeft += container.clientWidth;
}

// Attach click event listeners to previous and next buttons
preBtns.forEach((preBtn, index) => {
  preBtn.addEventListener("click", () => {
    scrollLeft(cardContainers[index]);
  });
});

nxtBtns.forEach((nxtBtn, index) => {
  nxtBtn.addEventListener("click", () => {
    scrollRight(cardContainers[index]);
  });
});
// Carousel/Slider Functionality
document.querySelectorAll('.movies-list').forEach(list => {
  const container = list.querySelector('.card-container');
  const preBtn = list.querySelector('.pre-btn');
  const nxtBtn = list.querySelector('.nxt-btn');
  if (container && preBtn && nxtBtn) {
    const scrollAmount = container.offsetWidth;
    nxtBtn.addEventListener('click', () => {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    preBtn.addEventListener('click', () => {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }
});

// Video Card Hover Play/Pause
document.querySelectorAll('.video-card').forEach(card => {
  const video = card.querySelector('.card-video');
  card.addEventListener('mouseenter', () => { video && video.play(); });
  card.addEventListener('mouseleave', () => { video && video.pause(); });
});

// Add to Watchlist Button
document.querySelectorAll('.watchlist-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Added!';
    btn.disabled = true;
  });
});

// Navbar Active State (Optional)
const page = location.pathname.split('/').pop().replace('.html', '');
document.querySelectorAll('.hotstar-sidebar a').forEach(link => {
  if (link.href.includes(page) || (page === 'index' && link.href.includes('index.html'))) {
    link.classList.add('active');
  }
});
// Sample data (replace/add with your real movie/show data)
const MOVIES = [
  {
    name: "Loki",
    img: "assets/images/poster 1.png",
    desc: "Loki challenges reality with time travel."
  },
  {
    name: "Mulan",
    img: "assets/images/poster 2.png",
    desc: "Mulan: Courage, Honor, Warrior's Journey."
  },
  {
    name: "The Falcon and the Winter Soldier",
    img: "assets/images/poster 3.png",
    desc: "Superheroes unite to battle villains."
  },
  {
    name: "Soul",
    img: "assets/images/poster 8.png",
    desc: "A jazz musician discovers the meaning of life."
  },
  {
    name: "Kabhi Khushi Kabhie Gham",
    img: "assets/images/images/6.jpg",
    desc: "A story of togetherness and family bonds."
  },
  // ...add more as needed
];

// Only run this code on search.html
if (window.location.pathname.includes('search.html')) {
  const form = document.querySelector('.search-form');
  const input = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');
  const noResults = document.getElementById('no-results');

  // Function to render results
  function renderResults(results) {
    resultsContainer.innerHTML = '';
    if (results.length === 0) {
      noResults.style.display = 'block';
      return;
    }
    noResults.style.display = 'none';
    results.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${movie.img}" alt="${movie.name}" class="card-img">
        <div class="card-body">
          <h2 class="name">${movie.name}</h2>
          <h6 class="des">${movie.desc}</h6>
          <button class="watchlist-btn">add to watchlist</button>
        </div>
      `;
      resultsContainer.appendChild(card);
    });
  }

  // Optional: Show all movies by default, or leave empty
  renderResults(MOVIES);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const query = input.value.trim().toLowerCase();
    if (!query) {
      renderResults(MOVIES); // Show all if query is empty
      return;
    }
    const filtered = MOVIES.filter(movie =>
      movie.name.toLowerCase().includes(query)
    );
    renderResults(filtered);
  });
}
