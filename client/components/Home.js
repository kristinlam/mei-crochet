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
      <header>
        <h1>Welcome to Mei Crochet</h1>
        <h2>Find your next crochet project</h2>
        <button>Shop now</button>
      </header>
      <section>
        {featuredPatterns?.map((pattern) => (
          <div key={pattern.id}>
            <div style={{ width: '20rem', height: '20rem' }}>
              <img
                src={pattern.image}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h3>{pattern.name}</h3>
          </div>
        ))}
      </section>
      <section>
        <div>Image to go here</div>
        <div>
          <p>
            Feel free to add items to your cart and checkout. No account or
            credit card needed, this site’s just for fun! On checkout, you’ll
            receive a summary with links to all the crochet patterns you wanted,
            which you can visit if you'd like to purchase them for real. There
            are plenty of free patterns to enjoy too, so go crazy!
          </p>
          <button>Learn more</button>
        </div>
        <div>
          <p>Animated text will go here. Let's crochet the day away.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
