import express from 'express';
import { saveOrder, getOrders, deleteOrder, getAppointments} from "../controllers/orders.js";

const router = express.Router()

router.post('/', saveOrder);
router.get('/:id', getOrders);
router.get('/Appointments/:id', getAppointments);

router.delete('/:id', deleteOrder);

export default router;
