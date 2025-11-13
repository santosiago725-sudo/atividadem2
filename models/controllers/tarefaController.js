const Tarefa = require('../models/Tarefa');

exports.criarTarefa = async (req, res) => {
  try {
    const { titulo, descricao, status } = req.body;
    if (!titulo) return res.status(400).json({ erro: 'Título é obrigatório' });

    const tarefa = await Tarefa.create({ titulo, descricao, status });
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.listarTarefas = async (req, res) => {
  const tarefas = await Tarefa.findAll();
  res.json(tarefas);
};

exports.buscarPorId = async (req, res) => {
  const tarefa = await Tarefa.findByPk(req.params.id);
  if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
  res.json(tarefa);
};

exports.atualizarTarefa = async (req, res) => {
  const tarefa = await Tarefa.findByPk(req.params.id);
  if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });

  await tarefa.update(req.body);
  res.json(tarefa);
};

exports.atualizarStatus = async (req, res) => {
  const tarefa = await Tarefa.findByPk(req.params.id);
  if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });

  const { status } = req.body;
  if (!['a fazer', 'em andamento', 'concluída'].includes(status)) {
    return res.status(400).json({ erro: 'Status inválido' });
  }

  tarefa.status = status;
  await tarefa.save();
  res.json(tarefa);
};

exports.deletarTarefa = async (req, res) => {
  const tarefa = await Tarefa.findByPk(req.params.id);
  if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });

  await tarefa.destroy();
  res.json({ mensagem: 'Tarefa deletada com sucesso' });
};
