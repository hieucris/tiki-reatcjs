import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Tabs
      value={currentSort}
      onChange={handleSortChange}
      indicatorColor="primary"
      textColor="primary"
      aria-label="disable tabs example"
    >
      <Tab label="Gía từ thấp lên cao" value="salePrice:ASC"></Tab>
      <Tab label="Gía từ cao xuống thấp" value="salePrice:DESC"></Tab>
    </Tabs>
  );
}

export default ProductSort;
