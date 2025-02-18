<script>
  import Button from './Button.svelte';

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let { news, showAll = true  } = $props();

  const limitedNews = news.slice(0, 3);

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
  
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {#each showAll ? news : limitedNews as item}
      <div
        class="relative flex flex-col justify-center rounded-lg group cursor-pointer"
      >
        <img
          src={item?.image ?? "/assets/images/news.png"}
          alt={item.title}
          class="rounded-lg w-full aspect-square object-cover"
        />

        <div
          class="absolute rounded-lg top-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent text-white text-xs font-medium bottom-0 p-1"
        ></div>

        <div class=" absolute z-20 bottom-0 text-white p-5">
          <div
            class=" mt-1 mb-1.5 group-hover:underline font-medium cursor-pointer line-clamp-2"
          >
          <a
            href={item.url ? item.url : ""}
            onclick={(event) => {
              if (!item.url) {
                event.preventDefault(); 
                dispatch('selectNews', item); 
              }
            }}
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
              href={item.url ? item.url : ""}
              onclick={(event) => {
                if (!item.url) {
                  event.preventDefault(); 
                  dispatch('selectNews', item); 
                }
              }}
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
