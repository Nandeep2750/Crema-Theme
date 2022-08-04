import React from 'react';
import {Progress} from 'antd';
import PropTypes from 'prop-types';
import './index.style.less';

const GridFooter = ({loading, footerText}) => {
  if (loading) {
    return (
      <div className='loader-progress'>
        <Progress percent={30} />
        <span>Loading...</span>
      </div>
    );
  } else {
    return (
      <div className='list-footer'>
        <p>{footerText}</p>
      </div>
    );
  }
};

GridFooter.propTypes = {
  loading: PropTypes.bool.isRequired,
  footerText: PropTypes.string.isRequired,
};

GridFooter.defaultProps = {
  loading: false,
  footerText: '',
};

export default GridFooter;
