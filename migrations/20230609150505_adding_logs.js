/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('logs', table => {
        table.increments('id').primary;
        table.integer('userId').unsigned().notNullable()
        table.string('name').notNullable();
        table.integer('amount').notNullable();
        table.integer('time').notNullable();
        table.timestamps(true, true);

        table.foreign('userId').references('id').inTable('users')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('logs');
};
