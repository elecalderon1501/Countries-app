const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allownull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allownull: false,
    },
    difficulty: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
    },
    duration: {
      type: DataTypes.STRING,
    },
    season: {
      type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
    },
  })
  
}

// Actividad Turística con las siguientes propiedades:
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)
