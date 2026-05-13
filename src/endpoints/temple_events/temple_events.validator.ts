import { Schema } from 'express-validator';

export const add_temple_event_validator: Schema = {
  temple_id: {
    in: 'body',
    exists: { errorMessage: 'Temple ID is required' },
    isUUID: { errorMessage: 'Invalid Temple ID format' }
  },
  event_name: {
    in: 'body',
    exists: { errorMessage: 'Event name is required' },
    isString: true,
    trim: true,
    notEmpty: { errorMessage: 'Event name cannot be empty' }
  },
  festival_name: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  description: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  date: {
    in: 'body',
    exists: { errorMessage: 'Date is required' },
    isISO8601: { errorMessage: 'Invalid date format' }
  },
  time: {
    in: 'body',
    exists: { errorMessage: 'Time is required' },
    isString: true,
    trim: true
  },
  organizer_name: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  status: {
    in: 'body',
    optional: true,
    isIn: {
      options: [['Planned', 'Scheduled', 'In Progress', 'Completed']],
      errorMessage: 'Invalid status'
    }
  },
  expected_devotees: {
    in: 'body',
    optional: true,
    isInt: {
      options: { min: 1 },
      errorMessage: 'Expected devotees must be a positive integer'
    }
  },
  pooja_type: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  prasadam_planned: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  resource_needed: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  is_recurring: {
    in: 'body',
    optional: true,
    isBoolean: { errorMessage: 'is_recurring must be a boolean' }
  }
};

export const update_temple_event_validator: Schema = {
  temple_id: {
    in: 'body',
    optional: true,
    isUUID: { errorMessage: 'Invalid Temple ID format' }
  },
  event_name: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true,
    notEmpty: { errorMessage: 'Event name cannot be empty' }
  },
  festival_name: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  description: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  date: {
    in: 'body',
    optional: true,
    isISO8601: { errorMessage: 'Invalid date format' }
  },
  time: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  organizer_name: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  status: {
    in: 'body',
    optional: true,
    isIn: {
      options: [['Planned', 'Scheduled', 'In Progress', 'Completed']],
      errorMessage: 'Invalid status'
    }
  },
  expected_devotees: {
    in: 'body',
    optional: true,
    isInt: {
      options: { min: 1 },
      errorMessage: 'Expected devotees must be a positive integer'
    }
  },
  pooja_type: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  prasadam_planned: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  resource_needed: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  is_recurring: {
    in: 'body',
    optional: true,
    isBoolean: { errorMessage: 'is_recurring must be a boolean' }
  }
};

export const empty_validator: Schema = {};
