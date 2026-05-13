import {
  EndpointAuthType,
  EndpointHandler,
  reportError
} from 'node-server-engine';
import { assets } from 'db';
import { ASSETS_ERRORS } from '../assets.const';

export const delete_asset_handler: EndpointHandler<
  EndpointAuthType.NONE
> = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await assets.destroy({
      where: { id }
    });

    if (!deleted) {
      res.status(404).json({ error: ASSETS_ERRORS.NOT_FOUND });
      return;
    }

    res.status(200).json({ message: 'Asset deleted successfully' });
  } catch (error) {
    reportError(error);
    res.status(500).json({ error: ASSETS_ERRORS.DELETE });
  }
};
