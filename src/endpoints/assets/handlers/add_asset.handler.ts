import {
  EndpointAuthType,
  EndpointHandler,
  reportError
} from 'node-server-engine';
import { customAlphabet } from 'nanoid';
import { assets } from 'db';
import { ASSETS_ERRORS } from '../assets.const';

const generate_asset_code = customAlphabet(
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  8
);

export const add_asset_handler: EndpointHandler<
  EndpointAuthType.NONE
> = async (req, res) => {
  try {
    const {
      temple_id,
      name,
      category,
      purchase_date,
      condition,
      maintenance_status,
      notes
    } = req.body;

    const asset_code = `AST-${generate_asset_code()}`;

    const asset = await assets.create({
      temple_id,
      asset_code,
      name,
      category,
      purchase_date: purchase_date ? new Date(String(purchase_date)) : new Date(),
      condition: condition || 'Good',
      maintenance_status: maintenance_status || 'Up to Date',
      notes
    });

    res.status(201).json({ data: asset });
  } catch (error) {
    reportError(error);
    res.status(500).json({ error: ASSETS_ERRORS.CREATE });
  }
};
