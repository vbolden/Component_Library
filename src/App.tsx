import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertBox from './components/AlertBox/AlertBox';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';

const user = {
  id: '1',
  name: 'Abigail Smith',
  email: 'abagail.smith@example.com',
  role: 'Full Stack Engineer',
  avatarUrl: 'https://example.com/avatar.jpg'
};

const product = {
  id: '1',
  name: 'Bluetooth Headphones',
  price: 299.99,
  description: 'High-quality bluetooth headphones with noise cancellation.',
  imageUrl: 'https://example.com/headphones.jpg',
  inStock: true
};

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <AlertBox
          type='success'
          message='Your profile has been updated successfully!'
          onClose={() => alert('Alert closed')}
        />
      )}

      <div className="container">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing User ${userId}`)}
        />

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
        />
      </div>

    </div>
  )
}

export default App
