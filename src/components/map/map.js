import React from "react";
import '../../styles/map.css'

const Map = () => {
  return (
    <div className='mapa-box'>
      <iframe
        className='mapa'
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.0929042574694!2d-77.135355305345!3d-12.043547096278527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cc764d346229%3A0x2a4a1399ec8f38c8!2sTERPEL%20(Planta%20Mobil)!5e0!3m2!1ses-419!2spe!4v1675729361636!5m2!1ses-419!2spe"
        width= '600px'
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
