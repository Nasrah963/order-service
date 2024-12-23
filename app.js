const express = require('express');
const app = express();
app.use(express.json());

// Mock order data
const orders = [{ id: 1, userId: 1, item: 'Laptop' }, { id: 2, userId: 2, item: 'Phone' }];

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.get('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
});

app.post('/orders', (req, res) => {
    const order = { id: orders.length + 1, ...req.body };
    orders.push(order);
    res.status(201).json(order);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Order service running on port ${PORT}`));
