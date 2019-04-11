exports.up = function(knex, Promise) {
  return knex.schema.createTable('chars', tbl => {
    tbl.increments();

    tbl.string('name', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('chars');
};
