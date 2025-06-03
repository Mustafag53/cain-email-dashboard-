const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const Email = require('./models/Email');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get('/api/metrics', async (req, res) => {
  const total = await Email.countDocuments();
  const opened = await Email.countDocuments({ status: 'opened' });
  const clicked = await Email.countDocuments({ status: 'clicked' });
  const replied = await Email.countDocuments({ status: 'replied' });
  const unopened = await Email.countDocuments({ status: 'unopened' });

  res.json({ total, opened, clicked, replied, unopened });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
