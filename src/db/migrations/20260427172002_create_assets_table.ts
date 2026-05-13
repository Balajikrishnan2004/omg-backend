import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface): Promise<void> {
  await queryInterface.createTable('assets', {
    temple_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    asset_code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: DataTypes.STRING,
    purchase_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    condition: {
      type: DataTypes.ENUM('Excellent', 'Good', 'Fair', 'Poor'),
      defaultValue: 'Good'
    },
    maintenance_status: {
      type: DataTypes.ENUM('Up to Date', 'Due Soon', 'Overdue'),
      defaultValue: 'Up to Date'
    },
    notes: DataTypes.TEXT,
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
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
  await queryInterface.dropTable('assets');
}
