import React, { useState, useEffect } from "react";
import { addOffer, getOfferById, updateOffer } from "../../services/offerService";
import { useNavigate, useParams } from "react-router-dom";

function OfferForm() {
  const [offer, setOffer] = useState({ title: "", description: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getOfferById(id).then(data => setOffer(data));
    }
  }, [id]);

  const handleChange = (e) => setOffer({ ...offer, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateOffer(id, offer).then(() => navigate("/offers"));
    } else {
      addOffer(offer).then(() => navigate("/offers"));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={offer.title} onChange={handleChange} placeholder="Title" />
      <input name="description" value={offer.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">{id ? "Update" : "Add"} Offer</button>
    </form>
  );
}

export default OfferForm;
