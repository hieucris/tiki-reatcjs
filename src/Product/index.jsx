import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';
import { Box } from '@material-ui/core';
import DetailPage from './pages/DetailPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch;
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
        <Route path={`${match.url}/:productId`} component={DetailPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
