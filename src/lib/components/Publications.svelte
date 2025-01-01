<script lang="ts">
  let { publications } = $props();

  const limitedPublications = publications.slice(0, 2);

</script>

<div class="my-4">
  <div class="font-semibold mb-1.5 hidden">Publications</div>

  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {#each publications as publication}
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
</div>
