import Timer from "react-compound-timer";

export default function Countdown() {
  return (
    <>
      <Timer initialTime={1.728e8} direction={"backward"}>
        <div className="coming-block">
          <h4>Stay Tuned</h4>
          <h1>
            New website <br /> Launching Soon
          </h1>
          <div className="countdown">
            <div className="countdown__days">
              <Timer.Days />
              <span className>Days</span>
            </div>
            <div className="countdown__hours">
              <Timer.Hours />
              <span className>Hours</span>
            </div>
            <div className="countdown__minutes">
              <Timer.Minutes />
              <span className>Minutes</span>
            </div>
            <div className="countdown__seconds">
              <Timer.Seconds />
              <span className>Seconds</span>
            </div>
          </div>
          <form action="#" method="post">
            <p>Notify me when there’s some action:</p>
            <div className="input">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="button">
              <button className="btn">Notify Me</button>
            </div>
          </form>
        </div>
      </Timer>
    </>
  );
}
