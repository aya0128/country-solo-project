exports.up = function(knex, Promise) {
  return knex.schema.createTable("locations", (t) => {
    t.increments() // auto-incrementing id column
      .index(); // index this column

    t.string("code1").notNullable();

    t.string("code2").notNullable();

    t.string("country_name")
      .unique()
      .notNullable();

    t.float("lat").notNullable();

    t.float("lon").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("locations");
};
