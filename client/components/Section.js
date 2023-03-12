import React from 'react';
import classNames from 'classnames';

const Section = ({ children, backgroundColor, textColor, ...rest }) => {
  const classes = classNames(
    'flex flex-col items-center justify-center py-24 px-8 sm:px-14',
    backgroundColor,
    textColor,
    rest.className
  );
  return (
    <section {...rest} className={classes}>
      <div className="max-w-screen-2xl">{children}</div>
    </section>
  );
};

export default Section;
