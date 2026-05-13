import {
  EndpointAuthType,
  EndpointHandler,
  reportError
} from 'node-server-engine';
import { parking_entries, parking_zones } from 'db';
import { CAPTURE_PARKING_ENTRY_ERROR } from '../parking.const';

export const capture_parking_entry_handler: EndpointHandler<
  EndpointAuthType.NONE
> = async (req, res) => {
  try {
    const { parking_zone_id, license_plate, duration, temple_id } = req.body;

    const zone = await parking_zones.findByPk(parking_zone_id);
    if (!zone) {
      res.status(404).json({ message: 'Zone not found' });
      return;
    }

    const entry = await parking_entries.create({
      temple_id,
      parking_zone_id,
      license_plate,
      duration: duration || new Date()
    });

    res.status(201).json(entry);
  } catch (error) {
    reportError(error);
    res.status(500).json({ message: CAPTURE_PARKING_ENTRY_ERROR });
  }
};
