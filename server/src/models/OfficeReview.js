const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const OfficeReview = sequelize.define('OfficeReview', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  officeLocation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  visitDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

// Define associations
OfficeReview.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(OfficeReview, { foreignKey: 'userId' });

module.exports = OfficeReview; 