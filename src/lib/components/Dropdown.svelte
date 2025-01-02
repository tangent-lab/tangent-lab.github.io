<!-- 封装成一个小组件，或直接在模板里写 -->
<div class="relative inline-block">
    <select
      class="
        bg-gray-100
        text-black
        hover:bg-[#A6192E] hover:text-white
        border border-gray-300
        rounded-md
        px-4 py-2 pr-8     /* 留出右侧空间给自定义箭头 */
        cursor-pointer
        focus:outline-none
        focus:ring-2 focus:ring-[#A6192E]
        transition-colors duration-200
        appearance-none    /* 隐藏原生的下拉箭头 */
      "
      bind:value={selectedYear}
    >
      <option value="All">All</option>
      {#each getAllYears() as y}
        <option value={y}>{y}</option>
      {/each}
    </select>
  
    <!-- 自定义的小箭头图标 (SVG) ，放在右侧 -->
    <div 
      class="pointer-events-none 
             absolute right-2 top-1/2 
             transform -translate-y-1/2
             text-black group-hover:text-white
      "
    >
      <!-- 这里可使用一个简单的下拉箭头SVG，如下： -->
      <svg
        class="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path 
          d="M10 12.585l4.95-4.95 1.414 1.414L10 15.414l-6.364-6.364 1.414-1.414z"
        />
      </svg>
    </div>
  </div>
  