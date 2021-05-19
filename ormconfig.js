require('dotenv/config');

module.exports = {
	type: 'postgres',
	host: process.env.DATABASE_HOST,
	port: Number(process.env.DATABASE_PORT),
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE,
	entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
	migrations: ['./src/shared/infra/typeorm/migrations/*ts'],
	cli: {
		"migrationsDir": "./src/shared/infra/typeorm/migrations/"
	}
}
