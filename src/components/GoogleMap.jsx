import React from "react";

const GoogleMap = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d31681.258275292046!2d79.939191!3d6.990748!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1739461714737!5m2!1sen!2sph"
        width="600"
        height="450"
        allowfullscreen=""
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full h-[500px] rounded-lg"
        // width="500"
        // height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
