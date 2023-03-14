import React from 'react';
import classNames from 'classnames';

const ProductListingLayout = ({ children, backgroundColor, className }) => {
  const classes = classNames(
    'max-w-screen-2xl py-10 px-6 sm:px-12 mx-auto flex flex-col lg:flex-row',
    (backgroundColor ||= 'bg-beige')
  );

  return <div className={classes}>{children}</div>;
};

export default ProductListingLayout;
