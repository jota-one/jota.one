<script setup lang="ts">
const icons = [
  'i-logos-figma',
  'i-logos-nodejs-icon',
  'i-logos-typescript-icon',
  'i-logos-php-alt',
  'i-logos-doctrine',
  'i-logos-hugo',
  'i-logos-google-cloud-platform',
  'i-logos-cypress-icon',
  'i-logos-gitlab',
  'i-logos-github-actions',
  'i-logos-vue',
  'i-logos-svelte-icon',
  'i-logos-nuxt-icon',
  'i-logos-slack-icon',
  'i-logos-vitest',
  'i-logos-vitejs',
  'i-logos-jira',
  'i-logos-dgraph-icon',
  'i-logos-mariadb-icon',
  'i-logos-pocket-base',
  'i-logos-angular-icon',
  'i-logos-javascript',
  'i-logos-xstate',
  'i-logos-bash-icon',
  'i-logos-tailwindcss-icon',
  'i-logos-netlify-icon',
  'i-logos-css-3',
  'i-logos-postcss',
  'i-logos-sass',
  'i-logos-polymer',
  'i-logos-pm2-icon',
  'i-logos-pnpm',
  'i-logos-yarn',
  'i-logos-webpack',
  'i-logos-rollupjs',
  'i-logos-sendgrid-icon',
  'i-logos-mandrill-shield',
  'i-logos-mailchimp-freddie',
  'i-logos-markdown',
  'i-logos-element',
  'i-logos-hcaptcha-icon',
  'i-logos-jwt-icon',
  'i-logos-wordpress-icon',
  'i-logos-expressjs-light'
]
</script>

<template>
  <section>
    <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
      <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Quelques outils et technos que nous utilisons</h2>
      <div class="grid grid-cols-3 gap-8 text-gray-500 text-2xl sm:gap-12 md:grid-cols-6 lg:grid-cols-12 dark:text-gray-400">
        <a href="#" class="flex justify-center items-center" v-for="icon in icons" :key="icon">
          <span class="h-9 hover:text-gray-900 dark:hover:text-white" :class="icon"></span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
