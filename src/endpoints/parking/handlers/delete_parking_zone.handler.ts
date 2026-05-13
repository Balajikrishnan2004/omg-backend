import {
  EndpointAuthType,
  EndpointHandler,
  reportError
} from 'node-server-engine';
import { parking_zones } from 'db';
import { DELETE_PARKING_ZONE_ERROR } from '../parking.const';

export const delete_parking_zone_handler: EndpointHandler<
  EndpointAuthType.NONE
> = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await parking_zones.destroy({ where: { id } });
    if (deletedCount === 0) {
      res.status(404).json({ message: 'Zone not found' });
      return;
    }
    res.status(200).json({ message: 'Parking zone deleted successfully' });
  } catch (error) {
    reportError(error);
    res.status(500).json({ message: DELETE_PARKING_ZONE_ERROR });
  }
};
