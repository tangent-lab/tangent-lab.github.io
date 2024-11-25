<script lang="ts">
  import Contact from "$lib/components/Contact.svelte";
  import About from "$lib/components/About.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import People from "./lib/components/People.svelte";
  import Publications from "./lib/components/Publications.svelte";
</script>

<div class="h-screen max-h-[100dvh] w-screen flex justify-center">
  <div class="w-full max-w-6xl p-3">
    <div class="flex items-center gap-2 mt-3 mb-4">
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

    <!-- <Publications /> -->

    <People
      people={[
        {
          image: "/assets/images/lawrence.png",
          name: "Prof. Lawrence Kim",
          title: "Assistant Professor of Computer Science",
        },
        {
          image: "/assets/images/lawrence.png",
          name: "Prof. Lawrence Kim",
          title: "Assistant Professor of Computer Science",
        },
        {
          image: "/assets/images/lawrence.png",
          name: "Prof. Lawrence Kim",
          title: "Assistant Professor of Computer Science",
        },
        {
          image: "/assets/images/lawrence.png",
          name: "Prof. Lawrence Kim",
          title: "Assistant Professor of Computer Science",
        },
        {
          image: "/assets/images/lawrence.png",
          name: "Prof. Lawrence Kim",
          title: "Assistant Professor of Computer Science",
        },
      ]}
    />

    <Contact />

    <Footer />
  </div>
</div>
