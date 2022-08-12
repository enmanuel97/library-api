'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowling',
        resume: 'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, and then, on his birthday next year, he must face a new threat from the evil Lord Voldemort. ',
        publiched_at: new Date(),
      },
      {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        resume: 'Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling. The second novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, and then, on his birthday next year, he must face a new threat from the evil Lord Voldemort. ',
        publiched_at: new Date(),
      },
      {
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J.K. Rowling',
        resume: 'Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling. The third novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, and then, on his birthday next year, he must face a new threat from the evil Lord Voldemort. ',
        publiched_at: new Date(),
      },
      {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K. Rowling',
        resume: 'Harry Potter and the Goblet of Fire is a fantasy novel written by British author J. K. Rowling. The fourth novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, and then, on his birthday next year, he must face a new threat from the evil Lord Voldemort. ',
        publiched_at: new Date(),
      },
      {
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K. Rowling',
        resume: 'Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling. The fifth novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, and then, on his birthday next year, he must face a new threat from the evil Lord Voldemort. ',
        publiched_at: new Date(),
      },
      {
        title: 'Harry Potter and the Half-Blood Prince',
        author: 'J.K. Rowling',
        resume: 'Harry Potter and the Half-Blood Prince is a fantasy novel written by British author J. K. Rowling. The sixth novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, and then, on his birthday next year, he must face a new threat from the evil Lord Voldemort. ',
        publiched_at: new Date(),
      },
      {
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J.K. Rowling',
        resume: 'Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling. The seventh novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, and then, on his birthday next year, he must face a new threat from the evil Lord Voldemort. ',
        publiched_at: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('Pages', [
      {
        book_id: 1,
        content: 'Harry Potter and the Philosopher\'s Stone page 1.',
      },
      {
        book_id: 1,
        content: 'Harry Potter and the Philosopher\'s Stone page 2.',
      },
      {
        book_id: 1,
        content: 'Harry Potter and the Philosopher\'s Stone page 3.',
      },
      {
        book_id: 1,
        content: 'Harry Potter and the Philosopher\'s Stone page 4.',
      },
      {
        book_id: 1,
        content: 'Harry Potter and the Philosopher\'s Stone page 5.',
      },
      {
        book_id: 1,
        content: 'Harry Potter and the Philosopher\'s Stone page 6.',
      },
      {
        book_id: 1,
        content: 'Harry Potter and the Philosopher\'s Stone page 7.',
      },
      {
        book_id: 1,
        content: 'Harry Potter and the Philosopher\'s Stone page 8.',
      },
      {
        book_id: 1,
        content: 'Harry Potter and the Philosopher\'s Stone page 9.',
      },
      {
        book_id: 1,
        content: 'Harry Potter and the Philosopher\'s Stone page 10.',
      },
      {
        book_id: 2,
        content: 'Harry Potter and the Chamber of Secrets page 1.',
      },
      {
        book_id: 2,
        content: 'Harry Potter and the Chamber of Secrets page 2.',
      },
      {
        book_id: 2,
        content: 'Harry Potter and the Chamber of Secrets page 3.',
      },
      {
        book_id: 2,
        content: 'Harry Potter and the Chamber of Secrets page 4.',
      },
      {
        book_id: 2,
        content: 'Harry Potter and the Chamber of Secrets page 5.',
      },
      {
        book_id: 2,
        content: 'Harry Potter and the Chamber of Secrets page 6.',
      },
      {
        book_id: 2,
        content: 'Harry Potter and the Chamber of Secrets page 7.',
      },
      {
        book_id: 2,
        content: 'Harry Potter and the Chamber of Secrets page 8.',
      },
      {
        book_id: 2,
        content: 'Harry Potter and the Chamber of Secrets page 9.',
      },
      {
        book_id: 2,
        content: 'Harry Potter and the Chamber of Secrets page 10.',
      },
      {
        book_id: 3,
        content: 'Harry Potter and the Prisoner of Azkaban page 1.',
      },
      {
        book_id: 3,
        content: 'Harry Potter and the Prisoner of Azkaban page 2.',
      },
      {
        book_id: 3,
        content: 'Harry Potter and the Prisoner of Azkaban page 3.',
      },
      {
        book_id: 3,
        content: 'Harry Potter and the Prisoner of Azkaban page 4.',
      },
      {
        book_id: 3,
        content: 'Harry Potter and the Prisoner of Azkaban page 5.',
      },
      {
        book_id: 3,
        content: 'Harry Potter and the Prisoner of Azkaban page 6.',
      },
      {
        book_id: 3,
        content: 'Harry Potter and the Prisoner of Azkaban page 7.',
      },
      {
        book_id: 3,
        content: 'Harry Potter and the Prisoner of Azkaban page 8.',
      },
      {
        book_id: 3,
        content: 'Harry Potter and the Prisoner of Azkaban page 9.',
      },
      {
        book_id: 3,
        content: 'Harry Potter and the Prisoner of Azkaban page 10.',
      },
      {
        book_id: 4,
        content: 'Harry Potter and the Goblet of Fire page 1.',
      },
      
      {
        book_id: 4,
        content: 'Harry Potter and the Goblet of Fire page 2.',
      },
      {
        book_id: 4,
        content: 'Harry Potter and the Goblet of Fire page 3.',
      },
      {
        book_id: 4,
        content: 'Harry Potter and the Goblet of Fire page 4.',
      },
      {
        book_id: 4,
        content: 'Harry Potter and the Goblet of Fire page 5.',
      },
      {
        book_id: 4,
        content: 'Harry Potter and the Goblet of Fire page 6.',
      },
      {
        book_id: 4,
        content: 'Harry Potter and the Goblet of Fire page 7.',
      },
      {
        book_id: 4,
        content: 'Harry Potter and the Goblet of Fire page 8.',
      },
      {
        book_id: 4,
        content: 'Harry Potter and the Goblet of Fire page 9.',
      },
      {
        book_id: 4,
        content: 'Harry Potter and the Goblet of Fire page 10.',
      },
      {
        book_id: 5,
        content: 'Harry Potter and the Order of the Phoenix page 1.',
      },
      {
        book_id: 5,
        content: 'Harry Potter and the Order of the Phoenix page 2.',
      },
      {
        book_id: 5,
        content: 'Harry Potter and the Order of the Phoenix page 3.',
      },
      {
        book_id: 5,
        content: 'Harry Potter and the Order of the Phoenix page 4.',
      },
      {
        book_id: 5,
        content: 'Harry Potter and the Order of the Phoenix page 5.',
      },
      {
        book_id: 5,
        content: 'Harry Potter and the Order of the Phoenix page 6.',
      },
      {
        book_id: 5,
        content: 'Harry Potter and the Order of the Phoenix page 7.',
      },
      {
        book_id: 5,
        content: 'Harry Potter and the Order of the Phoenix page 8.',
      },
      {
        book_id: 5,
        content: 'Harry Potter and the Order of the Phoenix page 9.',
      },      
      {
        book_id: 5,
        content: 'Harry Potter and the Order of the Phoenix page 10.',
      },      
      {
        book_id: 6,
        content: 'Harry Potter and the Half-Blood Prince page 1.',
      },      
      {
        book_id: 6,
        content: 'Harry Potter and the Half-Blood Prince page 2.',
      },      
      {
        book_id: 6,
        content: 'Harry Potter and the Half-Blood Prince page 3.',
      },      
      {
        book_id: 6,
        content: 'Harry Potter and the Half-Blood Prince page 4.',
      },      
      {
        book_id: 6,
        content: 'Harry Potter and the Half-Blood Prince page 5.',
      },      
      {
        book_id: 6,
        content: 'Harry Potter and the Half-Blood Prince page 6.',
      },      
      {
        book_id: 6,
        content: 'Harry Potter and the Half-Blood Prince page 7.',
      },      
      {
        book_id: 6,
        content: 'Harry Potter and the Half-Blood Prince page 8.',
      },      
      {
        book_id: 6,
        content: 'Harry Potter and the Half-Blood Prince page 9.',
      },      
      {
        book_id: 6,
        content: 'Harry Potter and the Half-Blood Prince page 10.',
      },      
      {
        book_id: 7,
        content: 'Harry Potter and the Deathly Hallows page 1.',
      },      
      {
        book_id: 7,
        content: 'Harry Potter and the Deathly Hallows page 2.',
      },      
      {
        book_id: 7,
        content: 'Harry Potter and the Deathly Hallows page 3.',
      },      
      {
        book_id: 7,
        content: 'Harry Potter and the Deathly Hallows page 4.',
      },      
      {
        book_id: 7,
        content: 'Harry Potter and the Deathly Hallows page 5.',
      },      
      {
        book_id: 7,
        content: 'Harry Potter and the Deathly Hallows page 6.',
      },      
      {
        book_id: 7,
        content: 'Harry Potter and the Deathly Hallows page 7.',
      },      
      {
        book_id: 7,
        content: 'Harry Potter and the Deathly Hallows page 8.',
      },      
      {
        book_id: 7,
        content: 'Harry Potter and the Deathly Hallows page 9.',
      },      
      {
        book_id: 7,
        content: 'Harry Potter and the Deathly Hallows page 10.',
      },      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
    await queryInterface.bulkDelete('Pages', null, {});
  }
};
