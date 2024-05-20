import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite' // SQLite database file path
});

export default sequelize;