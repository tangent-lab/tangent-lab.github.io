<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  // 默认的可读性标签和按钮文案
  export let ariaLabel = 'View All';

  /**
   * 当按钮被点击时，触发自定义 "click" 事件
   */
  function handleClick(event) {
    dispatch('click', event);
  }
</script>

<button
  type="button"
  aria-label={ariaLabel}
  on:click={handleClick}
  class="
    inline-flex         
    items-center          
    text-gray-900
    justify-center
    pl-4 pr-2 py-3        
    bg-gray-50       
    hover:bg-[#A6192E]    
    hover:text-white     
    rounded-md         
    transition-colors
    duration-200
  "
>
  <span class="mr-1 text-sm font-medium">
    {ariaLabel}
  </span>
</button>
