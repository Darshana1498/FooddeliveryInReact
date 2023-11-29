import { Fragment } from 'react';

import MealsSummary from './MEALS_SUMMARY/MealsSummary';
import AvailableMeals from '../MEALS/AvailableMeals';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;




