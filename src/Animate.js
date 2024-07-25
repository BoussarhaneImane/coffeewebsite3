import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import image from './BACK13.jpg'
const ScrollAnimation = () => {
  const controls = useAnimation();

  // Fonction pour détecter le défilement et animer les éléments
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Vous pouvez ajuster ces valeurs selon vos besoins
    const triggerPosition = windowHeight * 0.1; // Position où l'animation est déclenchée

    if (scrollY > triggerPosition) {
      controls.start({ opacity: 1, y: 0, transition: { duration:0.1} }); // Animation lorsque l'élément est visible
    } else {
      controls.start({ opacity: 0, y: 50 }); // Animation lorsque l'élément est hors de la vue
    }
  };

  // Ajoute un écouteur d'événement pour détecter le défilement
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '' }}> {/* Div pour simuler un défilement */}
      <motion.div
      
        animate={controls}
        style={{ width: '100%', textAlign: 'center' }}
      >
        <motion.img
          src={image}
          alt="Votre image"
          style={{ maxWidth: '100%' }}
        />
        <motion.p>
          Votre texte ici
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;
