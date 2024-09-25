import express from "express";
import ViteExpress from "vite-express";
// SDK de Mercado Pago
import { MercadoPagoConfig, Preference, Payment } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-1939204849680264-103112-0cb2adda3d4f6afbe595fdc911ba0c11-1087998956' });

const payment = new Payment(client);

const app = express()

app.use(express.json())

app.get("/hello", (req, res) => {
  
const preference = new Preference(client);

preference.create({
  body: {
    items: [
      {
        title: 'Mi producto',
        quantity: 1,
        unit_price: 2000
      }
    ],
    back_urls: {
      success: "http://localhost:3000/success",
      failure: "http://localhost:3000/failure"
    }
  },
})
.then(data => {
  console.log(data)
  res.json(data)
})
.catch(err => {
  console.log(err)
  res.json(err)
})
});

app.get("/success", (req, res) => {
  res.send("Holaaa")
});

app.get("/failure", (req, res) => {
  res.send("Error")
});

app.post("/process_payment", (req, res) => {
  const { body } = req;

 payment.create({ body: body })
 .then(data => {
  res.status(201).json({
    detail: data.status_detail,
    status: data.status,
    id: data.id
  });
 })
 .catch(err => {
  console.log(err)
 });
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening http://localhost:3000"),
);
