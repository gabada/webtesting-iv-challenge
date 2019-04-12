exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('chars')
    .truncate()
    .then(function() {
      return knex('chars').insert([
        { name: 'Dark Helmet' },
        { name: 'Barf' },
        { name: 'Pizza the Hutt' },
        { name: 'Yogurt' }
      ]);
    });
};
