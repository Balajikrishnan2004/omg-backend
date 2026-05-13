import {
  EndpointAuthType,
  EndpointHandler,
  reportError
} from 'node-server-engine';
import { Op } from 'sequelize';

import { temple_events } from 'db';

import {
  ADD_TEMPLE_EVENT_ERROR,
  GET_TEMPLE_EVENT_ERROR,
  UPDATE_TEMPLE_EVENT_ERROR,
  DELETE_TEMPLE_EVENT_ERROR
} from '../temple_events.const';
import { nanoid } from 'nanoid';

export const add_temple_event_handler: EndpointHandler<
  EndpointAuthType.NONE
> = async (req, res) => {
  const authenticatedUserId = req.user?.id; // Optional
  const data = req.body;
  try {
    const event_code = `EVT-${nanoid(6).toUpperCase()}`;
    const templeEvent = await temple_events.create({
      ...data,
      event_code,
      created_by: authenticatedUserId || null,
      updated_by: authenticatedUserId || null
    });

    res.status(201).json({
      message: 'Temple event recorded successfully',
      id: templeEvent.id,
      event_code: templeEvent.event_code
    });
  } catch (error) {
    reportError(error);
    res.status(500).json({
      message: ADD_TEMPLE_EVENT_ERROR
    });
  }
};

export const get_temple_events_handler: EndpointHandler<
  EndpointAuthType.NONE
> = async (req, res) => {
  try {
    const {
      page = '1',
      limit = '100',
      status,
      festival_name,
      start_date,
      end_date,
      temple_id
    } = req.query as {
      page?: string;
      limit?: string;
      status?: string;
      festival_name?: string;
      start_date?: string;
      end_date?: string;
      temple_id?: string;
    };

    const where: any = { is_deleted: false };

    if (status) {
      where.status = status;
    }

    if (temple_id) {
      where.temple_id = temple_id;
    }

    if (festival_name) {
      where.festival_name = { [Op.iLike]: `%${festival_name}%` };
    }

    if (start_date && end_date) {
      where.date = {
        [Op.between]: [new Date(start_date), new Date(end_date)]
      };
    }

    const { rows, count } = await temple_events.findAndCountAll({
      where,
      limit: Number(limit),
      offset: (Number(page) - 1) * Number(limit),
      order: [['date', 'ASC']]
    });

    res.json({
      data: rows,
      meta: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    reportError(error);
    res.status(500).json({ message: GET_TEMPLE_EVENT_ERROR });
  }
};

export const get_temple_event_handler: EndpointHandler<
  EndpointAuthType.NONE
> = async (req, res) => {
  const { id } = req.params;

  try {
    const templeEvent = await temple_events.findOne({
      where: { id, is_deleted: false }
    });

    if (!templeEvent) {
      res.status(404).json({ message: 'Temple event not found' });
      return;
    }

    res.json(templeEvent);
  } catch (error) {
    reportError(error);
    res.status(500).json({ message: GET_TEMPLE_EVENT_ERROR });
  }
};

export const update_temple_event_handler: EndpointHandler<
  EndpointAuthType.NONE
> = async (req, res) => {
  const authenticatedUserId = req.user?.id;
  const { id } = req.params;
  const data = req.body;

  try {
    const [updated] = await temple_events.update(
      {
        ...data,
        updated_by: authenticatedUserId || null
      },
      { where: { id } }
    );

    if (updated) {
      res.json({ message: 'Temple event updated successfully' });
    } else {
      res.status(404).json({ message: 'Temple event not found' });
    }
  } catch (error) {
    reportError(error);
    res.status(500).json({ message: UPDATE_TEMPLE_EVENT_ERROR });
  }
};

export const delete_temple_event_handler: EndpointHandler<
  EndpointAuthType.NONE
> = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await temple_events.destroy({
      where: { id }
    });

    if (deleted) {
      res.json({ message: 'Temple event deleted successfully' });
    } else {
      res.status(404).json({ message: 'Temple event not found' });
    }
  } catch (error) {
    reportError(error);
    res.status(500).json({ message: DELETE_TEMPLE_EVENT_ERROR });
  }
};

export const get_events_by_month_handler: EndpointHandler<
  EndpointAuthType.NONE
> = async (req, res) => {
  try {
    const { month, year, temple_id } = (req.query) as {
      month?: string;
      year?: string;
      temple_id?: string;
    };

    const m = parseInt(month || '');
    const y = parseInt(year || '');

    if (!m || !y) {
      res.status(400).json({
        message: 'month and year are required'
      });
      return;
    }

    const startDate = new Date(y, m - 1, 1);
    const endDate = new Date(y, m, 1);

    const where: any = {
      is_deleted: false,
      date: {
        [Op.gte]: startDate,
        [Op.lt]: endDate
      }
    };

    if (temple_id) {
      where.temple_id = temple_id;
    }

    const events = await temple_events.findAll({
      where,
      order: [['date', 'ASC']]
    });

    res.json({
      month: m,
      year: y,
      count: events.length,
      data: events
    });
    return;
  } catch (error) {
    reportError(error);
    res.status(500).json({
      message: 'Error fetching events'
    });
    return;
  }
};
