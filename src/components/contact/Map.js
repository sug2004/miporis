import React from 'react';

function Map() {
    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 py-8">
            {/* Title */}
            <h2 className="text-center text-black font-lmk text-[36px] mb-6">
                Our Office
            </h2>

            {/* Google Maps iframe */}
            <div className="relative">
                <iframe
                    className="w-full h-[320px] md:h-[400px] lg:h-[500px] "
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2109808860705!2d-0.5603583!3d51.5093452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767003e9a483c7%3A0xb1c77bb98565c0d6!2sChadwick%20Rd%2C%20Slough%20SL3%207FT%2C%20UK!5e0!3m2!1sen!2sin!4v1730276168238!5m2!1sen!2sin"
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}

export default Map;
