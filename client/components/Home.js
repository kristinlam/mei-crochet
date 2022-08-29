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

const colors = ['bg-green-100', 'bg-pink-300', 'bg-orange-100'];

const Home = () => {
  const patterns = useSelector((state) => state.patterns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatterns());
  }, [dispatch]);

  let featuredPatterns = [];
  if (patterns.length > 0) {
    featuredPatterns = getRandom(patterns, 3);
  }

  return (
    <div>
      <header className="bg-[url('/images/header.jpg')] bg-center bg-cover">
        <div className="h-[50vh] lg:h-[75vh] flex flex-col justify-center items-center text-center">
          <h1 className="textstroke text-9xl font-bold text-yellow drop-shadow-[11px_11px_rgb(244,122,59)]">
            Mei Crochet
          </h1>
          <div className="mt-12 inline-block bg-yellow text-orange-200 drop-shadow-[6px_6px_rgb(244,122,59)] rounded-full border-2 px-6 py-4">
            <Link className="text-2xl" to="/shop">
              Shop All
            </Link>
          </div>
        </div>
      </header>
      <div className="bg-green-200 text-beige">
        <div className="relative flex overflow-x-hidden">
          <div className="py-6 animate-marquee whitespace-nowrap">
            <span className="text-4xl mx-4">Find your next project.</span>
            <span className="text-4xl mx-4">Support pattern designers.</span>
            <span className="text-4xl mx-4">Crochet the day away.</span>
            <span className="text-4xl mx-4">Find your next project.</span>
            <span className="text-4xl mx-4">Support pattern designers.</span>
            <span className="text-4xl mx-4">Crochet the day away.</span>
          </div>

          <div className="py-6 absolute top-0 animate-marquee2 whitespace-nowrap">
            <span className="text-4xl mx-4">Find your next project.</span>
            <span className="text-4xl mx-4">Support pattern designers.</span>
            <span className="text-4xl mx-4">Crochet the day away.</span>
            <span className="text-4xl mx-4">Find your next project.</span>
            <span className="text-4xl mx-4">Support pattern designers.</span>
            <span className="text-4xl mx-4">Crochet the day away.</span>
          </div>
        </div>
      </div>
      <section className="bg-yellow text-orange-300 py-20 flex flex-col items-center text-center justify-center">
        <h2 className="mb-12 font-bold">Patterns</h2>

        <div className="inline-block lg:flex gap-x-6 xl:gap-x-14">
          {featuredPatterns?.map((pattern, el) => (
            <div
              key={pattern.id}
              className={`${colors[el]} p-6 lg:flex-1 mb-10 lg:mb-0 rounded-md mb-4 sm:mb-6`}
            >
              <div className="overflow-hidden mx-auto w-96 h-96 lg:w-64 lg:h-64 xl:w-[25rem] xl:h-[25rem]">
                <img
                  className="rounded h-full w-full object-cover"
                  src={pattern.image}
                />
              </div>
              {/* <div className="mt-6 text-center">
                <h3 className="px-2 text-xl">{pattern.name}</h3>
              </div> */}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-pink-100 text-orange-300 flex flex-col items-center text-center py-20">
        <div className="w-5/6 lg:w-1/2 xl:w-1/3">
          <h2 className="mb-8 font-bold">How it works</h2>
          <p className="text-xl mb-6">
            Feel free to add items to your cart and checkout. No account or
            credit card needed, this site’s just for fun! On checkout, you’ll
            receive a summary with links to all the crochet patterns you wanted,
            which you can visit if you'd like to purchase them for real. There
            are plenty of free patterns to enjoy too!
          </p>
          <div className="inline-block bg-yellow text-orange-200 drop-shadow-[3px_3px_rgb(244,122,59)] rounded-full border-2 px-5 py-2">
            <Link to="/about">Learn more</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
