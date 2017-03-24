import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Grid, Table} from 'react-bootstrap'


export default connect(
  state => ({
    users: state.users,
    games: state.games
  }),
  dispatch => ({})
)(

class UsersListView extends React.Component {
  render() {
    const {
      users,
      games,
    } = this.props

    return (
      <Grid>
        <h1>Lista użytkowników</h1>

        <Table striped>
          <thead>
          <tr>
            <th></th>
            <th>Imię i nazwisko</th>
            <th>Posiadane gry</th>
            <th>Lista życzeń</th>
          </tr>
          </thead>
          <tbody>
          {
            users.data ?
              users.data.map(
                user => (
                  <tr key={user.id}>
                    <td>
                      <img src={user.picture}
                             alt="Zdjecie gry"
                             height="70"
                      />
                    </td>
                    <td>
                      <Link to={'/user-profile/' + user.id}>
                        {user.name} {user.surname}
                      </Link>
                    </td>
                    <td>
                      {
                        user.id ? (
                              user.gameList.map(
                                gameId => games.data.find(game => game.id === gameId)
                              ).map(
                                game => (
                                  <div key={game.id}>
                                    <Link to={'game-profile/' + game.id}>
                                      {game.name}
                                    </Link>
                                  </div>
                                )
                              )
                        ) : null
                      }
                    </td>
                    <td>
                      {
                        user.id ? (
                              user.wishList.map(
                                game => games.data.find(g => g.id === game)
                              ).map(
                                game => (
                                  <div key={game.id}>
                                    <Link to={'game-profile/' + game.id}>
                                      {game.name}
                                    </Link>
                                  </div>
                                )
                              )
                        ) : null
                      }
                    </td>
                  </tr>
                )
              )
              : <tr><td colSpan="4">Oczekiwanie na dane użytkowników...</td></tr>
          }
          </tbody>
        </Table>
      </Grid>
    )
  }
}
)