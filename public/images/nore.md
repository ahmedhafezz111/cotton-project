     <div id="default-carousel" class="relative w-full" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-64 overflow-hidden"> <!-- Reduced height here -->
                <!-- Slides -->
                <div class="hidden " data-carousel-item>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 h-full"> <!-- Slightly reduced padding -->
                        <!-- Card 1 -->
                        <a href="#" class="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors h-full p-3">
                            <div class="flex flex-col justify-center items-center h-full text-center">
                                <h3 class="mb-1 text-base font-semibold text-gray-800">Service x</h3>
                                <p class="text-sm text-gray-600">Custom-tailored packages for your needs.</p>
                            </div>
                        </a>
        
                        <!-- Card 2 -->
                        <a href="#" class="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors h-full p-3">
                            <div class="flex flex-col justify-center items-center h-full text-center">
                                <h3 class="mb-1 text-base font-bold text-gray-800">Service Two</h3>
                                <p class="text-sm text-gray-600">Advanced solutions for complex business challenges.</p>
                            </div>
                        </a>
        
                        <!-- Card 3 -->
                        <a href="#" class="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors h-full p-3">
                            <div class="flex flex-col justify-center items-center h-full text-center">
                                <h3 class="mb-1 text-base font-bold text-gray-800">Service Three</h3>
                                <p class="text-sm text-gray-600">Custom-tailored packages for your specific needs.</p>
                            </div>
                        </a>
                    </div>
                </div>
        
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 h-full">
                        <!-- Card 4 -->
                        <a href="#" class="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors h-full p-3">
                            <div class="flex flex-col justify-center items-center h-full text-center">
                                <h3 class="mb-1 text-base font-bold text-gray-800">Service Four</h3>
                                <p class="text-sm text-gray-600">Innovative approaches for digital transformation.</p>
                            </div>
                        </a>
        
                        <!-- Card 5 -->
                        <a href="#" class="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors h-full p-3">
                            <div class="flex flex-col justify-center items-center h-full text-center">
                                <h3 class="mb-1 text-base font-bold text-gray-800">Service Five</h3>
                                <p class="text-sm text-gray-600">Comprehensive analysis and strategy development.</p>
                            </div>
                        </a>
        
                        <!-- Card 6 -->
                        <a href="#" class="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors h-full p-3">
                            <div class="flex flex-col justify-center items-center h-full text-center">
                                <h3 class="mb-1 text-base font-bold text-gray-800">Service Six</h3>
                                <p class="text-sm text-gray-600">End-to-end implementation and support services.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        
            <!-- Slider indicators -->
            <div class="absolute z-30 flex -translate-x-1/2 bottom-[-10px] left-1/2 space-x-3 rtl:space-x-reverse ">
                <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400" data-carousel-slide-to="1"></button>
            </div>
        
            <!-- Slider controls -->
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/80 group-hover:bg-white/90 transition-colors shadow-sm">
                    <i class="fa-solid fa-arrow-right text-gray-700 text-sm border p-[8px] border-[#2b3c4f] rounded-full"></i>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/80 group-hover:bg-white/90 transition-colors shadow-sm">
                    <i class="fa-solid fa-arrow-left text-gray-700 text-sm border p-[8px] border-[#2b3c4f] rounded-full"></i>
                </span>
            </button>
        </div>