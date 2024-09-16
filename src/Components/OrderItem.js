import React, { useState } from 'react';
import axios from 'axios';

const OrderItem = ({ order, onUpdateOrder }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(order);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    axios.put(`/api/orders/${order.id}`, formData)
      .then(response => {
        onUpdateOrder(response.data);
        setIsEditing(false);
      })
      .catch(error => console.error('Error updating order:', error));
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>{order.name}</p>
          <p>Quantity: {order.quantity}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
