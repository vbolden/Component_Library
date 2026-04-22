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
}

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
        />

        {/* <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddtoCart}
        /> */}
      </div>

    </div>
  )
}

export default App
