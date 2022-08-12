const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
		id: {
			type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
		},
		title: {
			type: DataTypes.STRING,
            allowNull: false
		},
		author: {
			type: DataTypes.STRING,
            allowNull: true
		},
        resume: {
            type: DataTypes.TEXT,
        },
        publiched_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        deleted_at: {
            type: DataTypes.DATE,
            defaultValue: null
        }
    };

	const options = {
		tableName: 'books',
		timestamps: false
	};
	
    return sequelize.define('Books', attributes, options);
}