'use client'
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5512991604267', '_blank');
  };

  return (
    <div className={styles.whatsappButton} onClick={handleWhatsAppClick}>
      <img
        src="/WhatsApp_icon.png" 
        alt="Ícone do WhatsApp"
        width={50}
        height={50}
      />
    </div>
  );
};

export default WhatsAppButton;
