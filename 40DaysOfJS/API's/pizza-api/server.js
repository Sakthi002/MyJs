import express from "express";
import cors from "cors";

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

// --- Your routes below ---
const pizzaHubs = ["PizzaHut", "Dominos"];
const pizzas = [
  { id: 1, shop: "PizzaHut", name: "Margherita", type: "veg" },
  { id: 2, shop: "PizzaHut", name: "Paneer Vegorama", type: "veg" },
  { id: 3, shop: "Dominos", name: "Pepperoni", type: "non-veg" },
  { id: 4, shop: "Dominos", name: "Veg Extravaganza", type: "veg" },
];
const beverages = [
  { id: 1, pizzaId: 1, name: "Pepsi" },
  { id: 2, pizzaId: 2, name: "Coke" },
  { id: 3, pizzaId: 3, name: "Mountain Dew" },
  { id: 4, pizzaId: 4, name: "Fanta" },
];
let orders = [];

app.get("/api/pizzahub", (req, res) => res.json(pizzaHubs));
app.get("/api/pizzahub/pizzas/:hubName", (req, res) => {
  const { hubName } = req.params;
  res.json(pizzas.filter(p => p.shop.toLowerCase() === hubName.toLowerCase()));
});
app.get("/api/pizzahub/beverages/:pizzaId", (req, res) => {
  const { pizzaId } = req.params;
  res.json(beverages.filter(b => b.pizzaId === parseInt(pizzaId)));
});
app.post("/api/order", (req, res) => {
  const { pizzaId, beverageId } = req.body;
  if (!pizzaId || !beverageId) return res.status(400).json({ error: "pizzaId and beverageId required" });
  const newOrder = { id: orders.length + 1, pizzaId, beverageId, status: "confirmed" };
  orders.push(newOrder);
  res.status(201).json({ message: "Order created", order: newOrder });
});

app.listen(3000, () => console.log("🍕 Pizza API running on http://localhost:3000"));
