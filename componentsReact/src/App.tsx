// src/App.tsx
import { FC } from 'react';
import './index.css';

import { LabelWithMenu } from './components/LabelWithMenu/LabelWithMenu';
import { PriceDropdown } from './components/PriceDropdown/PriceDropdown';




const App: FC = () => {
  return (
    <div className="card">
      <h1>PriceDropdown</h1>
      <PriceDropdown />
      <h1>LabelWithMenu</h1>
      <LabelWithMenu />
    </div>
  );
};

export default App;
