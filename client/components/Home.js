import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPatterns } from '../store/patterns';
import { Link } from 'react-router-dom';

// Generate random patterns
function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError('getRandom: more elements taken than available');
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

const Home = () => {
  const patterns = useSelector((state) => state.patterns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatterns());
  }, [dispatch]);

  let featuredPatterns = [];
  if (patterns.length > 0) {
    featuredPatterns = getRandom(patterns, 4);
  }

  return (
    <div>
      <header className="bg-[url('/images/header.jpg')] bg-center bg-cover">
        <div className="h-[50vh] lg:h-[80vh] flex flex-col justify-center items-center	text-center">
          <h1 className="textstroke text-9xl font-semibold text-[#f7b8b8] drop-shadow-[11px_11px_rgb(0,0,0)]">
            Mei Crochet
          </h1>
          <h2 className="mb-4">Find your next crochet project</h2>
          <Link
            className="bg-green rounded-full border-2	border-black px-5 py-2"
            to="/shop"
          >
            Shop now
          </Link>
        </div>
      </header>
      <div className="bg-[#CAD62F]">
        <div className="relative flex overflow-x-hidden">
          <div className="py-6 animate-marquee whitespace-nowrap">
            <span className="text-4xl mx-4">Let's crochet the day away.</span>
            <span className="text-4xl mx-4">Let's crochet the day away.</span>
            <span className="text-4xl mx-4">Let's crochet the day away.</span>
          </div>

          <div className="py-6 absolute top-0 animate-marquee2 whitespace-nowrap">
            <span className="text-4xl mx-4">Let's crochet the day away.</span>
            <span className="text-4xl mx-4">Let's crochet the day away.</span>
            <span className="text-4xl mx-4">Let's crochet the day away.</span>
          </div>
        </div>
      </div>
      <section className="bg-beige flex flex-col items-center text-center py-20">
        <div className="w-5/6">
          <h2 className="mb-16">Patterns</h2>
          <div className="lg:flex lg:justify-around">
            {featuredPatterns?.map((pattern) => (
              <div key={pattern.id} className=" mb-10 lg:mb-0">
                <div className="border-2 border-black rounded-2xl overflow-hidden mx-auto w-96 h-96 lg:w-64 lg:h-64 xl:w-80 xl:h-80 mb-4 sm:mb-6">
                  <img
                    className="h-full w-full object-cover "
                    src={pattern.image}
                  />
                </div>
                {/* <h3 className="text-center">{pattern.name}</h3> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-orange flex flex-col items-center text-center py-20">
        <div className="w-5/6 lg:w-1/2">
          <h2 className="mb-16">How it works</h2>

          <p>
            Feel free to add items to your cart and checkout. No account or
            credit card needed, this site’s just for fun! On checkout, you’ll
            receive a summary with links to all the crochet patterns you wanted,
            which you can visit if you'd like to purchase them for real. There
            are plenty of free patterns to enjoy too, so go crazy!
          </p>
          <Link
            className="bg-green rounded-full border-2	border-black px-5 py-2"
            to="/about"
          >
            Learn more
          </Link>
        </div>
      </section>
      <footer>
        <p>Mei Crochet copyright</p>
      </footer>
    </div>
  );
};

export default Home;
