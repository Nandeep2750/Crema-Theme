import {authRouteConfig} from './auth';
import {initialUrl} from 'shared/constants/AppConst';
import {Navigate} from 'react-router-dom';
import Error403 from './errorPages/Error403';
import React from 'react';
import {errorPagesConfigs} from './errorPages';
import {samplePagesConfigs} from './sample';
import {extraPagesConfigs} from './extraPages';

const authorizedStructure = {
  fallbackPath: '/signin',
  unAuthorizedComponent: <Error403 />,
  routes: [...samplePagesConfigs, ...extraPagesConfigs],
};

const unAuthorizedStructure = {
  fallbackPath: initialUrl,
  routes: authRouteConfig,
};

const anonymousStructure = {
  routes: errorPagesConfigs.concat([
    {
      path: '*',
      element: <Navigate to='/error-pages/error-404' />,
    },
  ]),
};

export {authorizedStructure, unAuthorizedStructure, anonymousStructure};
