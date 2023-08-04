<script setup lang="ts">
import { initFlowbite } from 'flowbite'

useHead({
  bodyAttrs: {
    class: 'bg-gradient-to-r from-transparent to-blue-500'
  },
})

onMounted(initFlowbite)
</script>
<template>
  <header>
    <nav class=" border-gray-200 px-4 lg:px-6 pb-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <NuxtLink to="/">
          <svg height="100" viewBox="0 0 82 120">
            <path class="bg" d="M81.3128 0V38.6871L0 120V0H81.3128Z"></path>
            <path class="text" fill-rule="evenodd" clip-rule="evenodd" d="M31.8578 41.2802C30.0578 41.2802 28.68 40.7631 27.7245 39.729C26.7689 38.6948 26.2911 37.2335 26.2911 35.3451V22.9352C26.2911 21.0467 26.7689 19.5854 27.7245 18.5512C28.68 17.5171 30.0578 17 31.8578 17C33.6578 17 35.0356 17.5171 35.9911 18.5512C36.9467 19.5854 37.4244 21.0467 37.4244 22.9352V35.3451C37.4244 37.2335 36.9467 38.6948 35.9911 39.729C35.0356 40.7631 33.6578 41.2802 31.8578 41.2802ZM31.8578 37.908C33.1245 37.908 33.7578 37.1323 33.7578 35.5811V22.6991C33.7578 21.1479 33.1245 20.3723 31.8578 20.3723C30.5911 20.3723 29.9578 21.1479 29.9578 22.6991V35.5811C29.9578 37.1323 30.5911 37.908 31.8578 37.908ZM17.7 41.0779C17.0333 41.0779 16 41.0779 16 41.0779V37.7056C16 37.7056 16.7556 37.7056 17.2 37.7056C17.9333 37.7056 18.4778 37.5258 18.8333 37.1661C19.1889 36.7839 19.3667 36.2106 19.3667 35.4462V26.2394L23.0333 22.5299V35.3451C23.0333 37.2785 22.5889 38.7173 21.7 39.6615C20.8333 40.6058 19.5 41.0779 17.7 41.0779ZM23.0333 19.1021V17.3372H19.3667V22.8116L23.0333 19.1021ZM42.187 20.7095H38.3537V17.3372H49.687V20.7095H45.8537V40.943H42.187V20.7095ZM52.3307 17.3372H57.2974L61.0974 40.943H57.4307L56.764 36.2556V36.323H52.5974L51.9307 40.943H48.5307L52.3307 17.3372ZM56.3307 33.1194L54.6974 21.4514H54.6307L53.0307 33.1194H56.3307Z" fill="white"></path>
            </svg>
        </NuxtLink>
        <div class="flex items-center lg:order-2">
          <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
          <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
          <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <slot />
</template>