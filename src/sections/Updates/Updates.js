import React from "react";
import "./Updates.css";
import data from "../../../src/data/updates.json";
import UpdatesCard from "../../components/Updates/UpdatesCard";
import img1 from "/public/images/project.png";

const Updates = () => {
  return (
    <div className="updates">
      <h1 className="heading capital">Latest updates</h1>
      <p className="capital">Get latest news and updates</p>

      <div className="updates-card">
        {data.updates.map((update) => (
          <UpdatesCard
            img={img1}
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
