var express = require("express");
const { walkin } = require("../models");
var router = express.Router();

router.post("/walkin", async function (req, res, next) {
  try {
    const doc = await walkin.findOne({
      where: { blockNumber: req.body.blockNumber },
    });

    if (doc) {
      return res.status(400).json({ message: "Block number already created." });
    }

    await walkin.create(req.body);
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(200).json({ message: error.message || "Internal server error" });
  }
});

router.patch("/walkin/:blockNumber/exit", async function (req, res) {
  try {
    const doc = await walkin.findOne({
      where: { blockNumber: req.params.blockNumber },
    });

    if (!doc) {
      return res.status(400).json({ message: "Block number not found." });
    }

    if (doc.exitDate) {
      return res.status(400).json({ message: "Already exited." });
    }

    await doc.update({ exitDate: new Date().toISOString() });

    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(200).json({ message: error.message || "Internal server error" });
  }
});

module.exports = router;
