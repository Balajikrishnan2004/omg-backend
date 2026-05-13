import {
  Table,
  Column,
  Model,
  DataType
} from 'sequelize-typescript';

@Table({ 
  tableName: 'temple_events',
  timestamps: true,
  underscored: true
})
export class temple_events extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  declare temple_id: string;

  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  declare id: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
    unique: true
  })
  event_code?: string;

  @Column({ 
    type: DataType.STRING(200), 
    allowNull: false 
  })
  event_name!: string;

  @Column({ 
    type: DataType.STRING(100), 
    allowNull: true 
  })
  festival_name?: string;

  @Column({ 
    type: DataType.TEXT, 
    allowNull: true 
  })
  description?: string;

  @Column({ 
    type: DataType.DATE, 
    allowNull: false 
  })
  date!: Date;

  @Column({ 
    type: DataType.STRING(10), 
    allowNull: false 
  })
  time!: string;

  @Column({ 
    type: DataType.STRING(200), 
    allowNull: true 
  })
  organizer_name?: string;

  @Column({
    type: DataType.ENUM('Planned', 'Scheduled', 'In Progress', 'Completed'),
    allowNull: false,
    defaultValue: 'Planned'
  })
  status!: 'Planned' | 'Scheduled' | 'In Progress' | 'Completed';

  @Column({ 
    type: DataType.INTEGER, 
    allowNull: true 
  })
  expected_devotees?: number;

  @Column({ 
    type: DataType.STRING(100), 
    allowNull: true 
  })
  pooja_type?: string;

  @Column({ 
    type: DataType.STRING(200), 
    allowNull: true 
  })
  prasadam_planned?: string;

  @Column({ 
    type: DataType.TEXT, 
    allowNull: true 
  })
  resource_needed?: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false
  })
  is_recurring!: boolean;

  @Column({ 
    type: DataType.INTEGER, 
    allowNull: true 
  })
  created_by?: number;

  @Column({ 
    type: DataType.INTEGER, 
    allowNull: true 
  })
  updated_by?: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false
  })
  is_deleted!: boolean;
}
