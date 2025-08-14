import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/v1/forms/:id/submit', (req, res) => {
  // placeholder submission handler
  res.json({ message: 'submission received', formId: req.params.id, data: req.body });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
