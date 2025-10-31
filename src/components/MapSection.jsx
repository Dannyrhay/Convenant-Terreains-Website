import React from 'react';

const MapSection = () => {
  return (
    // The main section container
    <section>
      {/* This div now only contains the text and has the necessary padding */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 pt-16 pb-12 sm:pt-24">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wider uppercase">
                    Our Location
                </h2>
                <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                    Visit us at our head office in Accra, conveniently located near major city landmarks.
                </p>
            </div>
        </div>
      </div>

      {/* This div contains only the map. It is now full-width with no bottom padding, so it will be flush with the footer. */}
      <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.495202617652!2d-0.1685236856387682!3d5.65050999592497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebae8e635%3A0x3e39d89751334977!2sKotoka%20International%20Airport!5e0!3m2!1sen!2sgh!4v1678886432123!5m2!1sen!2sgh"
            width="100%"
            height="450"
            style={{ border: 0, display: 'block' }} // 'display: block' helps remove any small, lingering space under the iframe
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale(1) hover:filter-none transition-all duration-500"
          ></iframe>
      </div>
    </section>
  );
};

export default MapSection;