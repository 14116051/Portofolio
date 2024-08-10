<script setup lang="ts">
import { ref } from 'vue';
import logo from '../assets/90\'sDev2.png';

// // essential styles
// import 'vue-pdf-embed/dist/style/index.css'

// // optional styles
// import 'vue-pdf-embed/dist/style/annotationLayer.css'
// import 'vue-pdf-embed/dist/style/textLayer.css'

const pdfSourcePM = 'src/assets/file/CV-ilham-PM.pdf';
const pdfSourceSE = 'src/assets/file/CV-ilham-SE.pdf';

const isDropdownOpen = ref(false);
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<template>
    <section class="max-h-screen">
        <div class="grid grid-cols-12 py-8 bg-gray-200 lg:h-screen">
            <!-- Main Content -->
            <div class="col-span-12 sm:col-span-6 flex justify-center items-center pb-4 lg:pb-0">
                <img class="object-cover lg:h-96" :src="logo"/>
            </div>
            <!-- Sidebar -->
            <div class="col-span-12 sm:col-span-6 flex justify-center items-center pt-4 lg:pt-0">
                <div class="grid grid-rows-3">
                    <div> 
                        <h1 class="text-4xl font-semibold tracking-widest text-g uppercase"> Ilham </h1> 
                    </div>
                    <div> 
                        <h2> Project Manager | Software Engineer</h2> 
                    </div>
                    <div class="grid grid-cols-2 gap-2 relative">
                        <!-- CV Button with Dropdown -->
                        <div class="relative">
                            <button @click="toggleDropdown" class="px-3 w-full md:px-4 py-2 md:py-2 border border-sky-600 text-black rounded-lg hover:bg-green-500 flex justify-between items-center">
                                <span>Curriculum Vitae</span>
                                <i class="fa-solid fa-arrow-circle-down ml-2"></i>
                            </button>
                            <div v-if="isDropdownOpen" class="absolute left-0 mt-2 bg-gray-200 border border-gray-300 rounded-lg shadow-lg z-10 w-max">
                                <a :href="pdfSourcePM" target="_blank" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"> 
                                    <i class="fa-solid fa-file-alt"></i> CV-Project Manager
                                </a>
                                <a :href="pdfSourceSE" target="_blank" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"> 
                                    <i class="fa-solid fa-file-alt"></i> CV-Software Engineer
                                </a>
                            </div>
                        </div>
                        <!-- Contact Button -->
                        <button class="px-3 md:px-4 py-1 md:py-2 border border-sky-600 text-black rounded-lg hover:bg-green-500">
                            <a href="https://wa.me/+6282271056498">Contact</a> 
                            <i class="fa-solid fa-envelope ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="flex justify-center items-center h-32 overflow-hidden">
        <div class="flex gap-2 lg:justify-center md:justify-center items-center h-full overflow-x-auto whitespace-nowrap p-2">
            <button class="w-max h-12 flex justify-center items-center border border-sky-600 text-black hover:bg-green-500 rounded-lg m-2 p-2"> Project Manager </button>
            <button class="w-max h-12 flex justify-center items-center border border-sky-600 text-black hover:bg-green-500 rounded-lg m-2 p-2"> Software Quality Assurance </button>
            <button class="w-max h-12 flex justify-center items-center border border-sky-600 text-black hover:bg-green-500 rounded-lg m-2 p-2"> Web Development </button>
        </div>
    </section>


    <!-- component -->
    <section class="bg-gray-200">
    <div class="block lg:py-24 relative bg-opacity-50 z-40">
        <div class="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                <div class="max-w-xl mx-auto text-center">
                    <div class="inline-flex px-4 py-1.5 mx-auto rounded-full">
                        <p class="text-4xl font-semibold tracking-widest text-g uppercase">Portfolios</p>
                    </div>
                    <p class="mt-4 text-base leading-relaxed text-gray-600">Click on the cards to see my portfolio of related categories</p>
                </div>
                <div class="grid grid-cols-1 gap-4 mt-12 md:grid-cols-3 lg:mt-20">
                    <a href="#"
                        class="transition-all duration-1000 bg-white hover:bg-green-500 hover:shadow-xl m-2 p-4 relative z-40 group">
                        <div
                            class="absolute bg-green-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2">
                        </div>
                        <div class="py-2 px-4 sm:px-6 md:px-9 relative">
                            <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white">Project Manager</h3>
                            <p class="mt-4 text-base text-gray-600 group-hover:text-white">
                                More than 1 year of experience as an IT Project Manager in a company engaged in software house/software development.
                            </p>
                        </div>
                    </a>
                    <a href="#"
                        class="transition-all duration-1000 bg-white hover:bg-green-500 hover:shadow-xl m-2 p-4 relative z-40 group">
                        <div
                            class="absolute bg-green-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2">
                        </div>
                        <div class="py-2 px-4 sm:px-6 md:px-9 relative">
                            <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white">Software Quality Assurance</h3>
                            <p class="mt-4 text-base text-gray-600 group-hover:text-white">
                                More than 2 years of experience as Software Quality Assurance in companies engaged in software development and SaaS (Software as a service).
                            </p>
                        </div>
                    </a>
                    <a href="#"
                        class="transition-all duration-1000 bg-white hover:bg-green-500 hover:shadow-xl m-2 p-4 relative z-40 group">
                        <div
                            class="absolute bg-green-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2">
                        </div>
                        <div class="py-2 px-4 sm:px-6 md:px-9 relative">
                            <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white">Web Development</h3>
                            <p class="mt-4 text-base text-gray-600 group-hover:text-white">
                                Experience as a freelance Software Engineer focusing on web development, building large-scale and complex applications.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>


</template>