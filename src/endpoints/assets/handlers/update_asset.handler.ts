import {
  EndpointAuthType,
  EndpointHandler,
  reportError
} from 'node-server-engine';
import { assets } from 'db';
import { ASSETS_ERRORS } from '../assets.const';

export const update_asset_handler: EndpointHandler<
  EndpointAuthType.NONE
> = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const [updated] = await assets.update(data, {
      where: { id }
    });

    if (!updated) {
      res.status(404).json({ error: ASSETS_ERRORS.NOT_FOUND });
      return;
    }

    const updated_asset = await assets.findByPk(id);
    res.status(200).json({ data: updated_asset });
  } catch (error) {
    reportError(error);
    res.status(500).json({ error: ASSETS_ERRORS.UPDATE });
  }
};
