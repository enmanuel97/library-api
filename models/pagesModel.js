const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
		id: {
			type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
		},
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
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
		tableName: 'pages',
		timestamps: false
	};
	
    return sequelize.define('Pages', attributes, options);
}