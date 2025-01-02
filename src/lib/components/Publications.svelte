<script lang="ts">
  let { publications, showList = true } = $props();

  const limitedPublications = publications.slice(0, 6);

  let selectedYear = 'All';
  let selectedType = 'All';

  function getFilteredPublications() {
    return publications.filter(pub => {
      const matchYear =
        selectedYear === 'All' || pub.year.toString() === selectedYear;
      const matchType =
        selectedType === 'All' || pub.type === selectedType;
      return matchYear && matchType;
    });
  }

  function getGroupedPublications() {
    const filtered = getFilteredPublications();
    let groupMap = {};

    filtered.forEach(pub => {
      const y = pub.year.toString(); // 统一转字符串，避免 key 混乱
      if (!groupMap[y]) {
        groupMap[y] = [];
      }
      groupMap[y].push(pub);
    });

    return groupMap;
  }

  function getSortedYearKeys() {
    const groups = getGroupedPublications();
    const keys = Object.keys(groups);
    keys.sort((a, b) => {
      // 把 'Preprint' 放在最前面，或者你想要的其他策略
      if (a === 'Preprint') return -1;
      if (b === 'Preprint') return 1;
      // 否则按数值从大到小排
      return parseInt(b) - parseInt(a);
    });

    return keys;
  }

  function getAllYears() {
    let years = new Set();
    publications.forEach(pub => {
      years.add(pub.year.toString());
    });

    let arr = Array.from(years);
    arr.sort((a, b) => {
      if (a === 'Preprint') return -1;
      if (b === 'Preprint') return 1;
      return parseInt(b) - parseInt(a);
    });

    return arr;
  }

  function getAllTypes() {
    let types = new Set();
    publications.forEach(pub => {
      types.add(pub.type);
    });
    return Array.from(types);
  }
</script>

<div class="my-4">

  {#if showList}
    <div class="relative flex">
      <div class="flex gap-4 mb-6 flex-wrap">
        <!-- 
        <div class="flex w-full max-w-6xl gap-4">
          <div class="flex-1 max-w-md gap-x-4	mt-1 mb-1.5 font-medium">
            Year
            <div class="relative w-full">
              <select
                class="
                  bg-gray-100 text-black hover:bg-[#A6192E] hover:text-white
                  rounded-md px-4 py-2 pr-8
                  cursor-pointer focus:outline-none
                  transition-colors duration-200
                  appearance-none
                  w-full   
                "
                bind:value={selectedYear}
              >
                <option value="All">All</option>
                {#each getAllYears() as y}
                  <option value={y}>{y}</option>
                {/each}
              </select>
              <div 
                class="
                  pointer-events-none absolute right-2 top-1/2 
                  transform -translate-y-1/2
                "
              >
                <svg
                  class="w-4 h-4 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.585l4.95-4.95 1.414 1.414L10 15.414l-6.364-6.364 1.414-1.414z"/>
                </svg>
              </div>
            </div>
          </div>
        
          <div class="flex-1 max-w-md gap-x-4	mt-1 mb-1.5 font-medium">
            Publication Type
            <div class="relative w-full">
              <select
                class="
                  bg-gray-100 text-black hover:bg-[#A6192E] hover:text-white
                  rounded-md px-4 py-2 pr-8
                  cursor-pointer focus:outline-none
                  transition-colors duration-200
                  appearance-none
                  w-full
                "
                bind:value={selectedType}
              >
                <option value="All">All</option>
                {#each getAllTypes() as t}
                  <option value={t}>{t}</option>
                {/each}
              </select>
              <div 
                class="
                  pointer-events-none absolute right-2 top-1/2 
                  transform -translate-y-1/2
                "
              >
                <svg
                  class="w-4 h-4 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.585l4.95-4.95 1.414 1.414L10 15.414l-6.364-6.364 1.414-1.414z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        -->
    
        
        
        {#each getSortedYearKeys() as year}
        <div id={"year-" + year} class="mb-2">
          <div class="font-bold">{year}</div>

          {#each getGroupedPublications()[year] as pub}
            <article style="margin: 0.5rem 0;">
              <h3>{pub.title}</h3>
              <p><em>{pub.type}</em> | {pub.venue}</p>
              <p>{pub.authors}</p>
            </article>
          {/each}
          </div>
      {/each}
      </div>
  
  <!-- 
  <aside class="hidden md:block ml-auto text-right">
    <nav class="fixed mt-20 flex flex-col gap-2">
      {#each getSortedYearKeys() as y}
        <a
          class="text-gray-500 hover:text-black transition-colors duration-150"
          href={"#year-" + y}
        >
          {y}
        </a>
      {/each}
    </nav>
  </aside>
  -->
</div>

    

    



  {:else}
    <div class="font-semibold mb-1.5 hidden">Publications</div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {#each limitedPublications as publication}
        <div
          class="relative flex flex-col justify-center rounded-lg group cursor-pointer"
        >
          <img
            src={publication?.image ?? "/assets/images/user.png"}
            alt={publication.title}
            class="rounded-lg w-full aspect-square object-cover"
          />

          <div
            class="absolute rounded-lg top-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent text-white text-xs font-medium bottom-0 p-1"
          ></div>

          <div class=" absolute z-20 bottom-0 text-white p-5">
            <div class="text-sm text-gray-100 font-medium">
              {publication.venue}
            </div>
            <div
              class=" mt-1 mb-1.5 group-hover:underline font-medium cursor-pointer"
            >
              <a href={publication.url} target="_blank" rel="noopener noreferrer">
                {publication.title}
              </a>
            </div>
            <div class="text-sm text-gray-400 line-clamp-2">
              {publication.authors}
            </div>

            <div class="flex gap-1.5 mt-1">
              {#each publication.links as link}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-gray-100 hover:underline"
                >
                  {link.title}
                </a>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
