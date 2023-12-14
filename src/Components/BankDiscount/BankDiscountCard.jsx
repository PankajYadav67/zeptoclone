import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import CopyToClipboard from 'react-copy-to-clipboard';

export const BankDiscountCard = ({ offer }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 500);
    };

    return (
        <div className="relative p-4 w-full md:w-1/2 lg:w-1/3">
            <div className="border-2 rounded-lg p-4 relative">
                <img src={offer.image_url} alt={offer.title} className="w-full h-40 object-contain mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.subtitle}</p>
                <div className="absolute top-2 right-2">
                    <CopyToClipboard text={offer.offer.value} onCopy={handleCopy}>
                        <button
                            className={`bg-[#94299e] text-white px-2 py-1 rounded focus:outline-none ${copied ? 'cursor-not-allowed' : 'hover:bg-[#b65eff]'}`} >
                          {copied ? 'Copied!' : <FontAwesomeIcon icon={faCopy} />}
                        </button>

                    </CopyToClipboard>
                </div>
            </div>
        </div>
    );
};
