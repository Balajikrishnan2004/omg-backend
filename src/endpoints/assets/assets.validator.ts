import { Schema } from 'express-validator';

export const add_asset_validator: Schema = {
  temple_id: {
    in: 'body',
    exists: { errorMessage: 'Temple ID is required' },
    isUUID: { errorMessage: 'Invalid Temple ID format' }
  },
  name: {
    in: 'body',
    exists: { errorMessage: 'Name is required' },
    isString: true,
    trim: true,
    notEmpty: { errorMessage: 'Name cannot be empty' }
  },
  category: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  purchase_date: {
    in: 'body',
    exists: { errorMessage: 'Purchase date is required' },
    isISO8601: { errorMessage: 'Invalid date format' }
  },
  condition: {
    in: 'body',
    optional: true,
    isIn: {
      options: [['Excellent', 'Good', 'Fair', 'Poor']],
      errorMessage: 'Invalid condition value'
    }
  },
  maintenance_status: {
    in: 'body',
    optional: true,
    isIn: {
      options: [['Up to Date', 'Due Soon', 'Overdue']],
      errorMessage: 'Invalid maintenance status value'
    }
  },
  notes: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  }
};

export const update_asset_validator: Schema = {
  temple_id: {
    in: 'body',
    optional: true,
    isUUID: { errorMessage: 'Invalid Temple ID format' }
  },
  name: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  category: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  },
  purchase_date: {
    in: 'body',
    optional: true,
    isISO8601: { errorMessage: 'Invalid date format' }
  },
  condition: {
    in: 'body',
    optional: true,
    isIn: {
      options: [['Excellent', 'Good', 'Fair', 'Poor']],
      errorMessage: 'Invalid condition value'
    }
  },
  maintenance_status: {
    in: 'body',
    optional: true,
    isIn: {
      options: [['Up to Date', 'Due Soon', 'Overdue']],
      errorMessage: 'Invalid maintenance status value'
    }
  },
  notes: {
    in: 'body',
    optional: true,
    isString: true,
    trim: true
  }
};

export const empty_validator: Schema = {};
