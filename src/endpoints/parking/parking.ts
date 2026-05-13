import { Endpoint, EndpointAuthType, EndpointMethod } from 'node-server-engine';
import {
  add_parking_zone_handler,
  delete_parking_zone_handler,
  capture_parking_entry_handler,
  get_all_parking_entries_handler
} from './handlers';
import {
  add_parking_zone_validator,
  capture_parking_entry_validator
} from './parking.validator';

export const add_parking_zone_endpoint = new Endpoint({
  path: '/parking/zones',
  method: EndpointMethod.POST,
  handler: add_parking_zone_handler,
  authType: EndpointAuthType.NONE,
  validator: add_parking_zone_validator
});

export const delete_parking_zone_endpoint = new Endpoint({
  path: '/parking/zones/:id',
  method: EndpointMethod.DELETE,
  handler: delete_parking_zone_handler,
  authType: EndpointAuthType.NONE,
  validator: {}
});

export const capture_parking_entry_endpoint = new Endpoint({
  path: '/parking/entries',
  method: EndpointMethod.POST,
  handler: capture_parking_entry_handler,
  authType: EndpointAuthType.NONE,
  validator: capture_parking_entry_validator
});

export const get_all_parking_entries_endpoint = new Endpoint({
  path: '/parking/entries',
  method: EndpointMethod.GET,
  handler: get_all_parking_entries_handler,
  authType: EndpointAuthType.NONE,
  validator: {}
});
