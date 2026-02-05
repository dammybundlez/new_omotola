    
    
    const cursor = document.getElementById("cursor-spotlight");
    const outer = cursor.querySelector('.outer');
    const inner = cursor.querySelector('.inner');
    const cursorSize = outer.offsetWidth; // 25px

    let mouseX = 0, mouseY = 0;
    let outerX = 0, outerY = 0;
    let innerX = 0, innerY = 0;

    const outerSpeed = 0.2; // outer ring speed
    const innerSpeed = 0.15; // inner dot slower speed

    document.addEventListener("mousemove", e => {
      mouseX = e.clientX - cursorSize / 2;
      mouseY = e.clientY - cursorSize / 2;
    });

    function animateCursor() {
      // Outer ring follows mouse quickly
      outerX += (mouseX - outerX) * outerSpeed;
      outerY += (mouseY - outerY) * outerSpeed;
      outer.style.transform = `translate3d(${outerX}px, ${outerY}px, 0)`;

      // Inner dot follows outer slowly
      innerX += (outerX - innerX) * innerSpeed;
      innerY += (outerY - innerY) * innerSpeed;
      inner.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    });
 
    const items = document.querySelectorAll(".press-item");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-16",
              "scale-95"
            );
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "scale-100"
            );
          }
        });
      },
      { threshold: 0.25 }
    );

    items.forEach(item => observer.observe(item));

    const slides = document.querySelectorAll('.hero-slide');
    const pagination = document.getElementById('hero-pagination');
    const nextBtn = document.getElementById('nextSlide');
    const prevBtn = document.getElementById('prevSlide');

    let index = 0;
    let autoplay;

    // Create pagination dots (1 per slide)
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'hero-dot';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      pagination.appendChild(dot);
    });

    const dots = document.querySelectorAll('.hero-dot');

    function showSlide(i) {
      slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === i);

        const video = slide.querySelector('video');
        if (video) {
          idx === i ? video.play() : video.pause();
        }
      });

      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === i);
      });

      index = i;
    }

    function nextSlide() {
      showSlide((index + 1) % slides.length);
    }

    function prevSlide() {
      showSlide((index - 1 + slides.length) % slides.length);
    }

    function goToSlide(i) {
      showSlide(i);
      resetAutoplay();
    }

    function resetAutoplay() {
      clearInterval(autoplay);
      autoplay = setInterval(nextSlide, 5000);
    }

    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoplay();
    });

    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoplay();
    });

    // Init
    showSlide(0);
    autoplay = setInterval(nextSlide, 5000);

