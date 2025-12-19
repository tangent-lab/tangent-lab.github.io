<script lang="ts">
  import Button from './Button.svelte';
  import LazyImage from './LazyImage.svelte';
  export let publication: any;

  // Copy BibTeX helper (only copy when explicit `publication.bibtex` exists)
  let copied: boolean = false;

  async function copyBibTeX(): Promise<void> {
    if (!publication?.bibtex) {
      console.warn('No BibTeX available to copy');
      return;
    }

    try {
      await navigator.clipboard.writeText(publication.bibtex);
      copied = true;
      setTimeout(() => (copied = false), 2000);
    } catch (e) {
      console.error('copy failed', e);
    }
  }

  // Convert common YouTube/watch or youtu.be urls into an embeddable URL and preserve query params.
  function toEmbedUrl(rawUrl: string) {
    if (!rawUrl) return rawUrl;
    try {
      const u = new URL(rawUrl);

      // Standard youtube.com/watch?v=VIDEO
      if (u.hostname.includes('youtube.com')) {
        if (u.pathname === '/watch') {
          const vid = u.searchParams.get('v');
          const params = new URLSearchParams(u.search);
          params.delete('v');
          const paramsString = params.toString();
          return `https://www.youtube.com/embed/${vid}${paramsString ? '?' + paramsString : ''}`;
        }

        // Already an embed URL
        if (u.pathname.startsWith('/embed/')) {
          return rawUrl;
        }
      }

      // Short youtu.be links
      if (u.hostname === 'youtu.be') {
        const vid = u.pathname.slice(1);
        const params = u.searchParams.toString();
        return `https://www.youtube.com/embed/${vid}${params ? '?' + params : ''}`;
      }

      return rawUrl;
    } catch (e) {
      // Fallback to a naive replacement (best-effort)
      return rawUrl.replace(/watch\?v=/, 'embed/').replace('&', '?');
    }
  }
</script>


{#if publication}
  <section class="hero publication-header">
    <div class="my-6">
      <p class="text-gray-700 flex items-center gap-3 flex-wrap">
        <span class="text-sm text-gray-500">{publication.venue}</span>

        {#if publication.award}
          {#if publication.tags?.includes('best')}
            <span class="inline-flex items-center text-amber-500 px-2 py-1 rounded bg-amber-50 text-sm">🏆 {publication.award}</span>
          {:else}
            <span class="inline-flex items-center text-amber-400 px-2 py-1 rounded bg-amber-50 text-sm">{publication.award}</span>
          {/if}
        {/if}
      </p>

      <div class="font-secondary font-bold text-3xl mt-2 mb-2">{publication.title}</div>

      <div class="mt-2 text-sm text-gray-700 publication-authors mb-1">
        {#if publication.authors}
          {#each publication.authors.split(',') as a, i}
            <span class="author-block mr-2">{a.trim()}{i < publication.authors.split(',').length - 1 ? ',' : ''}</span>
          {/each}
        {/if}
      </div>

      <div class="text-sm text-gray-500 mb-4">{publication.institutions}</div>
      
      <div class="publication-links flex gap-3">
        {#if publication.links}
          {#each publication.links as link}
            <Button href={link.url} ariaLabel={link.title} size="md" />
          {/each}
        {/if}
        {#if publication?.bibtex}
          <Button size="md" ariaLabel={copied ? 'Copied' : 'BibTex'} on:click={copyBibTeX} />
        {/if}
      </div>
    </div>
  </section>

  {#if publication.image}
  <section class="section my-12">
    <div class="flex place-content-center">
      <LazyImage src={publication.image} alt={publication.title} className="rounded-lg" />
    </div>
  </section>
  {/if}


  <section class="section hero is-light mb-16">
    <h2 class="font-medium">Abstract</h2>
    <div class="content has-text-justified">
      <p>{publication.abstract}</p>
    </div>
  </section>

  {#if (publication.links && publication.links.find(link => ((link.title || '').toLowerCase() === 'presentation' || (link.title || '').toLowerCase() === 'video')))}
    <section class="section hero is-light mb-16">
      <h2 class="font-medium mb-2">Video</h2>
      <iframe
        title={publication.links.find(link => ((link.title || '').toLowerCase() === 'presentation' || (link.title || '').toLowerCase() === 'video')).title || 'Presentation video'}
        class="w-full aspect-video rounded-lg shadow-md"
        src={toEmbedUrl(publication.links.find(link => ((link.title || '').toLowerCase() === 'presentation' || (link.title || '').toLowerCase() === 'video')).url)}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p class="text-sm text-gray-500 mt-2">
          Can't view the video inline? <a class="text-grey-800 underline" href={publication.links.find(link => ((link.title || '').toLowerCase() === 'presentation' || (link.title || '').toLowerCase() === 'video')).url || '#'} target="_blank" rel="noopener noreferrer">Open the video in a new tab</a>.
      </p>
    </section>
  {/if}

  {#if (publication.links && publication.links.find(link => ((link.title || '').toLowerCase() === 'pdf'))) || publication.url}
    <section class="section pdf-viewer">
      <div class="container is-max-desktop my-16">
        <h2 class="font-medium mb-2">Paper</h2>
        <div class="rounded-lg shadow-md overflow-hidden">
          <iframe
            src={
              (publication.links && publication.links.find(link => ((link.title || '').toLowerCase() === 'pdf'))?.url) || publication.url
            }
            title="Publication PDF"
            class="w-full"
            style="min-height:60vh; height:900px;"
            frameborder="0"
          ></iframe>
        </div>
        <p class="text-sm text-gray-500 mt-2">
          Can't view the PDF inline? <a class="text-grey-800 underline" href={(publication.links && publication.links.find(link => ((link.title || '').toLowerCase() === 'pdf'))?.url) || publication.url} target="_blank" rel="noopener noreferrer">Open the PDF in a new tab</a>.
        </p>
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
              <LazyImage src={image.src} alt={image.alt} className="rounded-lg shadow-md" />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  {/if}

  <section class="section" id="BibTeX">
    <div class="container is-max-desktop content">
      <div class="flex items-center justify-between mb-3">
        <h2 class="font-medium">BibTeX</h2>
        {#if publication?.bibtex}
          <Button size="md" ariaLabel={copied ? 'Copied' : 'Copy'} on:click={copyBibTeX} />
        {/if}
      </div>
      {#if publication?.bibtex}
        <pre class="rounded-lg p-4 bg-gray-50"><code>{publication.bibtex}</code></pre>
      {:else}
        <p class="text-sm text-gray-500">No BibTeX provided.</p>
      {/if}
    </div>
  </section>

{:else}
  <p>Oops! This should be a publication page but no publication is selected.</p>
{/if}