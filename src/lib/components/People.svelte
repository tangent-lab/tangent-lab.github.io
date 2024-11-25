<script lang="ts">
  let { people } = $props();
</script>

<div class="my-4">
  <div class="font-semibold mb-1.5">People</div>

  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
  >
    {#each people as person}
      <div class="relative flex flex-col justify-center rounded-lg">
        <img
          src={person?.image ?? "/assets/images/user.png"}
          alt={person.name}
          class="rounded-lg w-full aspect-square object-cover"
        />

        <div
          class="absolute rounded-lg top-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-transparent text-white text-xs font-medium bottom-0 p-1"
        ></div>

        <div class=" absolute bottom-0 text-white p-3">
          <div class=" mt-1 font-medium">{person.name}</div>
          <div class="text-sm">{person.title}</div>
        </div>
      </div>
    {/each}
  </div>
</div>
