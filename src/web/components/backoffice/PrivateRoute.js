import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

import Template from './Template';

const PrivateRoute = ({ component,layout, title,metaDesc ,auth, ...rest }) => {
  let ComponentToRender = component;
  let LayoutToRender = layout;

  return (
    <Route
        {...rest}
        render={props => (
            auth ?
                <Template pageTitle={title} metaDesc={metaDesc}>
                    <ComponentToRender {...props} Layout={LayoutToRender}/>
                </Template>
            :
            <Redirect to={{ pathname: "/backoffice/login", state: { from: props.location } }}/>
        )}
    />
  );
};

const mapStateToProps = (state) => ({ auth: state.member.uid });
export default withRouter(connect(mapStateToProps)(PrivateRoute));
