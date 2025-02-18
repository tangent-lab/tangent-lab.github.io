<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let size = 'lg';
  export let ariaLabel = 'View All';
  export let href = null;

  $: sizeClasses = (
    size === 'sm'
      ? 'text-xs pl-3 pr-1 py-3 text-xs text-gray-900 bg-white bg-opacity-90'
    : size === 'lg'
      ? 'text-sm pl-4 pr-2 py-3 text-sm font-medium text-gray-900 bg-gray-50'
    : size === 'xl'
      ? 'text-sm pl-4 pr-2 py-3 text-sm font-medium bg-white text-gray-900 bg-gray-50'
    : 
      'text-sm pl-4 pr-2 py-3 text-sm font-medium text-gray-900 bg-gray-50'
  );

  function handleClick(event) {
    dispatch('click', event);
  }
</script>


{#if href}
  <a
    href={href}
    class="
    ${sizeClasses} 
    inline-flex         
    items-center          
    justify-center 
    hover:bg-[#A6192E]    
    hover:text-white     
    rounded-md         
    transition-colors
    duration-200
  "
    target="_blank"
    rel="noopener noreferrer"
  >
  <span class="mr-1">
    {ariaLabel}
  </span>
</a>
{:else}
  <button
    type="button"
    on:click={handleClick}
    class="
      ${sizeClasses} 
      inline-flex         
      items-center          
      justify-center 
      hover:bg-[#A6192E]    
      hover:text-white     
      rounded-md         
      transition-colors
      duration-200
    "
  >
    <span class="mr-1">
      {ariaLabel}
    </span>
  </button>
{/if}