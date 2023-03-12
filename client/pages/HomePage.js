import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPatterns } from '../store/patterns';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import { getRandom } from '../helpers';

const colors = ['bg-green-100', 'bg-pink-100', 'bg-orange-100'];

const Home = () => {
  const patterns = useSelector((state) => state.patterns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatterns());
  }, []);

  const featuredPatterns = patterns.length > 0 ? getRandom(patterns, 3) : [];

  return (
    <div>
      <header className="bg-[url('/images/header.jpg')] bg-center bg-cover">
        <div className="h-[60vh] lg:h-[80vh] flex flex-col justify-center items-center text-center">
          <h1 className="sm:text-7xl md:text-8xl lg:text-9xl textstroke text-yellow-200 mb-12 drop-shadow-[11px_11px_rgb(244,122,59)] ">
            Mei Crochet
          </h1>
          <Button
            backgroundColor="bg-yellow-200"
            textColor="text-orange-200"
            border="2"
            className="inline-block px-6 py-4"
          >
            <Link className="text-2xl" to="/shop">
              Shop All
            </Link>
          </Button>
        </div>
      </header>
      <div className="bg-brown-100 text-beige-200">
        <div className="relative flex overflow-x-hidden">
          <div className="font-serif text-3xl py-6 animate-marquee whitespace-nowrap">
            <span className="mx-4">Find your next project.</span>
            <span className="mx-4">Support pattern designers.</span>
            <span className="mx-4">Crochet the day away.</span>
            <span className="mx-4">Find your next project.</span>
            <span className="mx-4">Support pattern designers.</span>
            <span className="mx-4">Crochet the day away.</span>
          </div>

          <div className="font-serif text-3xl py-6 absolute top-0 animate-marquee2 whitespace-nowrap">
            <span className="mx-4">Find your next project.</span>
            <span className="mx-4">Support pattern designers.</span>
            <span className="mx-4">Crochet the day away.</span>
            <span className="mx-4">Find your next project.</span>
            <span className="mx-4">Support pattern designers.</span>
            <span className="mx-4">Crochet the day away.</span>
          </div>
        </div>
      </div>
      <Section backgroundColor="bg-beige-100" textColor="text-orange-300">
        <h2 className="text-center mb-6">Bust out the yarn</h2>
        <p className="text-2xl text-center mb-16">What are you waiting for?</p>
        <div className="flex flex-col md:flex-row gap-x-6 xl:gap-x-12">
          {featuredPatterns.map((pattern, el) => (
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
      <Section
        className="py-32"
        backgroundColor="bg-pink-200"
        textColor="text-beige-100"
      >
        <div>
          <h2 className="mb-16">How it works</h2>
          <div className="text-2xl leading-9">
            <div className="mb-14 flex">
              <span className="text-[4.5rem] font-bold mr-4">1</span>
              <p>
                Add items to your cart and checkout. No credit card needed, this
                site’s just for fun!
              </p>
            </div>
            <div className="mb-14 flex">
              <span className="text-[4.5rem] font-bold mr-4">2</span>
              <p>
                Checkout and you’ll receive a summary of links to all the
                crochet patterns you selected.
              </p>
            </div>
            <div className="flex">
              <span className="text-[4.5rem] font-bold mr-4">3</span>
              <p>
                Visit the links if you'd like to purchase them for real. There
                are plenty of free patterns to enjoy too!
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
