<script>
    export let news; 
    import { createEventDispatcher } from 'svelte';
    import LazyImage from './LazyImage.svelte';
  
    const dispatch = createEventDispatcher();
  </script>
  
  <section class="hero">
    <div class="font-secondary font-bold text-2xl mt-6 mb-2">{news.title}</div>
    <p class="is-size-5 news-date mb-6">{news.date}</p>
    <!-- <span class="tag">#{news.tag}</span> -->
  </section>
  
  {#if news.image}
  <section class="section">
    <div class="flex place-content-center">
      <LazyImage src={news.image} alt={news.title} className="rounded-lg" />
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