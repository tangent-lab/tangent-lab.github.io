<script lang="ts">
  let { people, showAlumni = true } = $props();

  const currentStudents = people.filter(person => !person.alumni);
  const alumniStudents = people.filter(person => person.alumni);
</script>

{#snippet personBlock(person)}
  <div class="relative flex flex-col justify-center rounded-lg">
    <img
      src={person.image ?? "/assets/images/user.png"}
      alt={person.name}
      class="rounded-lg w-full aspect-square object-cover"
    />

    <div
      class="absolute rounded-lg top-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent text-white text-xs font-medium bottom-0 p-1"
    ></div>

    <div class=" absolute bottom-0 text-white p-4">
      <div class=" mt-1 font-medium">{person.name}</div>
      <div class="text-sm">{person.title}</div>

      <div class="flex gap-1.5 mt-1">
        {#each person.links as link}
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
{/snippet}

<div class="my-4">
  <div class="font-semibold mb-1.5 hidden">People</div>

  <!-- Current Students Section -->
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {#each currentStudents as person}
      {#if person?.url}
        <a href={person.url} target="_blank" class="cursor-pointer">
          {@render personBlock(person)}
        </a>
      {:else}
        {@render personBlock(person)}
      {/if}
    {/each}
  </div>


  <!-- Alumni Section -->
  {#if showAlumni}

    <div class="flex justify-between items-center my-12 mb-6">
      <div class="flex items-center">
        <div>
          <span class="font-secondary text-xl font-bold text-gray-800">Alumni</span>
          <p class="text-sm text-gray-800">
            Celebrating the successes of Tangent Lab's alumni across the globe
          </p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {#each alumniStudents as person}
        {#if person?.url}
          <a href={person.url} target="_blank" class="cursor-pointer">
            {@render personBlock(person)}
          </a>
        {:else}
          {@render personBlock(person)}
        {/if}
      {/each}
    </div>
  {/if}
</div>
