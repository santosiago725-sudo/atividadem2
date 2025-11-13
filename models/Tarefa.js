const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Tarefa = sequelize.define('Tarefa', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.ENUM('a fazer', 'em andamento', 'concluída'),
    defaultValue: 'a fazer',
  },
});

module.exports = Tarefa;
