import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import categoryApi from 'api/categoryApi';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    '& > li': {
      marginTop: theme.spacing(1),
      transition: 'all .25s',
      '&:hover': {
        cursor: 'pointer',
        color: theme.palette.primary.light,
      },
    },
  },
}));

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(
          list.map((x) => ({
            name: x.name,
            id: x.id,
          }))
        );
      } catch (error) {
        console.log('failed to fetch category list', error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MUC SAN PHAM</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li onClick={() => handleCategoryClick(category)} key={category.id}>
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
