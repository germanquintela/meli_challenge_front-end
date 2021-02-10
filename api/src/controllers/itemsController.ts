import { Request, Response } from 'express';

import getItemDetailService from '../services/getItemDetailService';
import getItemsService from '../services/getItemsService';
import { ItemsResultsType, SearchResultType } from '../types';
import addAuthor from '../utils/addAuthor';

const getItems = async (req: Request, res: Response): Promise<void> => {
  const { q: searchQuery, limit } = req.query;

  try {
    const response = await getItemsService(String(searchQuery), Number(limit));

    if (response) {
      const responseWithAuthor = addAuthor<SearchResultType>(response);

      res.status(200).json(responseWithAuthor);
    } else {
      res.status(500).json({ status: 500, message: 'Hubo un problema en el servicio por favor intentar mas tarde' });
    }
  } catch (error) {
    res.status(error.response.status).json({ status: error.response.status, message: error.response.data.error });
  }
};

const getItemDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await getItemDetailService(req.params.id);

    if (response) {
      const responseWithAuthor = addAuthor<ItemsResultsType>(response);

      res.status(200).json(responseWithAuthor);
    } else {
      res.status(500).json({ status: 500, message: 'Hubo un problema en el servicio por favor intentar mas tarde' });
    }
  } catch (error) {
    res.status(error.response.status).json({ status: error.response.status, message: error.response.data.error });
  }
};

export { getItems, getItemDetail };
