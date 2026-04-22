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
  avatarUrl: 'https://www.gravatar.com/avatar/?d=mp&s=200'
};

const product = {
  id: '1',
  name: 'Bluetooth Headphones',
  price: 299.99,
  description: 'High-quality bluetooth headphones with noise cancellation.',
  imageUrl: 'https://www.cnet.com/a/img/resize/04d033338c048db0560745605c8ae97527ad5f44/hub/2025/10/04/fffc6bc8-d193-43ad-a850-931e42f2f476/sony-wh-1000xm6-on-marble-1.jpg?auto=webp&fit=crop&height=1200&width=1200',
  inStock: true
};

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>


      <div className="container">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => {
            alert(`Editing User ${userId}`);
            setShowAlert(true);
          }}>
          {showAlert && (
            <AlertBox
              type='success'
              message='Your profile has been updated successfully!'
              onClose={() => setShowAlert(false)}
            />
          )}
        </UserProfileCard>

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={(productName) => alert(`Added ${productName} to cart`)}
        />
      </div>

    </div>
  )
}

export default App
