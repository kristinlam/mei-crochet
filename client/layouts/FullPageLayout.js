import React from 'react';
import classNames from 'classnames';

const FullPageLayout = ({
  children,
  backgroundColor,
  textColor,
  xCentered,
  yPadding,
  className,
}) => {
  const containerClasses = classNames(
    'min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4.5rem)]', // subtract height of navbar
    {
      'flex flex-col items-center': xCentered,
    },
    backgroundColor ? `bg-${backgroundColor}` : 'bg-beige-100'
  );

  const contentClasses = classNames(
    'max-w-screen-2xl px-6 mx-auto',
    yPadding ? `py-${yPadding}` : 'py-10',
    textColor,
    className
  );

  return (
    <div className={containerClasses}>
      <div className={contentClasses}>{children}</div>
    </div>
  );
};

export default FullPageLayout;
