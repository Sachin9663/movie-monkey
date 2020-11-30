import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import './App.css'
import Nav from './components/NavBar';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app">
      {/*Nav */}
      <Nav />
      <Banner />

      <Row title = "Netflix originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title = "Trending now" fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title = "Documentries" fetchUrl={requests.fetchDucumentaries}/>

      <Footer />
    </div>
  );
}

export default App;
