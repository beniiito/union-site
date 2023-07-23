/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro.c2afd273.mjs';
import 'html-escaper';
import { $ as $$Hero, a as $$Foter, b as $$Layout } from './acercade.astro.02cf7206.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$1 = createAstro("https://beniiito.github.io");
const $$Carrusel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Carrusel;
  return renderTemplate`<!-- <div
  id="carouselDarkVariant"
  class="relative"
  data-te-carousel-init
  data-te-carousel-slide>

    <div
      class="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
      data-te-carousel-indicators>
      <button
        data-te-target="#carouselDarkVariant"
        data-te-slide-to="0"
        data-te-carousel-active
        class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
        aria-current="true"
        aria-label="Slide 1"></button>
      <button
        data-te-target="#carouselDarkVariant"
        class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
        data-te-slide-to="1"
        aria-label="Slide 1"></button>
      <button
        data-te-target="#carouselDarkVariant"
        class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
        data-te-slide-to="2"
        aria-label="Slide 1"></button>
    </div>

    
    <div
      class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
      
      <div
        class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-fade
        data-te-carousel-item
        data-te-carousel-active>
        <img
          src="/mar.jpeg"
          class="block w-full h-[38rem]"
          alt="Motorbike Smoke" />
        <div
          class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
          <h5 class="text-xl text-white">First slide label</h5>
          <p class="text-white">
            Some representative placeholder content for the first slide.
          </p>
        </div>
      </div>
     
      <div
        class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-fade
        data-te-carousel-item>
        <img
          src="/mar2.jpeg"
          class="block w-full h-[38rem]"
          alt="Mountaintop" />
        <div
          class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
          <h5 class="text-xl  text-white">Second slide label</h5>
          <p class=" text-white">
            Some representative placeholder content for the second slide.
          </p>
        </div>
      </div>
    
      <div
        class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-fade
        data-te-carousel-item>
        <img
          src="mar3.jpeg"
          class="block w-full h-[38rem]"
          alt="Woman Reading a Book" />
        <div
          class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
          <h5 class="text-xl  text-white">Third slide label</h5>
          <p class=" text-white">
            Some representative placeholder content for the third slide.
          </p>
        </div>
      </div>
    </div>

 
</div> -->${maybeRenderHead()}<div id="carouselDarkVariant" class="relative" data-te-carousel-init data-te-carousel-slide>
  <div class="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
    <button data-te-target="#carouselDarkVariant" data-te-slide-to="0" data-te-carousel-active class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-current="true" aria-label="Slide 1"></button>
    <button data-te-target="#carouselDarkVariant" class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" data-te-slide-to="1" aria-label="Slide 1"></button>
      <button data-te-target="#carouselDarkVariant" class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" data-te-slide-to="2" aria-label="Slide 1"></button>

      <button data-te-target="#carouselDarkVariant" class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" data-te-slide-to="3" aria-label="Slide 1"></button>

      <button data-te-target="#carouselDarkVariant" class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" data-te-slide-to="4" aria-label="Slide 1"></button>

      <button data-te-target="#carouselDarkVariant" class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" data-te-slide-to="5" aria-label="Slide 1"></button>
  </div>

  <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    <div class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item data-te-carousel-active>
      <img src="/atardecer.jpeg" class="block w-full h-[38rem]">
      <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
        <h5 class="text-xl text-white">Otro atardecer</h5>
        <p class="text-white">Atardeceres unicos</p>
      </div>
    </div>

    <div class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item>
      <img src="/palacio.jpeg" class="block w-full h-[38rem]">
      <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
        <h5 class="text-xl text-white">El desastre</h5>
        <p class="text-white">
          Asi quedo el palacio municipal despues del terremoto del 2017
        </p>
      </div>
    </div>

    <div class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item>
      <img src="/mar.jpeg" class="block w-full h-[38rem]">
      <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
        <h5 class="text-xl text-white">------------</h5>
        <p class="text-white">
          -------------------
        </p>
      </div>
    </div>


    <div class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item>
      <img src="/mar2.jpeg" class="block w-full h-[38rem]">
      <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
        <h5 class="text-xl text-white">El desastre</h5>
        <p class="text-white">
          Asi quedo el palacio municipal despues del terremoto del 2017
        </p>
      </div>
    </div>

    <div class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item>
    <img src="/mar3.jpeg" class="block w-full h-[38rem]">
    <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
      <h5 class="text-xl text-white">El desastre</h5>
      <p class="text-white">
        Asi quedo el palacio municipal despues del terremoto del 2017
      </p>
    </div>
  </div>

  <div class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item>
  <img src="/campo2.jpeg" class="block w-full h-[38rem]">
  <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
    <h5 class="text-xl text-white">El desastre</h5>
    <p class="text-white">
      Asi quedo el palacio municipal despues del terremoto del 2017
    </p>
  </div>
</div>


  </div>
</div>`;
}, "C:/Users/blopez/Documents/Repositorio/union-site/src/components/landing/Carrusel.astro");

const $$Astro = createAstro("https://beniiito.github.io");
const $$Costumbres = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Costumbres;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Costumbres y Tradiciones" }, { "default": ($$result2) => renderTemplate`
${renderComponent($$result2, "Hero", $$Hero, {})}
${renderComponent($$result2, "Carrusel", $$Carrusel, {})}
${renderComponent($$result2, "Foter", $$Foter, {})}
` })}`;
}, "C:/Users/blopez/Documents/Repositorio/union-site/src/pages/costumbres.astro");

const $$file = "C:/Users/blopez/Documents/Repositorio/union-site/src/pages/costumbres.astro";
const $$url = "/union-site/costumbres";

export { $$Costumbres as default, $$file as file, $$url as url };
