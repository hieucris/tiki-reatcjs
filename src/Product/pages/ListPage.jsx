import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import productApi from 'api/productApi';
import { useState } from 'react';
import ProductSkeletonList from 'Product/components/ProductSkeletonList';
import ProductList from 'Product/components/ProductList';
import { Pagination } from '@material-ui/lab';

ListPage.propTypes = {};

const useStyle = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',

    marginTop: '30px',
    paddingBottom: '20px',
  },
}));

function ListPage(props) {
  const classes = useStyle();

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 12,
  });
  const [pagination, setPagination] = useState({
    total: 10,
    limit: 12,
    page: 1,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
        console.log({ data, pagination });
      } catch (error) {
        console.log('faild fetch Api Products');
      }
      setLoading(false);
    })();
  }, [filters]);

  const handleChangePage = (e, page) => {
    setFilters((preFilters) => ({
      ...preFilters,
      _page: page,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {loading ? <ProductSkeletonList length={12} /> : <ProductList data={productList} />}
              <Box className={classes.pagination}>
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  onChange={handleChangePage}
                  color="primary"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
