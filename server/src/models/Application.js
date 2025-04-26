const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Application = sequelize.define('Application', {
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
  currentStep: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1,
      max: 10
    }
  },
  appointmentDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  officeLocation: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'in_progress', 'completed', 'cancelled'),
    defaultValue: 'pending'
  },
  documents: {
    type: DataTypes.JSONB,
    defaultValue: {}
  }
});

// Define associations
Application.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Application, { foreignKey: 'userId' });

module.exports = Application; 