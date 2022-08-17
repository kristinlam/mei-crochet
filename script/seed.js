'use strict';

const {
  db,
  models: { User, Pattern },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Users
  const users = await Promise.all([
    User.create({ username: 'k', password: 'k' }),
  ]);

  // Patterns
  const patterns = await Promise.all([
    Pattern.create({
      title: 'Gingham Tote Bag',
      creator: 'HayHay Crochet',
      description:
        "A gingham tote bag, perfect for beginners. One you'll need to make in every color.",
      link: 'https://hayhaycrochet.com/crochet-patterns/accessories/crochet-gingham-tote-bag/',
      image:
        'https://hayhaycrochet.com/wp-content/uploads/2021/10/IMG_7066_jpg.jpg',
      price: 0,
    }),
    Pattern.create({
      title: 'Green Gingham Baby Blanket',
      creator: 'Daisy Farm Crafts',
      description:
        "A gingham tote bag, perfect for beginners. One you'll need to make in every color.",
      link: 'https://daisyfarmcrafts.com/crochet-green-gingham-blanket/',
      image:
        'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1520/https://daisyfarmcrafts.com/wp-content/uploads/2019/12/fullsizeoutput_3dde.jpeg',
      price: 0,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${patterns.length} patterns`);
  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
