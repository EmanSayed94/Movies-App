import './App.css'
import Header from '../../components/Header'
import MovieCard from '../../components/MovieCard'
import SearchBox from '../../components/SearchBox'
import Home from '../Home'
import Spinner from '../../components/UIComponents/Spinner'

function App() {
  return (
    <>
      {' '}
      <Header />
      {/* <div className="card">
        <img
          className="movie__image"
          src={'assets/monstersinc.jpg'}
          alt="postal"
        />
        <div className="flex__card">
          <p className="heading">"movie.Title"</p>
          <p className="paragraph">movie.Year</p>
          <br />
        </div>
      </div> */}
      <Home />
      {/* <MovieCard /> */}
      {/* <SearchBox /> */}
    </>
  )
}

export default App
