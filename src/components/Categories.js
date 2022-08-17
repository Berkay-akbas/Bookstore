import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const selectCategories = (state) => state.categories;

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);

  const check = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={check}>Check Status</button>
      <div>
        {categories}
      </div>
    </div>
  );
};

export default Categories;
