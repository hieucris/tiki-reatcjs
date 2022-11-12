import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Checkbox, FormControlLabel, makeStyles, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },

  list: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',

    '& > li': {
      margin: 0,
    },
  },
}));

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (onChange) onChange({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DỊCH VỤ</Typography>

      <ul className={classes.list}>
        {[
          { value: 'isPromotion', label: 'Có khuyến mãi' },
          { value: 'isFreeShip', label: 'Miễn phí vận chuyển' },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters[service.value]}
                  onChange={handleChange}
                  name={service.value}
                  color="primary"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
