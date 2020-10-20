import React from "react";
import { useParams } from "react-router-dom";

const CaseProfile = () => {
  const { crimeId } = useParams();
  return <div className="text-2xl">{crimeId}</div>;
};

export default CaseProfile;
