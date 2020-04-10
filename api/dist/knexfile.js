"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
require('ts-node/register');
var knexconfig = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./source/database/db.sqlite"
        },
        migrations: {
            directory: './source/database/migrations',
            extension: 'ts'
        },
        useNullAsDefault: true
    },
    test: {
        client: "sqlite3",
        connection: {
            filename: "./source/database/test.sqlite"
        },
        migrations: {
            directory: './source/database/migrations',
            extension: 'ts'
        },
        useNullAsDefault: true
    },
    staging: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    },
    production: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    }
};
exports.default = knexconfig;
module.exports = knexconfig;
