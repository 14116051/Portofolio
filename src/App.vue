<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="flex flex-wrap justify-between items-center py-4 shadow-xl bg-white">
    <div class="px-4 flex justify-between w-full lg:w-auto">
      
      <router-link to="/"><img class="w-24 object-cover rounded-xl" src="../src/assets/90'sDev2.png"/></router-link>
      <button class="text-gray-500 lg:hidden" @click="toggleMenu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex space-x-6 flex-grow justify-center items-center" id="desktop-menu">
      <router-link to="/"><button class="py-4 px-5 rounded-md hover:bg-green-100">HOME</button></router-link>
      <router-link to="/about"><button class="py-4 px-5 rounded-md hover:bg-green-100">WHO I AM</button></router-link>
      <router-link to="/major"><button class="py-4 px-5 rounded-md hover:bg-green-100">EDUCATION</button></router-link>
      <router-link to="/experience"><button class="py-4 px-5 rounded-md hover:bg-green-100">EXPERIENCE</button></router-link>
    </div>
    <div :class="{'hidden': !isMenuOpen, 'w-full': true, 'lg:hidden': true}" id="mobile-menu">
      <router-link to="/"><button class="block w-full py-4 px-5 rounded-md hover:bg-green-100">HOME</button></router-link>
      <router-link to="/about"><button class="block w-full py-4 px-5 rounded-md hover:bg-green-100">WHO I AM</button></router-link>
      <router-link to="/major"><button class="block w-full py-4 px-5 rounded-md hover:bg-green-100">EDUCATION</button></router-link>
      <router-link to="/experience"><button class="block w-full py-4 px-5 rounded-md hover:bg-green-100">EXPERIENCE</button></router-link>
    </div>
  </nav>

  <main>

      <router-view />
    
  </main>

    <footer class="bg-blue-100/80 font-sans dark:bg-gray-400">
        <div class="px-6 py-12 mx-auto">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div class="sm:col-span-2">
                    <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Thanks for visiting My personal website.</h1>

                    <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                        <Address> Jl. Sindang Gayur, No. 68, Mulya Asri, Tulang Bawang Tengah, Tulang Bawang Barat, Lampung, 34693.</Address>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-800">Quick Link</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <p class="text-gray-600 transition-colors duration-300  dark:hover:text-green-400 hover:underline hover:cursor-pointer hover:text-green-500">Home</p>
                        <p class="text-gray-600 transition-colors duration-300  dark:hover:text-green-400 hover:underline hover:cursor-pointer hover:text-green-500">Who I am</p>
                        <p class="text-gray-600 transition-colors duration-300  dark:hover:text-green-400 hover:underline hover:cursor-pointer hover:text-green-500">Education</p>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-800">My Project</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <p class="text-gray-600 transition-colors duration-300 dark:hover:text-green-400 hover:underline hover:cursor-pointer hover:text-green-500">Project Manager</p>
                        <p class="text-gray-600 transition-colors duration-300 dark:hover:text-green-400 hover:underline hover:cursor-pointer hover:text-green-500">Software Quality Assurance</p>
                        <p class="text-gray-600 transition-colors duration-300 dark:hover:text-green-400 hover:underline hover:cursor-pointer hover:text-green-500">Web Development</p>
                    </div>
                </div>
            </div>
            
            <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
            
            <div class="sm:flex sm:items-center sm:justify-between">
                
                <div class="flex gap-4 hover:cursor-pointer">
                    
                    <!-- <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" /> -->
                    <img src="https://www.svgrepo.com/show/94698/github.svg" class="" width="30" height="30" alt="gt" />
                    <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                    <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                    <!-- <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" /> -->
                    <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                    <!-- <img src="https://www.svgrepo.com/show/22048/dribbble.svg" class="" width="30" height="30" alt="db" /> -->
                </div>
            </div>
            <p class="font-sans p-8 text-start md:text-center md:text-lg md:p-4">© 2024 Created By Ilham</p>
        </div>
    </footer>
</template>


<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->

