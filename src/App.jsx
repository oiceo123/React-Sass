import "./styles/style.scss";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="">HTML</a>
          </li>
          <li>
            <a href="">CSS</a>
          </li>
          <li>
            <a href="">SASS</a>
          </li>
        </ul>
      </nav>
      <p>Add a little style.</p>
      <p className="alert">Alert Hover!</p>
      <p className="text-blue">hello style!</p>
      <p className="danger">Important</p>
      <p className="my-article">This is some text in my article.</p>
      <p className="my-notes">This is some text in my notes.</p>
      <p className="my-tips">This is some text in my tips.</p>
      <button className="button-report">report</button>
      <button className="button-submit">submit</button>
      <button className="action-buttons">action</button>
      <button className="reset-buttons">reset</button>
      <div>
        <img
          src="https://images.pexels.com/photos/236433/pexels-photo-236433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="sqaure-av"
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/236433/pexels-photo-236433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="circle-av"
        />
      </div>
      <p className="banner">this is banner</p>
      <div className="next"></div>
      <p className="icon-40px">this is icon-40px</p>
      <p className="icon-50px">this is icon-50px</p>
      <div>
        <ul>
          <li>this is for</li>
          <li>this is for</li>
          <li>this is for</li>
        </ul>
        <ul>
          <li>this is for</li>
          <li>this is for</li>
          <li>this is for</li>
        </ul>
      </div>
      <div className="message">
        Hello Root
      </div>
    </>
  );
}

export default App;
