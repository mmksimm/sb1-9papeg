import React, { useEffect } from 'react';
import { WebApp } from '@twa-dev/sdk';
import { MiningStats } from './components/MiningStats';
import { MiningProgress } from './components/MiningProgress';
import { Equipment } from './components/Equipment';

function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.setHeaderColor('#1a1b1e');
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <MiningStats />
        <MiningProgress />
        <Equipment />
      </div>
    </div>
  );
}

export default App;