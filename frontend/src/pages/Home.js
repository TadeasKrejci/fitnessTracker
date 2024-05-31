const Home = () => {
  return (
    <div>
      <section class="bg-gray-800 text-white">
        <div class="grid max-w-screen-xl px-4 pt-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 ">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class=" mb-4 font-extrabold tracking-normal leading-none ">
              Zůstaň fit s naší <span className="text-blue-400">software</span>{" "}
              aplikací!
            </h1>
            <p class="max-w-2xl mb-6 font-light  lg:mb-8">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <a
              href="#s"
              class="inline-flex items-center justify-center px-5 py-3 mr-3  font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Pojďme začít
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#ss"
              class="inline-flex items-center justify-center px-5 py-3 font-medium text-center border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  dark:focus:ring-gray-800"
            >
              Informace
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="hero.png" alt="mockup" />
          </div>
        </div>
      </section>
      <div className="bg-gray-900  text-white py-20">
        <div className="container flex items-center justify-center flex-col text-center gap-8">
          <h2 className="max-w-[800px] tracking-normal font-black">
            <span className="text-blue-400">"Nejlepší"</span> fitness tracker v
            Hranicích na Moravě, připoj se k nám!
          </h2>
          {/*           <svg
            width="206"
            height="4"
            viewBox="0 0 206 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="2"
              x2="206"
              y2="2"
              stroke="rgb(96 165 250)"
              stroke-width="4"
            />
          </svg> */}
          <p className="max-w-[600px] text-[#94a3b8] font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatibus ipsa voluptatum nobis velit sunt numquam veritatis fuga
            cum ut?
          </p>
          <button className="bg-blue-400 px-8 py-6 rounded-3xl font-bold hover:bg-gray-600 duration-300">
            Registrovat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
