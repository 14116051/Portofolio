<script setup lang="ts">
    import { ref } from 'vue';
    

    const isDropdownOpen = ref(false);
    const toggleDropdown = () => {
        isDropdownOpen.value = !isDropdownOpen.value;
    };
</script>

<template>
    
    <section class= "max-h-screen">
        <div class="grid grid-cols-12 py-8 bg-gray-200 lg:h-screen">
            <!-- Main Content -->
            <div class="col-span-12 sm:col-span-6 flex justify-center items-center pb-4 lg:pb-0">
                <img class="object-cover lg:h-96" src="https://pic.onlinewebfonts.com/thumbnails/icons_420864.svg"/>
            </div>
            <!-- Sidebar -->
            <div class="col-span-12 sm:col-span-6 flex justify-center items-center pt-4 lg:pt-0">
                <div class=" grid grid-rows-3">
                    <div> 
                        <h1 class="text-4xl font-semibold tracking-widest text-g uppercase"> Ilham </h1> 
                    </div>
                    <div> 
                        <h2> Project Manager | Software Engineer</h2> 
                    </div>
                    <div class="grid grid-cols-2 gap-2 relative">
                        <!-- CV Button with Dropdown -->
                        <div class="relative">
                            <button @click="toggleDropdown" class="px-3 w-full md:px-4 py-1 md:py-2 border border-sky-600 text-black rounded-lg hover:bg-green-500 flex justify-between items-center">
                                <span>CV</span>
                                <i class="fa-solid fa-arrow-circle-down ml-2"></i>
                            </button>
                            <div v-if="isDropdownOpen" class="absolute left-0 mt-2 bg-gray-200 border border-gray-300 rounded-lg shadow-lg z-10 w-max">
                                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"> <i class="fa-solid fa-file-alt"></i> CV-Project Manager</a>
                                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"> <i class="fa-solid fa-file-alt"></i> CV-Software Engineer</a>
                            </div>
                        </div>
                        <!-- Contact Button -->
                        <button class="px-3 md:px-4 py-1 md:py-2 border border-sky-600 text-black rounded-lg hover:bg-green-500">
                        <a href="https://wa.me/+6282271056498">Contact</a> <i class="fa-solid fa-envelope ml-2"></i>
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

    <!-- <section class="mt-2 bg-gray-200">
        <div  class="flex flex-col justify-center items-center h-32" >
            <h1 class="text-3xl"> Portofolios </h1>
            <h2 class="text-center">Click on the cards to see my portofolio of related category</h2>
        </div>

        

    </section> -->

    <!-- component -->
