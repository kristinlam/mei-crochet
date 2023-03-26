'use strict';

const {
  db,
  models: { User, Pattern, Order },
} = require('../server/db');

const users = [
  { username: 'a', password: 'a', isAdmin: true },
  { username: 'b', password: 'b', isAdmin: true },
  { username: 'c', password: 'c', isAdmin: true },
  { username: 'd', password: 'd' },
  { username: 'e', password: 'e' },
  { username: 'f', password: 'f' },
  { username: 'g', password: 'g' },
  { username: 'h', password: 'h' },
];

const orders = [
  { isFulfilled: true, totalCost: 2500 },
  { isFulfilled: true, totalCost: 4000 },
  { isFulfilled: false, totalCost: 0 },
  { isFulfilled: false, totalCost: 0 },
];

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
    name: 'Duille Scarf',
    creator: 'Carrie • Crochet with Carrie',
    description:
      'Designed to be extra oversized, this scarf will blanket you in so much coziness this winter. The word Duille [dil-a] is Irish and translates to “leaf” in English.',
    link: 'https://www.crochetwithcarrie.com/crochet-duille-scarf/',
    image:
      'https://www.crochetwithcarrie.com/wp-content/uploads/2022/01/crochet-scarf.jpg',
    price: 0,
  },
  {
    name: 'Daisy Bucket Hat',
    creator: 'Yawning Yarning Crochet',
    description: 'A cute bucket hat with 3D daisies on the sides.',
    link: 'https://www.youtube.com/watch?v=T1IBjMd_Z9I',
    image: 'https://cf.shopee.com.my/file/2da10245e075af0bf037ef204ca3be1f',
    price: 0,
  },
];

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  await Promise.all(users.map((user) => User.create(user)));
  await Promise.all(patterns.map((pattern) => Pattern.create(pattern)));
  await Promise.all(orders.map((order) => Order.create(order)));

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${patterns.length} patterns`);
  console.log(`seeded ${orders.length} orders`);
  console.log(`seeded successfully`);
}

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

if (module === require.main) {
  runSeed();
}

module.exports = seed;
