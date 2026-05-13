import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { parking_zones } from './parking_zones';

@Table({ 
  timestamps: true, 
  tableName: 'parking_entries',
  underscored: true
})
export class parking_entries extends Model {
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

  @ForeignKey(() => parking_zones)
  @Column({ type: DataType.UUID, allowNull: false })
  parking_zone_id!: string;

  @BelongsTo(() => parking_zones)
  zone!: parking_zones;

  @Column({ type: DataType.STRING, allowNull: false })
  license_plate!: string;

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  duration!: Date;
}
