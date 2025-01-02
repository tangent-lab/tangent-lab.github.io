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

  let currentPage = "home"; 

  currentPage = location.hash.replace("#", "") || "home";

  window.addEventListener("hashchange", () => {
    currentPage = location.hash.replace("#", "") || "home";
  });

  const navigate = (page) => {
    currentPage = page;
    history.pushState(null, "", `#${page}`);
    window.scrollTo(0, 0);
  };
</script>


<nav class="bg-transparent fixed top-0 left-0 w-full z-50">
  <div class="bg-white bg-opacity-90 flex justify-between items-center max-w-6xl mx-auto px-6 py-4 rounded-lg shadow-md">

    <div class="flex items-center">
      <img src="/favicon.png" alt="Lab Logo" class="h-10 w-auto mr-4" />
      <span class="text-xl font-bold text-gray-800">Tangent Lab</span>
    </div>

    <div class="flex space-x-4">
      <a
        href="#home"
        on:click={(e) => { e.preventDefault(); navigate("home"); }}
        class={`px-4 py-2 font-medium hover:bg-[#A6192E] hover:text-white transition-colors rounded-md
          ${currentPage === "home" ? "bg-gray-50 bg-opacity-80" : ""}`}
      >
        Home
      </a>
      <a
        href="#people"
        on:click={(e) => { e.preventDefault(); navigate("people"); }}
        class={`px-4 py-2 font-medium hover:bg-[#A6192E] hover:text-white transition-colors rounded-md
          ${currentPage === "people" ? "bg-gray-50 bg-opacity-80" : ""}`}
      >
        People
      </a>
      <a
        href="#news"
        on:click={(e) => { e.preventDefault(); navigate("news"); }}
        class={`px-4 py-2 font-medium hover:bg-[#A6192E] hover:text-white transition-colors rounded-md
          ${currentPage === "news" ? "bg-gray-50 bg-opacity-80" : ""}`}
      >
        News
      </a>
      <a
        href="#publications"
        on:click={(e) => { e.preventDefault(); navigate("publications"); }}
        class={`px-4 py-2 font-medium hover:bg-[#A6192E] hover:text-white transition-colors rounded-md
          ${currentPage === "publications" ? "bg-gray-50 bg-opacity-80" : ""}`}
      >
        Publications
      </a>
  </div>
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
        <div class="flex items-center">
          <img src="/favicon.png" alt="Lab Logo" class="h-10 w-auto mr-4" />
          <div>
            <span class="text-xl font-bold text-gray-800">Latest News</span>
            <p class="text-sm text-gray-800">
              Discover our latest updates and milestones
            </p>
          </div>
        </div>
        <Button on:click={() => navigate("news")}  size="lg" ariaLabel="View All  →" />
      </div>
      <News {news}/>        

      <div class="flex justify-between items-center  mt-16">
        <div class="flex items-center">
          <img src="/favicon.png" alt="Lab Logo" class="h-10 w-auto mr-4" />
          <div>
            <span class="text-xl font-bold text-gray-800">Publications</span>
            <p class="text-sm text-gray-800">
            Explore Tangent Lab's cutting-edge research
            </p>
          </div>
        </div>
        <Button on:click={() => navigate("publications")}  size="lg" ariaLabel="View All  →" />
      </div>
      <Publications {publications}/>

      <div class="flex justify-between items-center  mt-16">
        <div class="flex items-center">
          <img src="/favicon.png" alt="Lab Logo" class="h-10 w-auto mr-4" />
          <div>
            <span class="text-xl font-bold text-gray-800">People</span>
            <p class="text-sm text-gray-800">
            Meet the minds shaping Tangent Lab's innovations
            </p>
          </div>
        </div>
        <Button on:click={() => navigate("people")}  size="lg" ariaLabel="View All  →" />
      </div>
      <People {people}  showAlumni={false} />        

      <div class="flex justify-between items-center  mt-16">
        <div class="flex items-center">
          <img src="/favicon.png" alt="Lab Logo" class="h-10 w-auto mr-4" />
          <div>
            <span class="text-xl font-bold text-gray-800">Contact Us</span>
            <p class="text-sm text-gray-800">
            Connect with Tangent Lab – Let’s create together
            </p>
          </div>
        </div>
      </div>
      <Contact />

      <Footer />
    {/if}

    {#if currentPage === "people"}
      <div class="flex justify-between items-center my-6">
        <div class="flex items-center">
          <img src="/favicon.png" alt="Lab Logo" class="h-10 w-auto mr-4" />
          <div>
            <span class="text-xl font-bold text-gray-800">Current Members</span>
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
      <News {news}/>        
      <Footer />
    {/if}

    {#if currentPage === "publications"}
      <Publications {publications}/>
      <Footer />
    {/if}
    
  </div>
</main>


