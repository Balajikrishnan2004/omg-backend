import { Endpoint, EndpointAuthType, EndpointMethod } from 'node-server-engine';
import {
  add_temple_event_handler,
  get_temple_events_handler,
  get_temple_event_handler,
  update_temple_event_handler,
  delete_temple_event_handler,
  get_events_by_month_handler
} from './handlers/temple_events.handler';
import {
  add_temple_event_validator,
  update_temple_event_validator,
  empty_validator
} from './temple_events.validator';

export const add_temple_event_endpoint = new Endpoint({
  path: '/temple-events',
  method: EndpointMethod.POST,
  handler: add_temple_event_handler,
  authType: EndpointAuthType.NONE,
  validator: add_temple_event_validator
});

export const get_temple_events_endpoint = new Endpoint({
  path: '/temple-events',
  method: EndpointMethod.GET,
  handler: get_temple_events_handler,
  authType: EndpointAuthType.NONE,
  validator: empty_validator
});

export const get_events_by_month_endpoint = new Endpoint({
  path: '/temple-events/monthly',
  method: EndpointMethod.GET,
  handler: get_events_by_month_handler,
  authType: EndpointAuthType.NONE,
  validator: empty_validator
});

export const get_temple_event_endpoint = new Endpoint({
  path: '/temple-events/:id',
  method: EndpointMethod.GET,
  handler: get_temple_event_handler,
  authType: EndpointAuthType.NONE,
  validator: empty_validator
});

export const update_temple_event_endpoint = new Endpoint({
  path: '/temple-events/:id',
  method: EndpointMethod.PUT,
  handler: update_temple_event_handler,
  authType: EndpointAuthType.NONE,
  validator: update_temple_event_validator
});

export const delete_temple_event_endpoint = new Endpoint({
  path: '/temple-events/:id',
  method: EndpointMethod.DELETE,
  handler: delete_temple_event_handler,
  authType: EndpointAuthType.NONE,
  validator: empty_validator
});
