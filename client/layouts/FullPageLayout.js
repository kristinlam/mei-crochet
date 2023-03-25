import React from 'react';
import classNames from 'classnames';

const FullPageLayout = ({
  children,
  backgroundColor,
  xCentered,
  productPage,
  cartPage,
  className,
}) => {
  const containerClasses = classNames(
    'min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4.5rem)]', // subtract height of navbar
    {
      'flex flex-col items-center': xCentered,
    },
    backgroundColor || 'bg-beige'
  );

  const contentClasses = classNames(
    'py-10 px-6 mx-auto',
    {
      'sm:px-12 flex flex-col lg:flex-row': productPage,
      'max-w-5xl sm:px-14': cartPage,
      'max-w-7xl': !cartPage && !productPage,
    },
    className
  );

  return (
    <div className={containerClasses}>
      <div className={contentClasses}>{children}</div>
    </div>
  );
};

export default FullPageLayout;
