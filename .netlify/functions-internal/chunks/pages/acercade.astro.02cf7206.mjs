/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderSlot, m as maybeRenderHead, e as renderComponent } from '../astro.c2afd273.mjs';
import 'html-escaper';

const $$Astro$3 = createAstro("https://beniiito.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Union Hidalgo | ${title}</title>
${renderHead()}</head>
<body class="bg-crema-500">
    <main>
        ${renderSlot($$result, $$slots["default"])}</main>
   
</body></html>`;
}, "C:/Users/blopez/Documents/Repositorio/union-site/src/layouts/Layout.astro");

const $$Astro$2 = createAstro("https://beniiito.github.io");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`<!-- <header
class="bg-guinda-500 flex flex-col md:flex-row p-2 text-center md:text-left text-xl text-red-50"
>
<div
  class="flex flex-col md:flex-row p-2 gap-2 md:gap-16 text-center md:text-left"
>
  <a href="/"> Home</a>

  <a href=""> Hoteles</a>

  <a href=""> Velas</a>

  <a href="/acercade"> Acerca de</a>

  <a href=""> Como llegar</a>
</div>
</header>
</div> -->${maybeRenderHead()}<header>
  <!-- Navigation bar -->
  <nav class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-zapoteca-700 dark:text-crema-500 md:flex-wrap md:justify-start" data-te-navbar-ref>
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <div class="flex items-center">
        <!-- Hamburger menu button -->
        <button class="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden" type="button" data-te-collapse-init data-te-target="#navbarSupportedContentX" aria-controls="navbarSupportedContentX" aria-expanded="false" aria-label="Toggle navigation">
          <!-- Hamburger menu icon -->
          <span class="[&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
          </span>
        </button>
      </div>

      <!-- Navigation links -->
      <div class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContentX" data-te-collapse-item>
        <ul class="mr-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" href="/" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Inicio</a>
          </li>
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" href="/historia" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Historia</a>
          </li>
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" href="/costumbres" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Tradiciones y Constumbres</a>
          </li>
          <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" href="/" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Comidas tipicas</a>
          </li>
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" href="/hoteles" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Hoteles</a>
          </li>
          <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" href="/acercade" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Acerca de</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero section with background image, heading, subheading and button -->
 
</header>`;
}, "C:/Users/blopez/Documents/Repositorio/union-site/src/components/landing/Hero.astro");

const $$Astro$1 = createAstro("https://beniiito.github.io");
const $$Foter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Foter;
  return renderTemplate`<!-- component --><!-- Foooter -->${maybeRenderHead()}<section class="bg-white">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
                <a href="/acercade" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Acerca de
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Hoteles
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Costumbres y Tradiciones
                </a>
            </div>
            
            <div class="px-5 py-2">
                <a href="/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Contacto
                </a>
            </div>

            <div class="px-5 py-2">
                <a href="/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Comidas tipicas
                </a>
            </div>
        
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
            <a href="https://www.facebook.com/benito.lopez.31392?mibextid=ZbWKwL" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Facebook</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="https://instagram.com/beny97._.02?igshid=MzNlNGNkZWQ4Mg==" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Instagram</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                </svg>
            </a>
           
            <a href="https://github.com/beniiito" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">GitHub</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 Benito López López, Inc. All rights reserved.
        </p>
    </div>
    

</section>`;
}, "C:/Users/blopez/Documents/Repositorio/union-site/src/components/landing/Foter.astro");

const $$Astro = createAstro("https://beniiito.github.io");
const $$Acercade = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Acercade;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Acerca de" }, { "default": ($$result2) => renderTemplate`
${renderComponent($$result2, "Hero", $$Hero, {})}
${renderComponent($$result2, "Foter", $$Foter, {})}
` })}`;
}, "C:/Users/blopez/Documents/Repositorio/union-site/src/pages/acercade.astro");

const $$file = "C:/Users/blopez/Documents/Repositorio/union-site/src/pages/acercade.astro";
const $$url = "/union-site/acercade";

const acercade = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Acercade,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, $$Foter as a, $$Layout as b, acercade as c };
