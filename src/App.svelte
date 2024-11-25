<script lang="ts">
  import Contact from "$lib/components/Contact.svelte";
  import About from "$lib/components/About.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="h-screen max-h-[100dvh] w-screen flex justify-center">
  <div class="w-full max-w-6xl p-2.5">
    <div class="flex items-center gap-2 mt-4 mb-4">
      <div class="text-2xl font-semibold text-gray-700">Tangent Lab</div>

      <div>
        <img src="/favicon.png" alt="Tangent Lab" class="size-8" />
      </div>
    </div>

    <div class="">
      <img
        src="/assets/images/sfu.webp"
        alt="Tangent Lab"
        class="rounded-lg h-96 w-full bg-inherit object-cover"
      />
    </div>

    <About />

    <Contact />

    <Footer />
  </div>
</div>
