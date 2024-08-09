// src/App.tsx
import { FC } from 'react';
import './index.css';

import { ColumnHeaderMenu } from './components/ColumnHeaderMenu/ColumnHeaderMenu';
import { PriceDropdown } from './components/PriceDropdown/PriceDropdown';




const App: FC = () => {
  return (
    <div className="card">
      <h1>PriceDropdown</h1>
      <PriceDropdown />
      <h1>LabelWithMenu</h1>
      <ColumnHeaderMenu />
    </div>
  );
};

export default App;
