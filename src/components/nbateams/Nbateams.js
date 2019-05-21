import { Grid, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getNbaTeams } from '../../actions/nbateams';
import RatingHeart from '../layout/RatingHeart';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Nbateams extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  componentDidMount() {
    this.props.getNbaTeams();
  }

  updateSearch(e) {
    this.setState({ search: e.target.value.substr(0, 20) });
  }

  CellFormatter(cell, row) {
    return (
      <img
        src={`https://www.nba.com/assets/logos/teams/primary/web/${
          row.abbreviation
        }.svg`}
        alt=""
      />
    );
  }

  CellFormatterRate(cell, row) {
    return <RatingHeart defaultRating={0} maxRating={1} />;
  }

  render() {
    const { nbateams, loading } = this.props.nbateams;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              {loading ? (
                <Spinner />
              ) : (
                <div style={{ marginTop: '30px' }}>
                  <h2 className="large">
                    <img src="favicon.ico" alt="" /> Browse and like NBA teams
                  </h2>
                  <div className="container">
                    <BootstrapTable data={nbateams.data} search={true}>
                      <TableHeaderColumn
                        width={window.innerWidth < 768 ? '200' : '100%'}
                        dataField="id"
                        isKey
                        dataFormat={this.CellFormatter}
                      >
                        Logo
                      </TableHeaderColumn>
                      <TableHeaderColumn
                        dataField="abbreviation"
                        dataSort
                        width={window.innerWidth < 768 ? '200' : '100%'}
                      >
                        Abbreviation
                      </TableHeaderColumn>
                      <TableHeaderColumn
                        dataField="city"
                        dataSort
                        width={window.innerWidth < 768 ? '200' : '100%'}
                      >
                        City
                      </TableHeaderColumn>
                      <TableHeaderColumn
                        dataField="conference"
                        dataSort
                        width={window.innerWidth < 768 ? '200' : '100%'}
                      >
                        Conference
                      </TableHeaderColumn>
                      <TableHeaderColumn
                        dataField="division"
                        dataSort
                        width={window.innerWidth < 768 ? '200' : '100%'}
                      >
                        Division
                      </TableHeaderColumn>
                      <TableHeaderColumn
                        dataField="full_name"
                        dataSort
                        width={window.innerWidth < 768 ? '200' : '100%'}
                      >
                        Full Name
                      </TableHeaderColumn>
                      <TableHeaderColumn
                        dataField="name"
                        dataSort
                        width={window.innerWidth < 768 ? '200' : '100%'}
                      >
                        Name
                      </TableHeaderColumn>
                      <TableHeaderColumn
                        dataFormat={this.CellFormatterRate}
                        width={window.innerWidth < 768 ? '200' : '100%'}
                      >
                        Like
                      </TableHeaderColumn>
                    </BootstrapTable>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Nbateams.propTypes = {
  getNbaTeams: PropTypes.func.isRequired,
  nbateams: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  nbateams: state.nbateams
});

export default connect(
  mapStateToProps,
  { getNbaTeams }
)(Nbateams);
