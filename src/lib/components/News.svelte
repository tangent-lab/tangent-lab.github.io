<script>
  import Button from './Button.svelte';
  import LazyImage from './LazyImage.svelte';

  let { news, showAll = true  } = $props();

  const limitedNews = news.slice(0, 3);

  function getFilteredNews() {
    return showAll ? news : limitedNews;
  }

/** @param {any} item */
  function getYear(item) {
    const dateStr = item?.date || '';
    const parts = dateStr.split(',');
    return (parts[1] || 'Unknown').trim();
  }

  function getGroupedNews() {
    const filtered = getFilteredNews();
    /** @type {Record<string, any[]>} */
    let groupMap = {};

    filtered.forEach(/** @param {any} item */ (item) => {
      const y = getYear(item) || 'Unknown';
      if (!groupMap[y]) {
        groupMap[y] = [];
      }
      groupMap[y].push(item);
    });

    return groupMap;
  }

  function getSortedYearKeys() {
    const groups = getGroupedNews();
    const keys = Object.keys(groups);
    keys.sort((a, b) => {
      if (a === 'Unknown') return 1;
      if (b === 'Unknown') return -1;
      return parseInt(b) - parseInt(a);
    });

    return keys;
  }
</script> 

<div class="my-4">
  <!--
  <div class="flex justify-between items-center mb-12">
    <div class="flex items-center">
      <div>
        <span class="font-secondary text-xl font-bold text-gray-800">Lastest News</span>
        <p class="text-sm text-gray-800">
          Stay updated with the latest achievements and milestones from Tangent Lab
        </p>
      </div>
    </div>
  </div>
-->
  
  {#each getSortedYearKeys() as year}
    <div id={"year-" + year} class="mb-8">
      <div class="font-secondary font-bold text-2xl mb-6">{year}</div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {#each getGroupedNews()[year] as item}
          <div
            class="relative flex flex-col justify-center rounded-lg group cursor-pointer"
            role="button"
            tabindex="0"
            onclick={/** @param {MouseEvent} e */ (e) => {
              const target = /** @type {HTMLElement} */ (e.target);
              if (target && target.closest && target.closest('a')) return;
              if (item.url) {
                // external link - open in new tab
                window.open(item.url, '_blank', 'noopener');
                return;
              }
              location.hash = `#newsDetail/${item.slug}`;
              window.scrollTo(0, 0);
            }}
            onkeydown={/** @param {KeyboardEvent} e */ (e) => {
              if (e.key === 'Enter') {
                const target = /** @type {HTMLElement} */ (e.target);
                if (target && target.closest && target.closest('a')) return;
                if (item.url) {
                  window.open(item.url, '_blank', 'noopener');
                  return;
                }
                location.hash = `#newsDetail/${item.slug}`;
                window.scrollTo(0, 0);
              }
            }}
          >
            <LazyImage
              src={item?.image ?? "/assets/images/news.png"}
              alt={item.title}
              className="rounded-lg w-full aspect-square object-cover"
            />

            <div
              class="absolute rounded-lg top-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent text-white text-xs font-medium bottom-0 p-1"
            ></div>

            <div class=" absolute z-20 bottom-0 text-white p-5">
              <div
                class=" mt-1 mb-1.5 group-hover:underline font-medium cursor-pointer line-clamp-2"
              >
              <a
                href={item.url ? item.url : `#newsDetail/${item.slug}`}
                target={item.url ? "_blank" : "_self"}
                rel={item.url ? "noopener noreferrer" : ""}
              >
              {item.title}
            </a> 
              </div>
              <div class="text-sm text-gray-400 line-clamp-4">
                {item.description}
              </div>
              <div class="flex justify-between mt-1.5 mb-1 text-sm text-gray-100">
                {item.date}
                <a
                  href={item.url ? item.url : `#newsDetail/${item.slug}`}
                  target={item.url ? "_blank" : "_self"}
                  rel={item.url ? "noopener noreferrer" : ""}
                  class="text-sm font-medium text-gray-100 hover:underline"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}

</div>
