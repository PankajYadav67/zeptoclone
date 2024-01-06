const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = "YOUR_MONGODB_URI";

app.use(bodyParser.json());

// Connect to MongoDB
MongoClient.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    const db = client.db("your-database-name");
    const collection = db.collection("your-collection-name");

    // API endpoint to handle adding items to the database
    app.post("/cart", (req, res) => {
      const { id, totalQuantity } = req.body;

      // Update the MongoDB document based on your logic
      collection
        .findOneAndUpdate(
          { _id: id },
          { $set: { quantity: totalQuantity } },
          { returnDocument: "after" }
        )
        .then((updatedDocument) => {
          res.json(updatedDocument.value);
        })
        .catch((error) => {
          res.status(500).json({ error: "Internal server error" });
        });
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
