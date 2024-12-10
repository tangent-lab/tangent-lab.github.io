<script lang="ts">
  import Contact from "$lib/components/Contact.svelte";
  import About from "$lib/components/About.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import People from "./lib/components/People.svelte";
  import Publications from "./lib/components/Publications.svelte";
</script>

<div class="h-screen max-h-[100dvh] w-screen flex justify-center">
  <div class="w-full max-w-6xl py-6 p-3">
    <div class="relative">
      <img
        src="/assets/images/sfu.webp"
        alt="Tangent Lab"
        class="rounded-lg h-96 w-full bg-inherit object-cover"
      />

      <div
        class="absolute rounded-lg top-0 left-0 w-full h-full bg-gradient-to-tl from-10% to-45% from-gray-50/95 to-transparent text-white text-xs font-medium bottom-0 p-1"
      ></div>

      <div class=" absolute bottom-0 right-5 flex items-center gap-2 mt-3 mb-4">
        <div class="text-2xl font-semibold text-gray-700">Tangent Lab</div>

        <div>
          <img src="/favicon.png" alt="Tangent Lab" class="size-8" />
        </div>
      </div>
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
          image: "/assets/images/people/Lawrence.png",
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
            {
              title: "Email",
              url: "mailto:lawkim@sfu.ca",
            },
          ],
        },
        {
          image: "/assets/images/people/Xueying.png",
          name: "Xueying Zhang",
          title: "PhD Student",
        },
        {
          image: "/assets/images/people/Duc.png",
          name: "Duc Dang",
          title: "Thesis MSc Student",
        },
        {
          image: "/assets/images/people/Sarah.png",
          name: "Sarah Pratt",
          title: "Thesis MSc Student",
        },
        {
          image: "/assets/images/people/Qihan.png",
          name: "Qihan Gao",
          title: "Thesis MSc Student",
        },
        {
          image: "/assets/images/people/Tim.png",
          name: "Tim Baek",
          title: "Thesis MSc Student",
        },
        {
          image: "/assets/images/people/Gary.png",
          name: "Gary(Huayu) Wang",
          title: "Professional MSc Student",
        },
        {
          image: "/assets/images/people/Ayana.png",
          name: "Ayana Hussain",
          title: "Undergraduate Student",
        },

        {
          image: "/assets/images/people/janghyeon.jpeg",
          name: "Janghyeon Lee",
          title: "Alumni - Professional MSc Student",
        },
        {
          image: "/assets/images/people/jiadi.jpeg",
          name: "Jiadi(Tian) Luo",
          title: "Alumni - Undergraduate Student",
        },
        {
          image: "/assets/images/people/samira.jpeg",
          name: "Samira Pulatova",
          title: "Alumni - Undergraduate Student",
        },
        {
          image: "/assets/images/100.png",
          name: "Seeking exceptional students",
          title: "Email CV & transcript to Prof. Kim!",
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
