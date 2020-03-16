import React from 'react';
import PropTypes from 'prop-types';

const viewportContext = React.createContext({});

export const ViewportProvider = ({ breakpoint, children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  let screen = 'mobile';

  if (width > breakpoint) {
    screen = 'desktop';
  }

  return (
    <viewportContext.Provider value={{ screen, width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

ViewportProvider.propTypes = {
  breakpoint: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};


export const useViewport = () => {
  const { screen, width, height } = React.useContext(viewportContext);
  return { screen, width, height };
};