const cards = [
  {
    name: "A Mother's Love",
    image: "public/herobg.webp",
    keywords: ["Mother", "Love", "omotola"]
  },
  {
    name: "Road Rogue",
    image: "public/road rogue.webp",
    keywords: ["road", "rogue" , "action"]
  },
  
  
  // {
  //   name: "When Love Dies",
  //   image: "public/whenlovedies.jpg",
  //   keywords: ["shadow", "action" , "omotola"]
  // },
  // {
  //   name: "Last Celebrity",
  //   image: "public/notfound.jpg",
  //   keywords: ["shadow", "action" , "omotola"]
  // },
  // {
  //   name: "In Totality",
  //   image: "public/notfound.jpg",
  //   keywords: ["shadow", "action" , "omotola"]
  // },
  // {
  //   name: "My Last Ambition",
  //   image: "public/lastambition.jpg",
  //   keywords: ["shadow", "action" , "omotola"]
  // },
  // {
  //   name: "Iva",
  //   image: "public/iva.jpg",
  //   keywords: ["shadow", "action" , "omotola"]
  // },
  // {
  //   name: "Yankee Girls",
  //   image: "public/yankeegirls.jpg",
  //   keywords: ["shadow", "action" , "omotola"]
  // },
  // {
  //   name: "Kosorogun",
  //   image: "public/notfound.jpg",
  //   keywords: ["shadow", "action" , "omotola"]
  // },
  // {
  //   name: "Left Alone",
  //   image: "public/leftalone.jpg",
  //   keywords: ["shadow", "action" , "omotola"]
  // },
  // {
  //   name: "Blindfold",
  //   image: "public/blindfold.jpg",
  //   keywords: ["shadow", "action" , "omotola"]
  // },
  // {
  //   name: "Market Sellers",
  //   image: "public/marketseller.jpg",
  //   keywords: ["shadow", "action" , "omotola"]
  // },
  // {
  //   name: "Under Fire",
  //   image: "public/notfound.jpg",
  //   keywords: ["shadow", "action" , "omotola"]
  // },
  // {
  //   name: "Master Stroke",
  //   image: "public/notfound.jpg",
  //   keywords: ["shadow", "action" , "omotola"]
  // },
  // {
  //   name: "Kings Battle",
  //   image: "public/kingbattle.jpg",
  //   keywords: ["shadow", "action" , "omotola"]
  // },
  // {
  //   name: "Tomorrow Must Wait",
  //   image: "public/notfound.jpg",
  //   keywords: ["shadow", "action" , "omotola"]
  // },
  // {
  //   name: "No One But You",
  //   image: "public/notfound.jpg",
  //   keywords: ["drama", "film" , "omotola"]
  // },{
  //   name: "A Private Storm",
  //   image: "public/privatestorm.webp",
  //   keywords: ["hollywood", "romance" , "omotola"]
  // },
  // {
  //   name: "Shackles and The Rugged Cross",
  //   image: "public/notfound.jpg",
  //   keywords: ["fight", "nollywood" , "omotola"]
  // },
  // {
  //   name: "Jealousy",
  //   image: "public/notfound.jpg",
  //   keywords: ["shadow", "drama" , "omotola"]
  // },
  // {
  //   name: "Brave Heart",
  //   image: "public/notfound.jpg",
  //   keywords: ["brave", "heart" , "omotola"]
  // },
  // {
  //   name: "Nollywood Babylon",
  //   image: "public/nollyhoodbabylon.jpg",
  //   keywords: ["Nollywood", "action" , "omotola"]
  // },
  // {
  //   name: "Working in Love",
  //   image: "public/workinginlove.jpg",
  //   keywords: ["War", "action" , "omotola"]
  // },
  // {
  //   name: "Out of Love",
  //   image: "public/outoflove.jpg",
  //   keywords: ["waters", "sad" , "omotola"]
  // },
  // {
  //   name: "Lookdown",
  //   image: "public/lockdown.jpg",
  //   keywords: ["lockdown", "action" , "omotola"]
  // },
  // {
  //   name: "Lost kingdom",
  //   image: "public/notfound.jpg",
  //   keywords: ["kingdom", "drama" , "omotola"]
  // },
  // {
  //   name: "Total War",
  //   image: "public/notfound.jpg",
  //   keywords: ["War", "drama" , "omotola"]
  // },
  // {
  //   name: "Somewhere Else",
  //   image: "public/somewhere.jpg",
  //   keywords: ["Place", "drama" , "omotola"]
  // },
  // {
  //   name: "Blood In The Lagoon",
  //   image: "public/bloodinthelagoon.jpg",
  //   keywords: ["blood", "water" , "omotola"]
  // },
  // {
  //   name: "Mind Game",
  //   image: "public/mindgame.jpg",
  //   keywords: ["blood", "water" , "omotola"]
  // }

];

const input = document.getElementById("searchInput");
const grid = document.getElementById("cardGrid");

function filterCards(query) {
  const q = query.toLowerCase();

  return cards.filter(card =>
    card.name.toLowerCase().includes(q) ||
    card.keywords.some(k => k.toLowerCase().includes(q))
  );
}

