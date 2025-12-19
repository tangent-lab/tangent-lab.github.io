<script lang="ts">
  export let src: string = '';
  export let alt: string = '';
  export let className: string = '';
  export let srcset: string | undefined = undefined;

  let loaded = false;
  function handleLoad() {
    loaded = true;
  }
</script>

<img
  {src}
  {alt}
  {srcset}
  loading="lazy"
  decoding="async"
  class="{className} lazy {loaded ? 'is-loaded' : ''}"
  on:load={handleLoad}
/>
