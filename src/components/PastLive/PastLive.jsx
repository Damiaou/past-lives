import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropType from "prop-types";
import "./PastLive.css";

export function PastLive({ animal, adjective, loading }) {
  const [show, setShow] = useState("");
  useEffect(() => {
    setShow("show");
  }, []);
  return (
    <div className="card">
      <h2 className={`card-title ${show}`}>You were</h2>

      <h3 className={`capitalize card-body ${show}`}>
        {!loading ? (
          `A ${adjective} ${animal}`
        ) : (
          <CircularProgress color="black" />
        )}
      </h3>
    </div>
  );
}

PastLive.propType = {
  animal: PropType.string.isRequired,
  adjective: PropType.string.isRequired
};
