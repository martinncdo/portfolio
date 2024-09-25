import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { initMercadoPago, Wallet, Payment } from '@mercadopago/sdk-react'
import MercadoPagoConfig from "mercadopago";

function App() {
  const [count, setCount] = useState(0);
  const [dataId, setDataId] = useState(null);
  const customization = {
    paymentMethods: {
      ticket: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
   };
   const onSubmit = async (
    { selectedPaymentMethod, formData }
   ) => {
    console.log(selectedPaymentMethod, formData)
    // callback llamado al hacer clic en el botón enviar datos
    return new Promise((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          alert("Pago exitoso con ", String(selectedPaymentMethod))
          // recibir el resultado del pago
          setTimeout(() => {
            window.paymentBrickController.unmount()
          }, 3000);
        })
        .catch((error) => {
          // manejar la respuesta de error al intentar crear el pago
          reject();
        });
    });
   };
   const onError = async (error) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
   };
   const onReady = async () => {
    /*
      Callback llamado cuando el Brick está listo.
      Aquí puede ocultar cargamentos de su sitio, por ejemplo.
    */
   };
   

  useEffect(() => {
    initMercadoPago('TEST-d3bae7c2-162f-4fe7-980a-6dca0a24ca2e', {locale: 'es-AR'});

    fetch("http://localhost:3000/hello")
    .then(response => response.json())
    .then(info => {
      console.log(info)
      setDataId(info.id)
    })
  },[])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {dataId && 
      
      // <Wallet initialization={{ preferenceId: dataId, redirectMode: 'blank'}} customization={{ texts:{ valueProp: 'smart_option'}}} />

      <Payment initialization={{ amount: 100, preferenceId: dataId, redirectMode: 'self' }}
      customization={customization}
      onSubmit={onSubmit}
      onReady={onReady}
      onError={onError}
   />
   
      }
    </div>
  );
}

export default App;
