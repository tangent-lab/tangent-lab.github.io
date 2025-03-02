<script>
  export let publication; 
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const videoLink = publication.links.find(
    link => link.title === "Presentation" || link.title === "Video"
  );
</script>

{#if publication}
  <section class="hero">
    <div class="my-6">
      <p class="text-gray-700 flex items-center">

        <span class="font-medium my-2 mr-2">{publication.venue}</span>
        {#if publication.award}
          {#if publication.tags?.includes('best')}
              <span 
              class="material-symbols-outlined align-middle text-amber-400 my-2" 
              title="Best Paper"
            >
              trophy
            </span>
          {/if}
          {#if publication.tags?.includes('mention')}
            <span 
              class="material-symbols-outlined align-middle text-amber-400 my-2" 
              title="Honorable Mention"
            >
              workspace_premium
            </span>
          {/if}
          <span class="text-sm text-amber-400 font-medium my-2">
            {publication.award}
          </span>

        {/if}
      </p>


      <div class="font-secondary font-bold text-xl mt-2">{publication.title}</div>
      <div class="mt-2 italic">
        {publication.authors}
        <!--
        {#each publication.authors as author}
          <span class="author-block">
            <a href={author.link} target="_blank">{author.name}</a>{author.equalContribution ? '<sup>*</sup>' : ''},
          </span>
        {/each}
          -->
      </div>
      <div>{publication.institutions}</div>
      
      <div class="publication-links">
        {#if publication.url}
          <a href={publication.url} target="_blank" class="button is-normal is-rounded is-dark">
            <span class="icon"><i class="fas fa-file-pdf"></i></span>
            <span>Paper</span>
          </a>
        {/if}
        {#if publication.github}
          <a href={publication.github} target="_blank" class="button is-normal is-rounded is-dark">
            <span class="icon"><i class="fab fa-github"></i></span>
            <span>Code</span>
          </a>
        {/if}
      </div>
    </div>
  </section>

  {#if publication.image}
  <section class="section my-12">
    <div class="flex place-content-center">
      <img src={publication.image} alt={publication.title} class="rounded-lg" />
    </div>
  </section>
  {/if}


  <section class="section hero is-light mb-24">
    <h2 class="font-medium">Abstract</h2>
    <div class="content has-text-justified">
      <p>{publication.abstract}</p>
    </div>
  </section>


  {#if publication.links && publication.links.find(link => link.title === "Presentation")}
    <section class="hero teaser">
      <div class="my-6">
          <iframe
            class="w-full aspect-video"
            src={videoLink.url.replace(/watch\?v=/, "embed/").split("&")[0]}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
      </div>
    </section>
  {/if}

  {#if publication.images && publication.images.length > 0}
  <section class="hero is-small">
    <div class="hero-body">
      <div class="container">
        <h2 class="title is-3">Gallery</h2>
        <div class="columns is-multiline">
          {#each publication.images as image}
            <div class="column is-one-quarter">
              <img src={image.src} alt={image.alt} class="rounded-lg shadow-md" />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  {/if}

  <!-- BibTeX 引用 -->
  <section class="section" id="BibTeX">
    <div class="container is-max-desktop content">
      <pre><code>{publication.bibtex}</code></pre>
    </div>
  </section>

{:else}
  <p>Oops! This should be a publication page but no publication is selected.</p>
{/if}


<!--
<section class="my-8">
  <h1 class="text-3xl font-bold">{publication.title}</h1>
  <p class="text-lg text-gray-600">{publication.authors.join(", ")}</p>

  <section class="my-4">
    <h2 class="text-2xl font-semibold">Abstract</h2>
    <p>{publication.abstract}</p>
  </section>

  {#if publication.video}
    <section class="my-4">
      <h2 class="text-2xl font-semibold">Video Presentation</h2>
      <iframe src={publication.video} frameborder="0" allowfullscreen class="w-full h-64"></iframe>
    </section>
  {/if}

  {#if publication.images.length > 0}
    <section class="my-4">
      <h2 class="text-2xl font-semibold">Gallery</h2>
      <div class="grid grid-cols-2 gap-4">
        {#each publication.images as image}
          <img src={image} alt="{publication.title}" class="rounded-lg shadow-md" />
        {/each}
      </div>
    </section>
  {/if}
</section>

<button on:click={() => dispatch('back')} class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
  Back to Publications
</button>
-->