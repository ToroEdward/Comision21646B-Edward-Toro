import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const PostModel = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    LinkUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
     timestamps: true
});
