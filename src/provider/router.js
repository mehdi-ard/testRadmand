import React, { Suspense } from 'react';
import { withRouter, Switch } from 'react-router-dom';
import GuradRoute from './gurad';

function Router(props) {
  const { routes } = props;

  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        {routes.map((route) => (
          <GuradRoute
            key={route.path}
            title={route.title}
            exact={route.exact}
            path={route.path}
            render={() => {
              document.title = `تست | ${route.title}`;
              const Page = route.component();
              return <Page />;
            }}
            {...props}
            guard={route.guard}
            breadcrumb={route.titleBreadcrumb}
          />
        ))}
      </Switch>
    </Suspense>
  );
}

export default withRouter(Router);
