import React from 'react';
import classNames from 'classnames';

const FullPageLayout = ({
  children,
  backgroundColor,
  textColor,
  centered,
  className,
}) => {
  const containerClasses = classNames(
    'min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4.5rem)]', // subtract height of navbar
    {
      'text-center': centered,
    },
    backgroundColor
  );

  const contentClasses = classNames(
    'max-w-screen-2xl py-10 px-6 mx-auto',
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
