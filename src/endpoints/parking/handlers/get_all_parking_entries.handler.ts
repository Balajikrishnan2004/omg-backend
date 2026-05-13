import {
  EndpointAuthType,
  EndpointHandler,
  reportError
} from 'node-server-engine';
import { parking_entries, parking_zones } from 'db';
import { GET_ALL_PARKING_ENTRIES_ERROR } from '../parking.const';

export const get_all_parking_entries_handler: EndpointHandler<
  EndpointAuthType.NONE
> = async (_req, res) => {
  try {
    const entries = await parking_entries.findAll({
      include: [parking_zones]
    });
    res.status(200).json(entries);
  } catch (error) {
    reportError(error);
    res.status(500).json({ message: GET_ALL_PARKING_ENTRIES_ERROR });
  }
};
