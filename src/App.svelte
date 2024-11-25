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

    <Publications
      publications={[
        {
          image: "/assets/images/publications/codesign.gif",
          title:
            "Co-Designing Programmable Fidgeting Experience with Swarm Robots for Adults with ADHD",
          authors: "Samira Pulatova, Lawrence Kim",
          url: "https://www.lhkim.com/Projects/2024-SwarmFidgetADHD/ASSETS%20preprint.pdf",

          venue: "ASSETS 2024",
          links: [
            {
              title: "Presentation",
              url: "https://www.youtube.com/watch?v=vglfyKbNiHE&ab_channel=SFUTangentLab",
            },
          ],
        },
        {
          image: "/assets/images/publications/multi-robot.gif",
          title:
            "Impact of Multi-Robot Presence and Anthropomorphism on Human Cognition and Emotion",
          url: "https://www.lhkim.com/Projects/2024-MultiRobotPresence/MultiRobotPresence-Preprint.pdf",

          authors: "Jiadi Luo, Veronika Domova, Lawrence Kim",
          venue: "CHI 2024",
          links: [
            {
              title: "Video",
              url: "https://youtu.be/_plPdD05mSQ?si=TByzesYJDYGhXsJl",
            },
            {
              title: "Presentation",
              url: "https://www.youtube.com/watch?v=yAA-sZ6ViqI&ab_channel=ACMSIGCHI",
            },
          ],
        },

        {
          image: "/assets/images/publications/swarmfidget.gif",
          title:
            "SwarmFidget: Exploring Programmable Actuated Fidgeting with Swarm Robots",
          url: "https://www.lhkim.com/Projects/2023-SwarmFidget/SwarmFidget.pdf",
          authors: "Lawrence Kim, Veronika Domova, Yuqi Yao, Parsa Rajabi",
          venue: "UIST 2023",
          links: [
            {
              title: "Video",
              url: "https://www.youtube.com/watch?v=gy4rGCqOujs&ab_channel=SFUTangentLab",
            },
            {
              title: "Presentation",
              url: "https://www.youtube.com/live/IiKX6HRSiSk?si=Rc6QybQlDvnZSwjq&t=13682",
            },
          ],
        },
      ]}
    />

    <People
      people={[
        {
          image: "/assets/images/lawrence.png",
          name: "Prof. Lawrence Kim",
          title: "Assistant Professor of Computer Science",
          links: [
            {
              title: "Website",
              url: "https://www.lhkim.com/",
            },
            {
              title: "Twitter",
              url: "https://twitter.com/lawhkim",
            },
          ],
        },
        {
          image: "/assets/images/lawrence.png",
          name: "Prof. Lawrence Kim",
          title: "PhD Student",
        },
        {
          image: "/assets/images/lawrence.png",
          name: "Prof. Lawrence Kim",
          title: "MSc Student",
        },
        {
          image: "/assets/images/lawrence.png",
          name: "Prof. Lawrence Kim",
          title: "Alumni (PhD)",
          links: [
            {
              title: "Email",
              url: "mailto:lawkim@sfu.ca",
            },
          ],
        },
      ]}
    />

    <Contact />

    <Footer />
  </div>
</div>
