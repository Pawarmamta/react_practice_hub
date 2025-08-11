import logo from './logo.svg';
import './index.css';

import Student from './Component/Basic/Student';

import Card from './Component/ProductCard/Card';
import Profile from './Component/Userprofile/Profile';
import ProfileCard from './Component/Userprofile/ProfileCard';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
       
       <Student name = "mamta" age= {22} isPreety = {true}/>
        <Student name = "sam"  age= {22} isPretty = {false}/>
        <Student name = "rim"  age= {22} isPretty = {false}/>
      </header> */}
      <ProfileCard/>
     <Card />
     
    

      
    </div>
  );
}

export default App;
