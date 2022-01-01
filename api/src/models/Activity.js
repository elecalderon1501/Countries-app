const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  sequelize.define(
    'activity',
    {
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
        allownull: false
      },
      duration: {
        type: DataTypes.STRING,
        allownull: false
      },
      season: {
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
        allownull: false
      },
    },
    {
      timestamps: false,
    }
  )
}

// Actividad Turística con las siguientes propiedades:
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)
