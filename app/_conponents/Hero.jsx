import React from "react";

const Hero = () => {
  return (
    <>
      <section className="relative bg-[url(https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/25   "></div>

        <div className="relative mx-auto   max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left ">
            <h1 className="text-3xl text-stone-50 font-extrabold sm:text-5xl   text-start">
              Green Your Home
              <strong className="block font-extrabold text-emerald-500 ">
                {" "}
                Grow Your Happiness.{" "}
              </strong>
            </h1>

            <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed text-start">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-700 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-00 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
