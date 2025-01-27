<script>
  import Button from './Button.svelte';

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let { news, showAll = true  } = $props();

  const limitedNews = news.slice(0, 3);

</script>

<div class="my-4">
  <div class="font-semibold mb-1.5 hidden">Latest News</div>

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

  <!--
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
    {#each limitedNews as item}
      <div
        class="bg-gray-50 aspect-square relative flex flex-col rounded-lg group cursor-pointer hover:shadow-md transition-shadow "
      >

        <div class="z-20 p-5">
          <div class="mt-1 mb-1.5 font-medium">
            {item.title}
          </div>
          <div class="text-sm py-2 text-gray-600 cursor-pointer">
            {item.date}
          </div>
          <div class="text-sm text-gray-700 line-clamp-5">
            {item.description}
          </div>
          <div class="absolute bottom-4 right-4">
            {#if item?.article}
              <Button href={item.url} size="sm" ariaLabel="Read More  →" />
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
  -->
</div>
