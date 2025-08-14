import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart({ cart = [], removeFromCart }) {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('₹', ''));
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛒</div>
          <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
          <p className="text-gray-600 mb-6">Start shopping to add items to your cart</p>
          <button 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            onClick={() => window.location.href = '/products'}
          >
            Browse Products
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {cart.map((item, idx) => (
              <div key={idx} className="card flex items-center p-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg mr-4" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                  <p className="text-green-600 font-bold text-xl mb-1">{item.price}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {removeFromCart && (
                  <button 
                    className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg ml-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
          
          {/* Cart Summary */}
          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">Total: ₹{calculateTotal()}</span>
            </div>
            <button 
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
              onClick={() => navigate('/shipping')}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}