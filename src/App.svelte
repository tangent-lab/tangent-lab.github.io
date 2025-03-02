<script lang="ts">
  import Contact from "$lib/components/Contact.svelte";
  import About from "$lib/components/About.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import People from "./lib/components/People.svelte";
  import Publications from "./lib/components/Publications.svelte";
  import News from "./lib/components/News.svelte";
  import { people } from './data/people.js';
  import { publications } from './data/publications.js';
  import { news } from './data/news.js';
  import Button from "./lib/components/Button.svelte";
  import PublicationDetail from './lib/components/PublicationDetail.svelte';
  import NewsDetail from './lib/components/NewsDetail.svelte';

  let currentPage = "home"; 
  let isMenuOpen = false;
  let selectedPublication = null;
  let selectedNews = null;

  currentPage = location.hash.replace("#", "") || "home";

  window.addEventListener("hashchange", () => {
    currentPage = location.hash.replace("#", "") || "home";
  });

  const navigate = (page, news = null, publication = null) => {
    selectedPublication = publication;
    selectedNews = news;
    currentPage = page;
    isMenuOpen = false; 
    history.pushState(null, "", `#${page}`);
    window.scrollTo(0, 0);
  };
</script>


<nav class="bg-transparent fixed top-0 left-0 w-full z-50">
  <div class="
    bg-white bg-opacity-90
    max-w-6xl mx-auto
    px-6 py-4
    rounded-lg shadow-md
    flex items-center justify-between
  ">

    <div class="flex items-center">
      <img src="/favicon.png" alt="Lab Logo" class="h-10 w-auto mr-4" />
      <span class="text-xl font-bold text-gray-800">Tangent Lab</span>
    </div>

    <button
      class="md:hidden inline-flex items-center justify-center p-2
      text-gray-600 hover:text-black
      focus:outline-none transition-colors"
      on:click={() => (isMenuOpen = !isMenuOpen)}
    >
      <svg
        class="h-6 w-6"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <div class="hidden md:flex space-x-4">
      <a
        href="#home"
        on:click={(e) => { e.preventDefault(); navigate("home"); }}
        class={`px-4 py-2 font-medium hover:bg-[#A6192E] hover:text-white
                transition-colors rounded-md
                ${currentPage === "home" ? "bg-gray-50 bg-opacity-80" : ""}`}
      >
        Home
      </a>
      <a
        href="#news"
        on:click={(e) => { e.preventDefault(); navigate("news"); }}
        class={`px-4 py-2 font-medium hover:bg-[#A6192E] hover:text-white
                transition-colors rounded-md
                ${currentPage === "news" ? "bg-gray-50 bg-opacity-80" : ""}`}
      >
        News
      </a>
      <a
        href="#publications"
        on:click={(e) => { e.preventDefault(); navigate("publications"); }}
        class={`px-4 py-2 font-medium hover:bg-[#A6192E] hover:text-white
                transition-colors rounded-md
                ${currentPage === "publications" ? "bg-gray-50 bg-opacity-80" : ""}`}
      >
        Publications
      </a>
      <a
        href="#people"
        on:click={(e) => { e.preventDefault(); navigate("people"); }}
        class={`px-4 py-2 font-medium hover:bg-[#A6192E] hover:text-white
                transition-colors rounded-md
                ${currentPage === "people" ? "bg-gray-50 bg-opacity-80" : ""}`}
      >
        People
      </a>
      <a
        href="#contact"
        on:click={(e) => { e.preventDefault(); navigate("contact"); }}
        class={`px-4 py-2 font-medium hover:bg-[#A6192E] hover:text-white
                transition-colors rounded-md
                ${currentPage === "contact" ? "bg-gray-50 bg-opacity-80" : ""}`}
      >
      Contact & Apply
      </a>
    </div>
  </div>

  {#if isMenuOpen}
    <div class="bg-white bg-opacity-90 shadow-md md:hidden">
      <div class="flex flex-col space-y-2 px-6 py-4">
        <a
          href="#home"
          on:click={(e) => { e.preventDefault(); navigate("home"); }}
          class={`block px-4 py-2 font-medium hover:bg-[#A6192E] hover:text-white
                  transition-colors rounded-md
                  ${currentPage === "home" ? "bg-gray-50 bg-opacity-80" : ""}`}
        >
          Home
        </a>
        <a
          href="#news"
          on:click={(e) => { e.preventDefault(); navigate("news"); }}
          class={`block px-4 py-2 font-medium hover:bg-[#A6192E] hover:text-white
                  transition-colors rounded-md
                  ${currentPage === "news" ? "bg-gray-50 bg-opacity-80" : ""}`}
        >
          News
        </a>
        <a
          href="#publications"
          on:click={(e) => { e.preventDefault(); navigate("publications"); }}
          class={`block px-4 py-2 font-medium hover:bg-[#A6192E] hover:text-white
                  transition-colors rounded-md
                  ${currentPage === "publications" ? "bg-gray-50 bg-opacity-80" : ""}`}
        >
          Publications
        </a>
        <a
          href="#people"
          on:click={(e) => { e.preventDefault(); navigate("people"); }}
          class={`block px-4 py-2 font-medium hover:bg-[#A6192E] hover:text-white
                  transition-colors rounded-md
                  ${currentPage === "people" ? "bg-gray-50 bg-opacity-80" : ""}`}
        >
          People
        </a><a
        href="#contact"
        on:click={(e) => { e.preventDefault(); navigate("contact"); }}
        class={`px-4 py-2 font-medium hover:bg-[#A6192E] hover:text-white
                transition-colors rounded-md
                ${currentPage === "contact" ? "bg-gray-50 bg-opacity-80" : ""}`}
      >
      Contact & Apply
      </a>
      </div>
    </div>
  {/if}
</nav>

<main class="min-h-screen w-screen bg-white flex justify-center">
  <div class="w-full max-w-6xl py-6 p-3 mt-16">

    {#if currentPage === "home"}
      <div class="relative">
        <img
          src="/assets/images/sfu.webp"
          alt="Tangent Lab"
          class="rounded-lg h-96 w-full bg-inherit object-cover"
        />

        <div
          class="absolute rounded-lg top-0 left-0 w-full h-full bg-gradient-to-tl from-10% to-45% from-gray-50/95 to-transparent text-white text-xs font-medium bottom-0 p-1"
        ></div>

        <div class=" absolute bottom-0 right-5 flex items-center gap-2 mt-3 mb-4">
          <div class="text-2xl font-semibold text-gray-700">Tangent Lab</div>

          <div>
            <img src="/favicon.png" alt="Tangent Lab" class="size-8" />
          </div>
        </div>
      </div>
      
      <About />

      <div class="flex justify-between items-center mt-16">
        <span class="text-2xl font-semibold text-gray-800">Latest News</span>
        <Button on:click={() => navigate("news")}  size="lg" ariaLabel="View All  →" />
      </div>
      <News {news}  showAll={false} on:selectNews={(e) => navigate("newsDetail", e.detail, null)}  />        

      <div class="flex justify-between items-center  mt-16">
        <span class="text-2xl font-semibold text-gray-800">Selected Projects</span>
        <Button on:click={() => navigate("publications")}  size="lg" ariaLabel="View All  →" />
      </div>
      <Publications {publications} showList={false} on:selectPublication={(e) => navigate("publicationDetail", null, e.detail)} />

      <div class="flex justify-between items-center  mt-16">
          <span class="text-2xl font-semibold text-gray-800">People</span>
        <Button on:click={() => navigate("people")}  size="lg" ariaLabel="View All  →" />
      </div>
      <People {people}  showAlumni={false} />        

      <div class="flex justify-between items-center  mt-16">
        <span class="text-2xl font-semibold text-gray-800">Contact Us</span>
        <Button on:click={() => navigate("contact")}  size="lg" ariaLabel="View More  →" />
      </div>
      <Contact   showAll={false} />

      <Footer />
    {/if}

    {#if currentPage === "people"}
      <div class="flex justify-between items-center my-6">
        <div class="flex items-center">
          <div>
            <span class="font-secondary text-xl font-bold text-gray-800">Current Members</span>
            <p class="text-sm text-gray-800">
              Meet the brilliant minds driving Tangent Lab's groundbreaking projects
            </p>
          </div>
        </div>
      </div>
      <People {people}/>
      <Footer />
    {/if}

    {#if currentPage === "news"}
      <News {news} on:selectNews={(e) => navigate("newsDetail", e.detail, null)}  />          
      <Footer />
    {/if}

    {#if currentPage === "publications"}
      <Publications {publications} on:selectPublication={(e) => navigate("publicationDetail", null, e.detail)} />
      <Footer />
    {/if}

    {#if currentPage === "contact"}
      <Contact  />
      <Footer />
    {/if}
    
    {#if currentPage === "publicationDetail"}
      <PublicationDetail publication={selectedPublication} />
      <Footer />
    {/if}

    {#if currentPage === "newsDetail"}
      <NewsDetail news={selectedNews} />
      <Footer />
    {/if}
    
  </div>
</main>


