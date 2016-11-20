'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Layout from '../templates/layouts/default.jsx';
import Index from '../templates/views/index.jsx';
const Blog = () => <div>Blog</div>;

console.log('router');

module.exports = (
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index} />
      <Route path="blog" component={Blog} />
      {/* ... */}
    </Route>
  </Router>
);
