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
  const users = [
    { username: 'a', password: 'a', isAdmin: true },
    { username: 'u', password: 'u' },
  ];
  const [admin, user] = await Promise.all(
    users.map((user) => User.create(user))
  );

  // Patterns
  const patterns = [
    {
      name: 'Gingham Tote Bag',
      creator: 'Heather • HayHay Crochet',
      description:
        "A gingham tote bag, perfect for beginners to intermediate beginners. Once you learn how to color change, you'll need to make this in every color.",
      link: 'https://hayhaycrochet.com/crochet-patterns/accessories/crochet-gingham-tote-bag/',
      image:
        'https://hayhaycrochet.com/wp-content/uploads/2021/10/IMG_7066_jpg.jpg',
      price: 0,
    },
    {
      name: 'Green Gingham Baby Blanket',
      creator: 'Tiffany & Hannah • Daisy Farm Crafts',
      description:
        "A gender neutral baby blanket for beginners to intermediate beginners. Color changing is required, but with the help of the in-depth video, you'll pick it up fast.",
      link: 'https://daisyfarmcrafts.com/crochet-green-gingham-blanket/',
      image:
        'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1520/https://daisyfarmcrafts.com/wp-content/uploads/2019/12/fullsizeoutput_3dde.jpeg',
      price: 0,
    },
    {
      name: 'Juliette Corset',
      creator: 'An Vo • IWillCrochet',
      description:
        'The Juliette Corset is suitable for intermediate beginner crocheters. This design uses aran-weight yarn and the combination of two basic crochet stitches: half double crochet and slip stitch to create the perfect cottage-core aesthetic.',
      link: 'https://www.etsy.com/listing/1167819054/juliette-corset-crochet-cottagecore',
      image:
        'https://i.etsystatic.com/28015370/r/il/24f8ac/3727045219/il_794xN.3727045219_mri4.jpg',
      price: 796,
    },
  ];
  const createdPatterns = await Promise.all(
    patterns.map((pattern) => Pattern.create(pattern))
  );

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
