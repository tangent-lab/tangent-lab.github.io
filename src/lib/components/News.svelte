<script>
  import Button from './Button.svelte';

  let { news } = $props();

  const limitedNews = news.slice(0, 4);

</script>

<div class="my-4">
  <div class="font-semibold mb-1.5 hidden">Latest News</div>

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
</div>
