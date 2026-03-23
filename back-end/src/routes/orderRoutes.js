const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/authMiddleware");

const {
  getOrders,
  getOrder,
  createOrder,
  updateOrderStatus,
} = require("../controllers/orderControllers");
const { authorizeRole } = require("../middleware/authorizationMiddleware");

// Create an order
router.post("/orders", authMiddleware, authorizeRole("user", "admin"), createOrder);

// Get all orders
router.get("/orders", authMiddleware, authorizeRole("admin"), getOrders);

// Get a single order by ID
router.get("/orders/:id", authMiddleware, authorizeRole("admin", "user"), getOrder);

// Update order status
router.put("/orders/:id", authMiddleware, authorizeRole("admin"), updateOrderStatus);

module.exports = router;
