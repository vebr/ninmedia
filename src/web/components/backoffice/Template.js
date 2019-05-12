import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import {Sidebar} from './Sidebar';
import { connect } from 'react-redux';

const Template = ({ pageTitle, children, member,metaDesc }) => (
  <div>
    <Helmet>
      <title>Ninmedia - {pageTitle}</title>
      <meta name="description" content={metaDesc} />
    </Helmet>

    {/* <Member Layout={children} /> */}
    <div>
      <div>
        <div className=" ml-sm-auto">
          {children}
        </div>
      </div>
    </div>
  </div>
);

Template.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Template.defaultProps = {
  pageTitle: 'Store Index',
};

const mapStateToProps = state => ({
  member: state.member || {},
});

export default connect(mapStateToProps)(Template);
