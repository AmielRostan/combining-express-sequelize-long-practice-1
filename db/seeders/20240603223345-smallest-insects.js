'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Insects', [
      {
        name: 'Western Pygmy Blue Butterfly',
        description: 'It can be recognized by the copper brown and dull blue pattern at the bases of both wings',
        territory: 'North America and as far west as Hawaii and the middle east',
        fact: 'They managed to survive mass extinction events such as the ice age',
        millimeters: 12
      },
      {
        name: 'Patu Digua Spider',
        description: 'Some believe there are even smaller arachnids crawling around somewhere. For example, the female Anapistula caecula of West Africa is about three one-hundredths of an inch and the males would likely be smaller. Generally, male spiders are smaller than the females. ',
        territory: 'The patu digua lives around the Rio Digua river near the El Queremal, Valle del Cauca region of northern Colombia',
        fact: 'smaller than even the head of a pin',
        millimeters: 0.3
      },
      {
        name: 'Scarlet Dwarf Dragonfly',
        description: 'It can be recognized by the copper brown and dull blue pattern at the bases of both wings',
        territory: 'North America and as far west as Hawaii and the middle east',
        fact: 'They managed to survive mass extinction events such as the ice age',
        millimeters: 12
      },
      {
        name: 'Midget Moths',
        description: 'It can be recognized by the copper brown and dull blue pattern at the bases of both wings',
        territory: 'North America and as far west as Hawaii and the middle east',
        fact: 'They managed to survive mass extinction events such as the ice age',
        millimeters: 12
      },
      {
        name: 'Bolbe Pygmaea Mantis',
        description: 'It can be recognized by the copper brown and dull blue pattern at the bases of both wings',
        territory: 'North America and as far west as Hawaii and the middle east',
        fact: 'They managed to survive mass extinction events such as the ice age',
        millimeters: 12
      },
      {
        name: 'Microtityus Minimus Scorpion',
        description: 'It can be recognized by the copper brown and dull blue pattern at the bases of both wings',
        territory: 'North America and as far west as Hawaii and the middle east',
        fact: 'They managed to survive mass extinction events such as the ice age',
        millimeters: 12
      },
      {
        name: 'Euryplatea Nanaknihali Fly',
        description: 'It can be recognized by the copper brown and dull blue pattern at the bases of both wings',
        territory: 'North America and as far west as Hawaii and the middle east',
        fact: 'They managed to survive mass extinction events such as the ice age',
        millimeters: 12
      },
      {
        name: 'Uranotaenia lowii Mosquito',
        description: 'It can be recognized by the copper brown and dull blue pattern at the bases of both wings',
        territory: 'North America and as far west as Hawaii and the middle east',
        fact: 'They managed to survive mass extinction events such as the ice age',
        millimeters: 12
      },
      {
        name: 'Fairyfly Wasp',
        description: 'It can be recognized by the copper brown and dull blue pattern at the bases of both wings',
        territory: 'North America and as far west as Hawaii and the middle east',
        fact: 'They managed to survive mass extinction events such as the ice age',
        millimeters: 12
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Insects', null, {});
  }
};
