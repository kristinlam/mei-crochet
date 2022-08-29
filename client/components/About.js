import React from 'react';

const About = () => {
  return (
    <div>
      <div className="bg-pink-300 min-h-[70vh] flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex align-center">
          <img className="rounded-2xl object-cover" src="/images/about.jpg" />
        </div>
        <div className="lg:w-1/2 text-white flex flex-col justify-center px-6 md:px-8 lg:px-20">
          <h1 className="mb-8 text-yellow font-bold">Hey there!</h1>
          <p className="mb-4 text-lg">
            I'm Kristin, software engineer and aspiring crocheter. I wanted to
            hone my coding chops while making a groovy website and sharing my
            love for crochet. It's the best of both worlds!
          </p>

          <p className="mb-4 text-lg">
            Crochet is a wonderful way to unwind, reflect, and slow down. It
            brings together a lot of great things — a community of creative
            artists, an appreciation for slow (sometimes *really* slow) fashion,
            and handmade gifts from the heart. I hope you find your next project
            here!
          </p>
          <p className="text-lg">Happy crocheting, Kristin</p>
        </div>
      </div>

      <div className="bg-green-100 py-10 md:flex">
        <div className="text-center md:w-1/3">
          <h3>1. Add items to cart</h3>
          <p>Go nuts!</p>
        </div>
        <div className="text-center md:w-1/3">
          <h3>2. Checkout</h3>
          <p>No account or credit card needed. This site's just for fun!</p>
        </div>
        <div className="text-center md:w-1/3">
          <h3>3. Support the artists</h3>
          <p>
            On the confirmation page, you'll get a list of links to all the
            crochet patterns you checked out. Support the artists by purchasing
            their patterns!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
