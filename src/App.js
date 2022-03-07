import './App.css';
import logo from './images/man.png'
import reactLogo from './images/reactLogo.png'

function App() {
  return (
    <div className="container">

      <div className='image'>
       <div className='img-prop'>
       <img src={logo} alt="Logo" />
       </div> 
       </div>

      <div className='btn'>
        <button className='btn1'>Contact</button>
        <button className='btn2'>informations</button>
      </div>

    <div>
      <h4>Main Goals</h4>
      <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."</p>
    </div>
      
      <footer>
      <h4>Skills</h4>
      <ul>
      <li>React</li>
      <li>CSS</li>
      <li>MongoDB</li>
      <li>Nodejs</li>
      <li>Javascript</li>
      <li>Javascript</li>
      <li>Bootstrap</li>

      </ul>
      <img src={reactLogo} alt="" />
      </footer>

    <div className='social'>
    <a href="#" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-twitter"></a>
    <a href="#" class="fa fa-google"></a>
    <a href="#" class="fa fa-linkedin"></a>
    </div>

    </div>
  );
}

export default App;
