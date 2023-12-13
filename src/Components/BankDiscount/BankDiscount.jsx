import React from 'react';




export const BankDiscountCards = ({ data }) => {
  console.log(data);
  if (!data || data.length === undefined) {
    return <p>Loading...</p>; // or render a different message
  }
  if (data == [] || data.length ===0) {
    return <p>Loading...</p>; // or render a different message
  }

  return (
    <div>
      {data.map((offer, index) => (
        <div key={index} className="card">
          <img src={offer.image_url} alt={offer.title} />
          <div>

            <h3>{offer.title}</h3>
            <p>{offer.subtitle}</p>
            <p>{offer.button_cta_text}</p>
            
          </div>

          <ul>
            {offer.content[0].data.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
};



