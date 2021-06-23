import React, { useState, useEffect } from 'react';
import { getOrders, getOrdersReady } from '../controller/firestoreController';

import EnteredOrder from '../components/OrderKitchen';
import ReadyOrder from '../components/Ready';

const Kitchen = () => {
  const [enteredOrder, setEnteredOrder] = useState([]);
  const [readyOrder, setReadyOrder] = useState([]);

  useEffect(() => {
    getOrders().then((arr) => setEnteredOrder(arr));
    getOrdersReady().then((arr) => setReadyOrder(arr));
  }, []);

  return (
    <div>

      <div className="">
        <div className="">
          <p>PEDIDOS INGRESADOS</p>
        </div>
        <div className="">
          <p>PEDIDOS LISTOS</p>
        </div>
      </div>
      <div className="">
        <EnteredOrder enteredOrder={enteredOrder} />
        <ReadyOrder readyOrder={readyOrder} />
      </div>
    </div>
  );
};

export default Kitchen;