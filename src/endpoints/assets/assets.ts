import { Endpoint, EndpointMethod, EndpointAuthType } from 'node-server-engine';
import {
  add_asset_handler,
  get_assets_handler,
  get_asset_handler,
  update_asset_handler,
  delete_asset_handler
} from './handlers';
import {
  add_asset_validator,
  update_asset_validator,
  empty_validator
} from './assets.validator';

export const add_asset_endpoint = new Endpoint({
  path: '/assets',
  method: EndpointMethod.POST,
  handler: add_asset_handler,
  authType: EndpointAuthType.NONE,
  validator: add_asset_validator
});

export const get_assets_endpoint = new Endpoint({
  path: '/assets',
  method: EndpointMethod.GET,
  handler: get_assets_handler,
  authType: EndpointAuthType.NONE,
  validator: empty_validator
});

export const get_asset_endpoint = new Endpoint({
  path: '/assets/:id',
  method: EndpointMethod.GET,
  handler: get_asset_handler,
  authType: EndpointAuthType.NONE,
  validator: empty_validator
});

export const update_asset_endpoint = new Endpoint({
  path: '/assets/:id',
  method: EndpointMethod.PUT,
  handler: update_asset_handler,
  authType: EndpointAuthType.NONE,
  validator: update_asset_validator
});

export const delete_asset_endpoint = new Endpoint({
  path: '/assets/:id',
  method: EndpointMethod.DELETE,
  handler: delete_asset_handler,
  authType: EndpointAuthType.NONE,
  validator: empty_validator
});
