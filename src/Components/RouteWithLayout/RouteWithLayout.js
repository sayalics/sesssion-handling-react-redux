import React from 'react';
import { Route , withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class RouteWithLayout extends React.Component{
    render(){
        const { layout: Layout, component: Component, appProps ,  ...rest } = this.props;

            return (
                <Route
                {...rest}
                render={matchProps => (
                    <Layout>
                    <Component {...matchProps} {...appProps} />
                    </Layout>
                )}
            />
        );
}
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default withRouter(RouteWithLayout);