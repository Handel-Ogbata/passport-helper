const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Incident = sequelize.define('Incident', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: true, // Allow anonymous reports
    references: {
      model: User,
      key: 'id'
    }
  },
  officeLocation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  evidenceUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'investigating', 'resolved', 'dismissed'),
    defaultValue: 'pending'
  },
  isAnonymous: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

// Define associations
Incident.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Incident, { foreignKey: 'userId' });

module.exports = Incident; 