import {
  EndpointAuthType,
  EndpointHandler,
  reportError
} from 'node-server-engine';
import { parking_zones } from 'db';
import { ADD_PARKING_ZONE_ERROR } from '../parking.const';

export const add_parking_zone_handler: EndpointHandler<
  EndpointAuthType.NONE
> = async (req, res) => {
  try {
    const data = req.body;
    const zone = await parking_zones.create(data);
    res.status(201).json(zone);
  } catch (error) {
    reportError(error);
    res.status(500).json({ message: ADD_PARKING_ZONE_ERROR });
  }
};
