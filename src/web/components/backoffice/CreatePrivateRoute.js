import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

import Template from './Template';

const CreatePrivateRoute = ({ comp,component,layout,title,metaDesc, auth, ...rest}) => {
  let ComponentToRender = component;
  let LayoutToRender = layout;

  return (
    <Route
        {...rest}
        render={props => (
            auth ?
            <Redirect to={{ pathname: "/backoffice", state: { from: props.location } }}/>
            :
            <Template pageTitle={title} metaDesc={metaDesc}>
              <ComponentToRender {...props} Layout={LayoutToRender}/>
            </Template>
            
        )}
    />
  );
}

const mapStateToProps = (state) => ({ auth: state.member.uid });

export default withRouter(connect(mapStateToProps)(CreatePrivateRoute));
