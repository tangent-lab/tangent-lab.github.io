<script lang="ts">
  let { people, showAlumni = true } = $props();

  const currentStudents = people.filter(person => !person.alumni && !person.visitor && !person.collaborator);
  const alumniStudents = people.filter(person => person.alumni);
  const visitors = people.filter(person => person.visitor);
  const collaborators = people.filter(person => person.collaborator);
</script>

{#snippet personBlock(person)}
  <div class="relative flex flex-col justify-center rounded-lg group cursor-pointer">
    <img
      src={person.image ?? "/assets/images/user.png"}
      alt={person.name}
      class="rounded-lg w-full aspect-square object-cover"
    />

    <div
      class="absolute rounded-lg top-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 via-transparent to-transparent text-white text-xs font-medium bottom-0 p-1"
    ></div>

    <div class=" absolute bottom-0 text-white p-4">
      <div class=" mt-1 mb-1.5 group-hover:underline font-medium cursor-pointer line-clamp-2">{person.name}</div>
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

    <div class="flex justify-between items-center mt-16 mb-6">
      <div class="flex items-center">
          <span class="text-xl font-semibold text-gray-800">Collaborators</span>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {#each collaborators as person}
        {#if person?.url}
          <a href={person.url} target="_blank" class="cursor-pointer">
            {@render personBlock(person)}
          </a>
        {:else}
          {@render personBlock(person)}
        {/if}
      {/each}
    </div>
    
  
    <div class="flex justify-between items-center mt-16 mb-6">
      <div class="flex items-center">
          <span class="text-xl font-semibold text-gray-800">Visitors</span>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {#each visitors as person}
        {#if person?.url}
          <a href={person.url} target="_blank" class="cursor-pointer">
            {@render personBlock(person)}
          </a>
        {:else}
          {@render personBlock(person)}
        {/if}
      {/each}
    </div>

    <div class="flex justify-between items-center mt-16 mb-6">
      <div class="flex items-center">
        <div>
          <span class="text-xl font-semibold text-gray-800">Alumni</span>
          <!--
          <p class="text-sm text-gray-800">
            Celebrating the successes of Tangent Lab's alumni across the globe
          </p>
        -->
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
