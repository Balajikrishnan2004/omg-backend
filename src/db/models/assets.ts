import {
  Table,
  Column,
  Model,
  DataType
} from 'sequelize-typescript';

@Table({ 
  timestamps: true, 
  tableName: 'assets',
  underscored: true
})
export class assets extends Model {
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
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  asset_code!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;

  @Column(DataType.STRING)
  category?: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  purchase_date!: Date;

  @Column({
    type: DataType.ENUM('Excellent', 'Good', 'Fair', 'Poor'),
    defaultValue: 'Good'
  })
  condition!: string;

  @Column({
    type: DataType.ENUM('Up to Date', 'Due Soon', 'Overdue'),
    defaultValue: 'Up to Date'
  })
  maintenance_status!: string;

  @Column(DataType.TEXT)
  notes?: string;

  @Column(DataType.INTEGER)
  created_by?: number;

  @Column(DataType.INTEGER)
  updated_by?: number;
}
