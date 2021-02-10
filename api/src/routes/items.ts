import express from 'express';

import { getItemDetail, getItems } from '../controllers/itemsController';

const router = express.Router();

router.get('/', getItems);

router.get('/:id', getItemDetail);

export = router;
