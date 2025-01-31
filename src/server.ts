import express from "express";
import { AppDataSource } from "./database/data-source";
import companyRoutes from "./routes/companyRoutes/companyRoutes";
import productRoute from "./routes/productRoutes/productRoute";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AppDataSource.initialize()
  .then(() => {
    console.log("Postgres is connected successfully");
    app.use("/api/v1/company", companyRoutes);
    app.use("/api/v1/product", productRoute);
  })
  .catch((e: any) => {
    console.log("error while connecting database" + e);
  });

app.listen(5000, () => {
  console.log("app is running at prot 5000");
});
