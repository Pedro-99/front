import { useState, useEffect } from 'react';
import ratingService from '../../features/rating/ratingService';
import { useParams } from 'react-router-dom';
import './style.css';

const Stars = (props) => {

  const [rating, setRating] = useState([]);

  useEffect(() => {
  
    ratingService.getOneProductRating(props.id)
      .then((data) => setRating(data[0]))
      .catch((err) => console.log(err))


  }, [])

const starsTotal = 5;
const starPercentage = (rating.avg/ starsTotal) * 100;
const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  return (
    < >
      <div className="stars-outer">
        <div className="stars-inner" style={{
           'position': 'absolute',
           'top': 0,
           'left': 0,
           'white-space': 'nowrap',
           'overflow': 'hidden',
           'width': `${starPercentageRounded}`,
        }} >

        </div>
      </div>
      {
        (rating) ? <span className="number-rating">{rating.count} reviews</span> : <></>
      }
      
    </>
  )
}




export default Stars