import {
  EndpointAuthType,
  EndpointHandler,
  reportError
} from 'node-server-engine';
import { assets } from 'db';
import { ASSETS_ERRORS } from '../assets.const';

export const get_assets_handler: EndpointHandler<
  EndpointAuthType.NONE
> = async (req, res) => {
  try {
    const { temple_id, category } = req.query as {
      temple_id?: string;
      category?: string;
    };

    const where: any = {};
    if (temple_id) where.temple_id = temple_id;
    if (category) where.category = category;

    const data = await assets.findAll({ where });
    res.status(200).json({ data });
  } catch (error) {
    reportError(error);
    res.status(500).json({ error: ASSETS_ERRORS.FETCH });
  }
};
