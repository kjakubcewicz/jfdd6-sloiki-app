import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'
import GoogleMap from 'google-map-react'

import {Grid, PageHeader, Panel, Button, Row, Col, Image} from 'react-bootstrap'

import {fetchGames} from '../../state/games'
import {favGame, unfavGame} from '../../state/favs'
import './game-card-view.css'

export default connect(
  state => ({
    users: state.users,
    games: state.games,
    changeRange: state.range.changeRange,
    favoriteGameIds: state.favs.favoriteGameIds,
    gameMap: state.maps.gameMap,
  }),
  dispatch => ({
    fetchGamesHelper: () => dispatch(fetchGames()),
    favGame: (gamesId) => dispatch(favGame(gamesId)),
    unfavGame: (gamesId) => dispatch(unfavGame(gamesId))
  })
)(
  class GameProfileView extends React.Component {
    render() {
      const {
        maps,
        users,
        games,
        params,
        favGame,
        unfavGame,
        favoriteGameIds
      } = this.props

      if (games.data === null) {
        return <p>Waiting for games...</p>
      }

      const currentGame = games.data.find(
        game => game.id === parseInt(params.gameId, 10))

      const prevGame = (
        (currentGame.id > 1) ? (currentGame.id - 1) : (games.data.length)
      )

      const nextGame = (
        (currentGame.id <= games.data.length - 1) ? (currentGame.id + 1) : (1)
      )
      const defaultProps = {
        center: {lat: 54.403207, lng: 18.569882},
        zoom: 15
      };
      return (
        <Grid>
          <div>
            <PageHeader>Profil gry <br/>
              <small>Zapoznaj się ze szczegółami wybranej pozycji</small>
            </PageHeader>
            {
              <div>
                <Row key={currentGame.id}>
                  <Col xs={12} sm={6} md={4}>
                    <Image src={currentGame.image}
                           alt="Zdjęcie gry"
                           responsive
                    />
                  </Col>
                  <Col xs={12} sm={6} md={8}>
                    <h2>{currentGame.name}</h2>
                    <div>
                      {
                        favoriteGameIds.includes(currentGame.id) ?
                          (
                            <img
                              className="fav"
                              role="persentation"
                              src={process.env.PUBLIC_URL + '/img/favorite-remove.png'}
                              onClick={() => unfavGame(currentGame.id)}
                            />
                          ) :
                          (
                            <img
                              className="fav"
                              role="persentation"
                              src={process.env.PUBLIC_URL + '/img/favorite-add.png'}
                              onClick={() => favGame(currentGame.id)}
                            />
                          )
                      }
                    </div>
                    <Panel>
                      <LinkContainer to={'/game-profile/' + prevGame}>
                        <Button>
                          Poprzednia
                        </Button>
                      </LinkContainer>

                      <LinkContainer to={'/game-profile/' + nextGame}>
                        <Button>
                          Następna
                        </Button>
                      </LinkContainer>
                    </Panel>

                    <Panel header="Liczba graczy">{currentGame.playersMin} - {currentGame.playersMax}</Panel>
                    <Panel header="Gracze, którzy posiadaja grę">
                      {
                        users.data ?
                          users.data.filter(
                            user => user.gameList.includes(currentGame.id)
                          ).map(
                            user =>
                              <Link to={'/user-profile/' + user.id}>
                                <img key={user.id} role="persentation" className="avatars" src={user.picture}
                                     alt="Zdjęcie uzytkownikow posiadajacych gre"/>
                              </Link>


                          ) : null
                      }

                    </Panel>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} sm={12}>
                    <Panel header="Opis">{currentGame.description}</Panel>






                    <Panel header="Mapa gier">
                      <div className="maps-container">
                        <GoogleMap
                          bootstrapURLKeys={{
                            key: 'AIzaSyAPyvag8LwkwRzzkIKyrwmPgkSGVS3cuf8'
                          }}
                          center={[54.360765, 18.633659]}
                          zoom={15}>
                        </GoogleMap>
{/*                          <GamePlace>



                          </GamePlace>*/}

                      </div>
                    </Panel>






                  </Col>
                </Row>
              </div>
            }
          </div>
        </Grid>
      )
    }
  }
)

