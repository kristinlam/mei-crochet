import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPatterns } from '../store/patterns';

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
    featuredPatterns = getRandom(patterns, 3);
  }

  return (
    <div>
      <header className="flex">
        <div className="bg-pink flex flex-col justify-center items-center	flex-1">
          <h1>Welcome to Mei Crochet</h1>
          <h2>Find your next crochet project</h2>
          <button className="bg-green rounded-full border-2	border-black px-5 py-2">
            Shop now
          </button>
        </div>
        <div className="flex-1">
          <img alt="header" src="./images/header.jpg" />
        </div>
      </header>
      <div className="bg-green p-x-4">
        <p>
          Let's crochet the day away. Let's crochet the day away. Let's crochet
          the day away. Let's crochet the day away.
        </p>
      </div>
      <section className="bg-beige flex justify-around">
        {featuredPatterns?.map((pattern) => (
          <div key={pattern.id}>
            <div className="w-96 h-96">
              <img
                className="h-full w-full object-cover border-8  border-orange rounded-2xl"
                src={pattern.image}
              />
            </div>
            <h3 className="text-center">{pattern.name}</h3>
          </div>
        ))}
      </section>
      <section className="bg-orange flex flex-col items-center">
        <p>
          Feel free to add items to your cart and checkout. No account or credit
          card needed, this site’s just for fun! On checkout, you’ll receive a
          summary with links to all the crochet patterns you wanted, which you
          can visit if you'd like to purchase them for real. There are plenty of
          free patterns to enjoy too, so go crazy!
        </p>
        <button className="bg-green rounded-full border-2	border-black px-5 py-2">
          Learn more
        </button>
      </section>
    </div>
  );
};

export default Home;
