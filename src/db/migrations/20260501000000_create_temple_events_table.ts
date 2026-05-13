import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface): Promise<void> {
  await queryInterface.createTable('temple_events', {
    temple_id: {
      type: DataTypes.UUID,
      allowNull: false
    },

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    event_code: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: true
    },

    event_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },

    festival_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false
    },

    time: {
      type: DataTypes.STRING(10),
      allowNull: false
    },

    organizer_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },

    status: {
      type: DataTypes.ENUM('Planned', 'Scheduled', 'In Progress', 'Completed'),
      allowNull: false,
      defaultValue: 'Planned'
    },

    expected_devotees: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    pooja_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },

    prasadam_planned: {
      type: DataTypes.STRING(200),
      allowNull: true
    },

    resource_needed: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    is_recurring: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },

    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
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
  await queryInterface.dropTable('temple_events');
}
