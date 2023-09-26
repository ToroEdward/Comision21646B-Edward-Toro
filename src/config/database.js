import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("db_post", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export const startDB = async () => {
    try {
        await sequelize.authenticate();
        // await sequelize.sync( {force: true});
        await sequelize.sync();
        console.log('Connection has benn established successfully.');
    } catch (error) {
        console.log('Unable to connect to the database:', error);
    }
};