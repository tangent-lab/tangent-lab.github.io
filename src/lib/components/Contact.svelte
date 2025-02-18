<script>
  import Button from './Button.svelte';
  let {showAll = true } = $props();

</script>

<div class="my-4">

  {#if showAll}
    <div class="flex justify-between items-center mt-6 mb-12">
      <div class="flex items-center">
        <div>
          <div class="font-secondary text-xl font-bold text-gray-800 mb-6">Apply to Tangent Lab  </div>
          <ul class="list-disc list-inside pl-4 my-6">
            <p class="mb-2">
              For those interested in joining Tangent Lab
            </p>
            <li>Please check the following list of positions</li>
            <li>Check our Publication page to learn about our research at Tangent Lab</li>
            <li>
              Send your portfolio link, transcripts, and CV via e-mail to 
              <a 
                href="mailto:lawkim@sfu.ca" 
                class="text-grey-600 hover:text-grey-800 underline"
              >
                lawkim [at] sfu.ca
              </a>
            </li>          
          </ul>        
          <p class="text-sm text-gray-800">
          </p>
        </div>
      </div>
    </div>


    <div class="font-secondary text-xl font-bold text-gray-800 my-6">List of Positions  </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">

      <div
        class="p-6 bg-gray-50 aspect-square relative rounded-lg group cursor-pointer hover:shadow-md transition-shadow "
      >
        <div class="text-lg mb-2 font-medium">
          PhD Student
        </div>
        <div class="text-gray-700">
          Experience in HCI or related field, particularly in designing and engineering interactive hardware, is expected.
        </div>
        <div class="text-gray-700 my-2">
          Your BS/MS degree doesn’t have to be in Computer Science.
        </div>
        <div class="text-gray-700">
          Deadline: See
          <a 
                href="https://www.sfu.ca/fas/study/future-graduates/apply/computing-science.html" 
                class="text-gray-600 hover:text-gray-800 underline"
              >
                SFU CS website
              </a>.
        </div>
        <div class="absolute bottom-4 right-4">
            <Button href="https://www.sfu.ca/fas/study/future-graduates/programs/phd-computing.html" size="xl" ariaLabel="Learn More" />
        </div>
      </div>
        
      <div
        class="p-6 bg-gray-50 aspect-square relative flex flex-col rounded-lg group cursor-pointer hover:shadow-md transition-shadow "
      >
        <div class="text-lg mb-2 font-medium">
          MSc Student
        </div>
        <div class="text-gray-700">
          Experience in research is required, where prior experience in either HCI, design, mechatronics, or related field is ideal. 
        </div>
        <div class="text-gray-700 my-2">
          Your BS degree doesn’t have to be in Computer Science. 
        </div>
        <div class="text-gray-700">
          Deadline: See
          <a 
                href="https://www.sfu.ca/fas/study/future-graduates/apply/computing-science.html" 
                class="text-gray-600 hover:text-gray-800 underline"
              >
                SFU CS website
              </a>.
        </div>
        <div class="absolute bottom-4 right-4">
            <Button href="https://www.sfu.ca/fas/study/future-graduates/programs/master-science-thesis.html" size="xl" ariaLabel="Learn More" />
        </div>
      </div>

      <div
        class="p-6 bg-gray-50 aspect-square relative flex flex-col rounded-lg group cursor-pointer hover:shadow-md transition-shadow "
      >
        <div class="text-lg mb-2 font-medium">
          Undergraduate Student
        </div>
        <div class="text-gray-700">
          Interest in HCI, design, or mechatronics. It’s best to have some exposure in those domains via classes such as CMPT 263/363. You also need to enrolled as SFU CS undergrad. 
        </div>
        <div class="text-gray-700 my-2">
          We accept undergraduate students via research-based courses (e.g. CMPT 415/416), Work & Study, and USRA (for summer terms).
        </div>
        <div class="absolute bottom-4 right-4">
            <Button href="https://www.sfu.ca/students/financial-aid/undergraduate/work-study.html" size="xl" ariaLabel="Work & Study" />
            <Button href="https://www.sfu.ca/gradstudies/awards-funding/ugrad-research-awards/eligibility.html" size="xl" ariaLabel="USRA" />
        </div>
      </div>

      <div
        class="p-6 bg-gray-50 aspect-square relative flex flex-col rounded-lg group cursor-pointer hover:shadow-md transition-shadow "
      >
        <div class="text-lg mb-2 font-medium">
          Visiting Student
        </div>
        <div class="text-gray-700">
          For international students without funds, consider the 
          <a 
                href="https://www.mitacs.ca/our-programs/globalink-research-internship-students/" 
                class="text-gray-600 hover:text-gray-800 underline"
              >
              MITACS Global Research Internship Program
              </a>.
        </div>
        <div class="text-gray-700 my-2">
          More details can be found
          <a 
                href="https://www.sfu.ca/fas/study/future-graduates/apply/computing-science.html" 
                class="text-gray-600 hover:text-gray-800 underline"
              >
              here
              </a>.
        </div>
        <div class="absolute bottom-4 right-4">
            <Button href="https://www.sfu.ca/gradstudies/apply/visiting-and-incoming-exchange/vrs.html" size="xl" ariaLabel="Learn More" />
        </div>
      </div>

      <div
        class="p-6 bg-gray-50 aspect-square relative flex flex-col rounded-lg group cursor-pointer hover:shadow-md transition-shadow "
      >
        <div class="text-lg mb-2 font-medium">
          Postdoctoral Researcher
        </div>
        <div class="text-gray-700">
          No fully-funded position available. 
        </div>
        <div class="text-gray-700 my-2">
          Reach out if interested in applying for a fellowship.
        </div>
      </div>

    </div>

    <div class="font-secondary text-xl font-bold text-gray-800 my-6">Connect with Us  </div>

  {/if}

  <div class="grid md:grid-cols-2 gap-4 mb-16">
    <div class="flex flex-col md:basis-1/2 gap-4">
      <div class="flex flex-col p-4 bg-gray-50 rounded-lg">
        <div class="font-semibold mb-1">Contact</div>

        <div class="text-sm text-gray-600 mb-2">
          Tangent Lab is affiliated with SFU’s ixLab and the SFU Visual & Interactive Computing Institute (VINCI). 
          Our lab is located in the Technology and Science Complex 1 (TASC1) on the Burnaby campus.
        </div>

        <div class="mb-2 text-sm">
          <div class="font-semibold">Tangent Lab</div>

          <div class=" text-gray-600">
            Technology and Science Complex 1, Burnaby, BC V5A 1S6
          </div>
        </div>
      </div>

      <div>
        <img
          src="/assets/images/tasc1.png"
          alt="Tangent Lab"
          class="rounded-lg h-96 w-full bg-inherit object-cover"
        />
      </div>
    </div>

    <div class="md:basis-1/2">
      <iframe
        class="rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.206447259982!2d-122.91669278709588!3d49.27672497105547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548679bf39213df3%3A0x851019771abbd8cd!2sTechnology%20and%20Science%20Complex%201%2C%20Burnaby%2C%20BC%20V5A%201S6!5e1!3m2!1sen!2sca!4v1732512301786!5m2!1sen!2sca"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>