<section class=" bg-gray-200">
        <div class="block lg:py-24 relative bg-opacity-50 z-40" >
            <div class="relative mx-auto h-full px-4 pb-20  md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                    <div class="max-w-xl mx-auto text-center">
                        <div class="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                            <p class="text-4xl font-semibold tracking-widest text-g uppercase">Portofolios</p>
                        </div>
                        <p class="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white">Click on the cards to see my portofolio of related category</p>
                    </div>
                    <div class="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20">
                        <a href="#"
                            class="transition-all  duration-1000 bg-white hover:bg-green-500  hover:shadow-xl m-2 p-4 relative z-40 group  ">
                            <div
                                class=" absolute  bg-green-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  ">
                            </div>
                            <div class="py-2 px-9 relative  ">

                                <!-- <svg class="w-16 h-16 fill-gray-400 group-hover:fill-white"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="polo-tshirt">
                                    <path d="m16.962 5.841 3.582.717-.716-4.115zM12.172 2.443l-.716 4.115 3.582-.717z">
                                    </path>
                                    <path
                                        d="M28.488 7.301a5.354 5.354 0 0 0-2.743-3.305c-.112-.056-2.96-1.2-4.942-1.996l.87 4.987a.52.52 0 0 1-.488.746.535.535 0 0 1-.101-.01L16.5 6.806V12a.5.5 0 1 1-1 0V6.806l-4.583.917a.518.518 0 0 1-.613-.598L11.196 2c-1.982.796-4.828 1.94-4.94 1.996a5.36 5.36 0 0 0-2.75 3.328l-1.492 6.26c-.042.175.01.359.138.486l.608.608a5.487 5.487 0 0 0 3.907 1.618c.196 0 .375-.111.464-.287l1.072-2.145c.013.292.02.584.02.876V28.48c0 .231.153.435.375.499A27.03 27.03 0 0 0 16 30c2.508 0 5.015-.34 7.402-1.022a.52.52 0 0 0 .376-.5V14.74c0-.292.006-.584.019-.876l1.073 2.145a.519.519 0 0 0 .463.287 5.487 5.487 0 0 0 3.907-1.618l.608-.608a.518.518 0 0 0 .138-.487l-1.498-6.282zM17.03 11.5c-.276 0-.505-.224-.505-.5s.219-.5.495-.5h.01a.5.5 0 0 1 0 1zm0-2c-.276 0-.505-.224-.505-.5s.219-.5.495-.5h.01a.5.5 0 0 1 0 1z">
                                    </path>
                                </svg> -->
                                <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white ">Project Manager</h3>
                                <p class="mt-4 text-base text-gray-600 group-hover:text-white"> 
                                    More than 1 years of experience as an IT Project Manager in a company engaged in software house/software development.
                                </p>
                            </div>
                        </a>

                        <a href="#"
                            class="transition-all  duration-1000 bg-white hover:bg-green-500  hover:shadow-xl m-2 p-4 relative z-40 group  ">
                            <div
                                class=" absolute  bg-green-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  ">
                            </div>
                            <div class="py-2 px-9 relative  ">

                                <!-- <svg class="w-16 h-16 fill-gray-400 group-hover:fill-white"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="polo-tshirt">
                                    <path d="m16.962 5.841 3.582.717-.716-4.115zM12.172 2.443l-.716 4.115 3.582-.717z">
                                    </path>
                                    <path
                                        d="M28.488 7.301a5.354 5.354 0 0 0-2.743-3.305c-.112-.056-2.96-1.2-4.942-1.996l.87 4.987a.52.52 0 0 1-.488.746.535.535 0 0 1-.101-.01L16.5 6.806V12a.5.5 0 1 1-1 0V6.806l-4.583.917a.518.518 0 0 1-.613-.598L11.196 2c-1.982.796-4.828 1.94-4.94 1.996a5.36 5.36 0 0 0-2.75 3.328l-1.492 6.26c-.042.175.01.359.138.486l.608.608a5.487 5.487 0 0 0 3.907 1.618c.196 0 .375-.111.464-.287l1.072-2.145c.013.292.02.584.02.876V28.48c0 .231.153.435.375.499A27.03 27.03 0 0 0 16 30c2.508 0 5.015-.34 7.402-1.022a.52.52 0 0 0 .376-.5V14.74c0-.292.006-.584.019-.876l1.073 2.145a.519.519 0 0 0 .463.287 5.487 5.487 0 0 0 3.907-1.618l.608-.608a.518.518 0 0 0 .138-.487l-1.498-6.282zM17.03 11.5c-.276 0-.505-.224-.505-.5s.219-.5.495-.5h.01a.5.5 0 0 1 0 1zm0-2c-.276 0-.505-.224-.505-.5s.219-.5.495-.5h.01a.5.5 0 0 1 0 1z">
                                    </path>
                                </svg> -->
                                <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white ">Software Quality Assurance</h3>
                                <p class="mt-4 text-base text-gray-600 group-hover:text-white  ">
                                    More than 2 years of experience as Software Quality Assurance in companies engaged in software development and SaaS (Software as a service).
                                </p>
                            </div>
                        </a>

                        <a href="#"
                            class="transition-all  duration-1000 bg-white hover:bg-green-500  hover:shadow-xl m-2 p-4 relative z-40 group  ">
                            <div
                                class=" absolute  bg-green-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  ">
                            </div>
                            <div class="py-2 px-9 relative  ">

                                <!-- <svg class="w-16 h-16 fill-gray-400 group-hover:fill-white"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="polo-tshirt">
                                    <path d="m16.962 5.841 3.582.717-.716-4.115zM12.172 2.443l-.716 4.115 3.582-.717z">
                                    </path>
                                    <path
                                        d="M28.488 7.301a5.354 5.354 0 0 0-2.743-3.305c-.112-.056-2.96-1.2-4.942-1.996l.87 4.987a.52.52 0 0 1-.488.746.535.535 0 0 1-.101-.01L16.5 6.806V12a.5.5 0 1 1-1 0V6.806l-4.583.917a.518.518 0 0 1-.613-.598L11.196 2c-1.982.796-4.828 1.94-4.94 1.996a5.36 5.36 0 0 0-2.75 3.328l-1.492 6.26c-.042.175.01.359.138.486l.608.608a5.487 5.487 0 0 0 3.907 1.618c.196 0 .375-.111.464-.287l1.072-2.145c.013.292.02.584.02.876V28.48c0 .231.153.435.375.499A27.03 27.03 0 0 0 16 30c2.508 0 5.015-.34 7.402-1.022a.52.52 0 0 0 .376-.5V14.74c0-.292.006-.584.019-.876l1.073 2.145a.519.519 0 0 0 .463.287 5.487 5.487 0 0 0 3.907-1.618l.608-.608a.518.518 0 0 0 .138-.487l-1.498-6.282zM17.03 11.5c-.276 0-.505-.224-.505-.5s.219-.5.495-.5h.01a.5.5 0 0 1 0 1zm0-2c-.276 0-.505-.224-.505-.5s.219-.5.495-.5h.01a.5.5 0 0 1 0 1z">
                                    </path>
                                </svg> -->
                                <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white ">Web Development
                                </h3>
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