function renderCards(list, query = "") {
  grid.innerHTML = "";

  if (query && list.length === 0) {
    grid.innerHTML = `
      <li class="col-span-full text-center md:text-xl text-base py-16 text-zinc-400 font-geist uppercase tracking-wide list-none">
        No result for "${query}"
      </li>
    `;
    return;
  }

  list.forEach(card => {
    const li = document.createElement("li");
    li.className = "transition overflow-hidden";

    li.innerHTML = `
      <figure
  class="group relative flex flex-col gap-4 overflow-hidden
         transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
>
  <!-- Image Wrapper -->
  <div class="relative overflow-hidden rounded-xl">
    <!-- Image -->
    <img
      src="${card.image}"
      alt="${card.name}"
      class="w-full aspect-[201/256] object-cover
             transition-transform duration-[1200ms]
             group-hover:scale-105"
    />

    <!-- Cinematic Overlay -->
    <div
      class="pointer-events-none absolute inset-0
             bg-gradient-to-t from-black/80 via-black/30 to-transparent
             opacity-80"
    ></div>

    <!-- Film Grain (optional but 🔥) -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.08]
             mix-blend-overlay
             bg-[url('/grain.png')]"
    ></div>
  </div>

  <!-- Caption -->
  <figcaption
    class="relative z-10 text-base font-medium text-white font-geist uppercase leading-5
           tracking-wide transition-all duration-500
           group-hover:text-amber-400"
  >
    ${card.name}
  </figcaption>

  <!-- Subtle Accent Line -->
  <span
    class="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400
           transition-all duration-700
           group-hover:w-full"
  ></span>
</figure>

    `;

    grid.appendChild(li);
  });
}

input.addEventListener("input", e => {
  const query = e.target.value.trim();

  if (!query) {
    renderCards(cards);
    return;
  }

  const results = filterCards(query);
  renderCards(results, query);
});

renderCards(cards);


    const quotes = [
      {
        text: `“I don’t want to be remembered as famous —
        <span class="text-amber-400">I want to be remembered as impactful.</span>”`,
        author: "Omotola Jalade-Ekeinde",
      },
      {
        text: `“Storytelling is power.
        <span class="text-amber-400">When used well, it changes culture.</span>”`,
        author: "Omotola Jalade-Ekeinde",
      },
      {
        text: `“Africa does not need permission to be seen —
        <span class="text-amber-400">we need platforms.</span>”`,
        author: "Omotola Jalade-Ekeinde",
      },
      {
        text: `“Legacy is not built on applause,
        <span class="text-amber-400">but on contribution.</span>”`,
        author: "Omotola Jalade-Ekeinde",
      }
    ];

    const quoteText = document.getElementById("quoteText");
    const quoteAuthor = document.getElementById("quoteAuthor");


    setInterval(() => {
      // Animate out
      quoteText.classList.add("opacity-0", "translate-y-6");
      quoteAuthor.classList.add("opacity-0");

      setTimeout(() => {
        index = (index + 1) % quotes.length;

        quoteText.innerHTML = quotes[index].text;
        quoteAuthor.textContent = quotes[index].author;

        // Animate in
        quoteText.classList.remove("opacity-0", "translate-y-6");
        quoteAuthor.classList.remove("opacity-0");
      }, 600);

    }, 4000);

    document.querySelectorAll(".scroll-section").forEach(section => {
      const container = section.querySelector(".scroll-container");
      const leftBtn = section.querySelector(".scroll-left");
      const rightBtn = section.querySelector(".scroll-right");

      if (container && leftBtn && rightBtn) {
        leftBtn.addEventListener("click", () => {
          container.scrollBy({ left: -350, behavior: "smooth" });
        });

        rightBtn.addEventListener("click", () => {
          container.scrollBy({ left: 350, behavior: "smooth" });
        });
      }
    });

    // Scroll Animation System
    const scrollAnimationObserverOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const scrollAnimationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          scrollAnimationObserver.unobserve(entry.target);
        }
      });
    }, scrollAnimationObserverOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      scrollAnimationObserver.observe(el);
    });


    
    