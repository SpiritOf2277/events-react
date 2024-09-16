import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderItem from './OrderItem';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const updateOrder = (updatedOrder) => {
    setOrders(orders.map(order => order.id === updatedOrder.id ? updatedOrder : order));
  };

  return (
    <div>
      <h2>Order List</h2>
      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        orders.map(order => (
          <OrderItem key={order.id} order={order} onUpdateOrder={updateOrder} />
        ))
      )}
    </div>
  );
};

export default OrderList;
