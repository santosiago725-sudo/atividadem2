const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarefaController');

router.post('/tarefas', controller.criarTarefa);
router.get('/tarefas', controller.listarTarefas);
router.get('/tarefas/:id', controller.buscarPorId);
router.put('/tarefas/:id', controller.atualizarTarefa);
router.patch('/tarefas/:id/status', controller.atualizarStatus);
router.delete('/tarefas/:id', controller.deletarTarefa);

module.exports = router;
