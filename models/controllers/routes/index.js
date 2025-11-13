const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/sequelize');
const tarefaRoutes = require('./routes/tarefaRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(tarefaRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
