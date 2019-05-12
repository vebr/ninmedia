import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getData } from '../actions/member';


class DataListing extends Component {
  static propTypes = {
    // stores: PropTypes.shape({
    //   loading: PropTypes.bool.isRequired,
    //   error: PropTypes.string,
    //   }).isRequired,
    // match: PropTypes.shape({
    //   params: PropTypes.shape({}),
    // }),
    fetchData: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  state = {
    error: null,
    loading: false,
  }
  
  async componentWillMount() {
    this.fetchData();
  }

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchData = async (data) => {
    const { fetchData } = await this.props;
    await this.setState({ loading: true });

    return await fetchData(data)
    .then(() => this.setState({
      loading: false,
      error: null,
    }))
      .catch((err) => {
        this.setState({
          loading: false,
          error:err,
        });
        console.log(err);
      });
  }
  
  render = () => {
    const { Layout, datas, match } = this.props;
    const id = (match && match.params && match.params.id) ? match.params.id : null;
    return (
        <Layout
        storeId={id}
        error={datas.error}
        loading={this.state.loading}
        datas={datas}
        reFetch={() => this.fetchData()}
      />
    );
  }
}

const mapStateToProps = state => ({
  datas: state.member.datas || {},
});

const mapDispatchToProps = {
  fetchData: getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataListing);
