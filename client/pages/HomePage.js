import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPatterns } from '../store/patterns';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';

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
  }, []);

  let featuredPatterns = [];
  if (patterns.length > 0) {
    featuredPatterns = getRandom(patterns, 3);
  }

  return (
    <div>
      <header className="bg-[url('/images/header.jpg')] bg-center bg-cover">
        <div className="h-[50vh] lg:h-[75vh] flex flex-col justify-center items-center text-center">
          <h1 className="sm:text-7xl md:text-8xl lg:text-9xl textstroke text-yellow mb-12 drop-shadow-[11px_11px_rgb(244,122,59)] ">
            Mei Crochet
          </h1>
          <Button
            backgroundColor="bg-yellow"
            textColor="text-orange-200"
            border="2"
            className="inline-block"
          >
            <Link className="text-2xl" to="/shop">
              Shop All
            </Link>
          </Button>
        </div>
      </header>
      <div className="bg-green-200 text-beige-200">
        <div className="relative flex overflow-x-hidden">
          <div className="font-serif py-6 animate-marquee whitespace-nowrap">
            <span className="text-4xl mx-4">Find your next project.</span>
            <span className="text-4xl mx-4">Support pattern designers.</span>
            <span className="text-4xl mx-4">Crochet the day away.</span>
            <span className="text-4xl mx-4">Find your next project.</span>
            <span className="text-4xl mx-4">Support pattern designers.</span>
            <span className="text-4xl mx-4">Crochet the day away.</span>
          </div>

          <div className="font-serif py-6 absolute top-0 animate-marquee2 whitespace-nowrap">
            <span className="text-4xl mx-4">Find your next project.</span>
            <span className="text-4xl mx-4">Support pattern designers.</span>
            <span className="text-4xl mx-4">Crochet the day away.</span>
            <span className="text-4xl mx-4">Find your next project.</span>
            <span className="text-4xl mx-4">Support pattern designers.</span>
            <span className="text-4xl mx-4">Crochet the day away.</span>
          </div>
        </div>
      </div>
      <Section backgroundColor="bg-yellow" textColor="text-orange-300">
        <h2 className="mb-12">Patterns</h2>
        <div className="max-w-screen-2xl flex flex-col md:flex-row gap-x-6 xl:gap-x-12">
          {featuredPatterns?.map((pattern, el) => (
            <div
              key={pattern.id}
              className={`${colors[el]} p-5 flex-1 rounded-md mb-4 sm:mb-6 lg:mb-0`}
            >
              <div>
                <img
                  className="object-cover w-full aspect-square rounded"
                  src={pattern.image}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section backgroundColor="bg-pink-100" textColor="text-orange-300">
        <div className="max-w-screen-sm">
          <h2 className="mb-8">How it works</h2>
          <p className="text-xl">
            Feel free to add items to your cart and checkout. No account or
            credit card needed, this site’s just for fun! On checkout, you’ll
            receive a summary with links to all the crochet patterns you wanted,
            which you can visit if you'd like to purchase them for real. There
            are plenty of free patterns to enjoy too!
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Home;
