import {Router} from 'express';
import * as tasksCtrl from '../controllers/taskController'

const router = Router();

router.post('/', tasksCtrl.createTask);

router.get('/', tasksCtrl.findAllTasks);

router.get('/done', tasksCtrl.findAllDoneTasks);

router.get('/:id', tasksCtrl.findOneTask );

router.delete('/:id', tasksCtrl.deleteTask );

router.put('/:id', tasksCtrl.updateTask);

export default router;