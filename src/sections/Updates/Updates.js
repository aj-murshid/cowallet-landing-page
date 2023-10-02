import React from "react";
import "./Updates.css";
import UpdatesCard from "../../components/Updates/UpdatesCard";
import { updates } from "../../data/updates";

const Updates = () => {
  return (
    <div className="updates">
      <h1 className="heading capital">Latest updates</h1>
      <p className="sub-heading capital">Get latest news and updates</p>

      <div className="updates-card">
        {updates.map((update) => (
          <UpdatesCard
            img={update.img}
            date={update.date}
            title={update.title}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Updates;
