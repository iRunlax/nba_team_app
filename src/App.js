import React from 'react'
import Search from './Components/Search'
import nbateams from './nbateams.json'
import PlayerTable from './Components/PlayerTable'
import Header from './Components/Header'

console.log(nbateams)
const App = () => {
  return (
    <div>
      <Header />
      <Search />
      {nbateams.teams.map((team, index) => (
        <PlayerTable
          key={index}
          image={team.image}
          teamName={team.teamName}
          arena={team.arena}
          location={team.location}
          conference={team.conference}
          division={team.division}
          players={team.players}
        />
      ))}
    </div>
  )
}

export default App
