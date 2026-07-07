import { Router } from "express";
// Products Endpoints
const router = Router()

router.get("/", (req, res) => {
  res.send('The list of products');
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send('A products');
});


router.post("/", (req, res) => {
  res.send('A new product created');
});

export default router;
