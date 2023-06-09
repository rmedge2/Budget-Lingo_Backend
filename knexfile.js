// Update with your config settings.
require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 * 
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/budget_lingo_db'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.PROD_DB_Name,
      user: process.env.PROD_DB_User,
      password: process.env.PROD_DB_Password,
      host: process.env.PROD_DB_Host
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
