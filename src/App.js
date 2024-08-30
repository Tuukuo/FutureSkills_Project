import './App.css';
import Navbar from './Home';
import Video from './Videos'
import Blog from './Blogs'
import Foot from './Footer';
import Podcast from './Podcast';

function App() {
  return (
    <div>
      <Navbar/>
      <Video/>
      <Blog/>
      {/* <Podcast/> */}
      <Foot/>
      
     
    </div>
  );
}

export default App;
