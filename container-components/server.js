import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

let currentUser = {
  name: "Swaniket Chowdhury",
  age: 54,
  hairColor: "brown",
  hobbies: ["swimming", "bicycling", "video games"],
};

let users = [
  {
    id: "123",
    name: "Swaniket Chowdhury",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    id: "456",
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    id: "789",
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const products = [
  {
    id: "1234",
    name: "iPhone",
    price: "899",
    description: "Top Phone in the market",
    rating: "4.3",
  },
  {
    id: "5678",
    name: "Mac Book",
    price: "1099",
    description: "The best laptop in the market",
    rating: "3.3",
  },
  {
    id: "9101",
    name: "Router",
    price: "94",
    description: "The best router in the market",
    rating: "4.9",
  },
];

app.get("/current-user", (req, res) => {
  res.json(currentUser);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  res.json(users.find((user) => user.id === id));
});

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: updatedUser } = req.body;

  users = users.map((user) => (user.id === id ? updatedUser : user));
  res.json(users.find((user) => user.id === id));
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.json(products.find((product) => product.id === id));
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
