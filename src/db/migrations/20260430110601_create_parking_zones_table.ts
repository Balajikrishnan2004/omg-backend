import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface): Promise<void> {
  await queryInterface.createTable('parking_zones', {
    temple_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    area_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    total_capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    access_category: {
      type: DataTypes.ENUM('general', 'staff', 'vip'),
      allowNull: false
    },
    area_theme: {
      type: DataTypes.ENUM(
        'primary',
        'secondary',
        'destructive',
        'purple',
        'green',
        'yellow'
      ),
      allowNull: false,
      defaultValue: 'primary'
    },
    status: {
      type: DataTypes.ENUM('available', 'occupied', 'reserved'),
      allowNull: false,
      defaultValue: 'available'
    },
    price_per_hour: {
      type: DataTypes.ENUM('100', '50', 'free'),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  });
}

export async function down(queryInterface: QueryInterface): Promise<void> {
  await queryInterface.dropTable('parking_zones');
}
