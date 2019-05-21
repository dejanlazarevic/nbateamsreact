import React from 'react';
import { Rating } from 'semantic-ui-react';

const RatingHeart = () => (
  <Rating icon="heart" defaultRating={0} maxRating={1} size="huge" />
);

export default RatingHeart;
