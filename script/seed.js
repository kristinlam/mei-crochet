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
    {
      name: 'Butterfly Crochet Top',
      creator: 'Sheila • Shyler Crochets',
      description:
        'This pattern is very versatile as one size can fit several sizes!',
      link: 'https://shylercrochets.com/product/butterfly-crochet-top-2/',
      image:
        'https://shylercrochets.com/wp-content/uploads/2022/01/2BCFB0D1-35D0-4C91-B5A1-3BD521F5C291-scaled.jpeg',
      price: 800,
    },
    {
      name: 'Smiley Face Granny Square',
      creator: 'Krysten • yarnTh3ory',
      description:
        'This smiley face motif kept popping up everywhere and I knew immediately that I wanted to recreate it using braided cotton cord. I chose this fiber because I wanted to make a project that held its shape and that could hold up to frequent use.You may have noticed from my previous tutorials that this cord is one of my go to fibers to use for a variety of projects.',
      link: 'https://www.yarnth3ory.com/post/tutorial-smiley-face-granny-square',
      image:
        'https://static.wixstatic.com/media/86bc9b_2c1d860b2fa3449bbcfb54c009b28fbb~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/86bc9b_2c1d860b2fa3449bbcfb54c009b28fbb~mv2.jpg',
      price: 0,
    },
    {
      name: 'Sweetheart Top',
      creator: 'Molly Tooher-Rudd • Made by Molly',
      description: 'Retro styled heart halter top with bold, groovy colors.',
      link: 'https://ribblr.com/pattern/sweetheart-top-crochet',
      image:
        'https://storage.googleapis.com/ribblr-disk/pics/9169/cover-41rspyjfe5.jpg',
      price: 664,
    },
    {
      name: 'Duck Bag',
      creator: '霭井 on Xiaohongshu',
      description:
        'Originally posted by 霭井 on Xiaohongshu, a Chinese social media and e-commerce platform. Translated by @strawberriucrochets on Instagram.',
      link: 'https://drive.google.com/file/d/1OZi-z1tsWVZuiczspcFPngKYIpR0DmV9/view',
      price: 0,
    },
    {
      name: 'TikTok Viral Crochet Bralette',
      creator: 'Made by BJax',
      description: 'Colorful and fun bralette!',
      link: 'https://www.youtube.com/watch?v=QXa9Zeak-TQ',
      price: 0,
    },
    {
      name: '3D Flower Granny Square Bucket Hat',
      creator: 'Mellinsomnia',
      description:
        'Make yourself a perfect #buckethat for any season. If you want something unique, cute, and to make a statement, this hat is for you.',
      link: 'https://www.youtube.com/watch?v=QXa9Zeak-TQ',
      price: 0,
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
