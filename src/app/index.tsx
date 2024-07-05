// pages/index.tsx

import Loading from '@/app/loading';
import { useState, useEffect } from 'react';

const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // Misol uchun 3 sekund

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    // Yuqori darajadagi yuklanishni aniqlash uchun
    setTimeout(() => {
      setLoading(false);
    }, 6000); // Misol uchun 3 sekund
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="text-center">
          <h1>Salom, Dunyo!</h1>
          <p>Next.js bilan yuklanmoqda...</p>
          <button onClick={handleRefresh} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Refresh
          </button>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
