import React, { useEffect, useState } from "react";
import { getOffers, deleteOffer } from "../../services/offerService";
import { Link } from "react-router-dom";

function OffersList() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    loadOffers();
  }, []);

  const loadOffers = () => {
    getOffers().then(data => setOffers(data));
  };

  const handleDelete = (id) => {
    deleteOffer(id).then(() => loadOffers());
  };

  return (
    <div>
      <h2>Offers</h2>
      <Link to="/offers/add">Add Offer</Link>
      <table>
        <thead>
        <tr>
          <th>ID</th><th>Title</th><th>Description</th><th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {offers.map(offer => (
          <tr key={offer.id}>
            <td>{offer.id}</td>
            <td>{offer.title}</td>
            <td>{offer.description}</td>
            <td>
              <Link to={`/offers/edit/${offer.id}`}>Edit</Link>
              <button onClick={() => handleDelete(offer.id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default OffersList;
