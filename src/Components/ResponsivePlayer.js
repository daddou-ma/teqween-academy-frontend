import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

export default function ResponsivePlayer({ maxWidth, style, ...props }) {
  return (
    <div style={{ maxWidth, width: '100%', ...style }}>
      <div style={{ position: 'relative', paddingTop: '56.25%', background: 'green' }}>
        <ReactPlayer
          width="100%"
          height="100%"
          style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, right: 0,
          }}
          {...props}
        />
      </div>
    </div>
  );
}

ResponsivePlayer.defaultProps = {
  maxWidth: 1280,
  style: {},
};

ResponsivePlayer.propTypes = {
  maxWidth: PropTypes.number,
  style: PropTypes.objectOf(Object),
};
