import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Grid, Row, Col, Panel, PageHeader, Image} from 'react-bootstrap'
import {Tabs, Tab} from 'react-bootstrap-tabs'
import style from './user-profile-view.css'

import {fetchUsers} from '../../state/users'


export default connect(
  state => ({
    maps: state.maps,
    users: state.users,
    games: state.games
  }),
  dispatch => ({
    fetchUsersHelper: () => dispatch(fetchUsers())
  })
)(
  class UserProfileView extends React.Component {
    render() {
      const {
        params,
        users,
        games,
        maps
      } = this.props

      const currentUser =
        users.data ?
          users.data.find(
            user => user.id === parseInt(params.userId, 10)
          ) : null

      if (currentUser === null) {
        return <p>Waiting for users data...</p>
      }

      return (
        <Grid>
          <PageHeader>Profil użytkownika<br/>
          </PageHeader>
          <Row>
            <Col xs={12} md={4} sm={6}>
              <div key={currentUser.id}>
                <Image
                  src={process.env.PUBLIC_URL + currentUser.picture}
                  alt={"Awatar użytkownika " + currentUser.name}
                  responsive
                />
              </div>
            </Col>

            <Col xs={12} sm={6} md={8}>
              <div key={currentUser.id}>
                <h3>{currentUser.name} {currentUser.surname}</h3>
                <p>{currentUser.about}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Panel>
                <Tabs id="noanim-tab-example">
                  <Tab headerClass='pointer' label="Posiadam">
                    <h3>Posiadam</h3>
                    <ul>
                      {
                        currentUser.id ?
                          <ul>
                            {
                              currentUser.gameList.map(
                                game => games.data.find(g => g.id === game)
                              ).map(
                                game => (
                                  <li key={game.id}>
                                    <Link to={'game-profile/' + game.id}>
                                      {game.name}
                                    </Link>
                                  </li>
                                )
                              )
                            }
                          </ul> : null
                      }

                    </ul>
                  </Tab>
                  <Tab headerClass='pointer' label="Szukam">
                    <h3>Szukam</h3>
                    <ul>
                      {
                        currentUser.id ?
                          <ul>
                            {
                              currentUser.wishList.map(
                                game => games.data.find(g => g.id === game)
                              ).map(
                                game => (
                                  <li key={game.id}>
                                    <Link to={'game-profile/' + game.id}>
                                      {game.name}
                                    </Link>
                                  </li>
                                )
                              )
                            }
                          </ul> : null
                      }

                    </ul>
                  </Tab>
                </Tabs>
              </Panel>
              <Panel>
                <Maps />
              </Panel>
            </Col>
          </Row>
        </Grid>
      )
    }
  }
)

