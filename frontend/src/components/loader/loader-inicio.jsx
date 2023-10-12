import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../../assets/img/KARIO_LOGO.png';

const LoaderInicio = () => {
  const [redirect, setRedirect] = useState(false);
  const [effect, setEffect] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setEffect(true); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (effect) {
      const redirectTimer = setTimeout(() => {
        setRedirect(true); 
      }, 1000); 
      return () => clearTimeout(redirectTimer);
    }
  }, [effect]);

  if (redirect) {
    return <Redirect to="/login" />;
  }

  
  const logoClass = `logo-login-inicio ${effect ? 'effect-out' : ''}`;

  return (
    <div className='background'>
      <div className='filter-login'>
        <img src={logo} alt="KARIO" className={logoClass} />
      </div>
    </div>
  );
};

export default LoaderInicio;
