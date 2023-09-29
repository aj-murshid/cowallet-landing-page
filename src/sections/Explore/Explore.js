import React from 'react'
import "./Explore.css"
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import data from "../../../src/data/moreFeatures.json"
import img1 from "/public/images/project.png";


const Explore = () => {
  return (
    <div className='explore'>
      <h1 className="heading capital">explore more features</h1>
      <p className="capital">discover the power of our feature-rich platform</p>

      <div className='features-card'>
        {data.features.map((feature) => (
          <FeatureCard img={img1} data={feature.data} />
        ))}
      </div>
    </div>
  )
}

export default Explore