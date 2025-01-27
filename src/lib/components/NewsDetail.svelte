<script>
    export let news; 
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
  </script>
  
  <section class="hero">
    <div class="font-secondary font-bold text-xl mt-6 mb-4">{news.title}</div>
    <p class="is-size-5 news-date">{news.date}</p>
    <span class="tag">#{news.tag}</span>
  </section>
  
  {#if news.image}
  <section class="section">
    <div class="flex place-content-center">
      <img src={news.image} alt={news.title} class="rounded-lg" />
    </div>
  </section>
  {/if}
  
  <section class="section">
    <div class="container is-max-desktop content">
      <div class="article-content">
        {@html news.article.replace(/\n/g, '<br />')}
      </div>
    </div>
  </section>
  
  {#if news.url}
  <section class="section">
    <div class="container has-text-centered">
      <a
        href={news.url}
        target="_blank"
        rel="noopener noreferrer"
        class="button is-info is-rounded"
      >
        Read More
      </a>
    </div>
  </section>
  {/if}