
import { useEffect, useState } from 'react';

const WhatsAppWave = () => {
  const [showWave, setShowWave] = useState(false);

  useEffect(() => {
    // Show wave animation after a short delay when page loads
    const timer = setTimeout(() => {
      setShowWave(true);
    }, 500);

    // Hide wave after animation completes
    const hideTimer = setTimeout(() => {
      setShowWave(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!showWave) return null;

  return <div className="whatsapp-wave" />;
};

export default WhatsAppWave;
