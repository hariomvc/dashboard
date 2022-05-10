import "./Stats.css";

function Stats() {
  return (
    <div className="stats--container">
      <div className="stat--card card--1">
        <span className="stat--icon--div icon--1">
          <img
            src="/assests/icons/patients.png"
            alt="icon"
            className="stat--icon"
          />
        </span>
        <span className="stat--text">
            <span className="stat--heading">
            No. of patients
            </span>
            <span className="stat--value">
                224
            </span>
        </span>
      </div>
      <div className="stat--card card--2">
        <span className="stat--icon--div icon--2">
          <img
            src="/assests/icons/revenue.png"
            alt="icon"
            className="stat--icon"
          />
        </span>
        <span className="stat--text">
            <span className="stat--heading">
            Today's Revenue
                        </span>
            <span className="stat--value">
            &#8377; 224
            </span>
        </span>
      </div>
      <div className="stat--card card--3">
        <span className="stat--icon--div icon--3">
          <img
            src="/assests/icons/calender.png"
            alt="icon"
            className="stat--icon"
          />
        </span>
        <span className="stat--text">
            <span className="stat--heading">
            Monthly Revenue
            </span>
            <span className="stat--value">
            &#8377; 224
            </span>
        </span>
      </div>
      <div className="stat--card card--4">
        <span className="stat--icon--div icon--4">
          <img
            src="/assests/icons/clock.png"
            alt="icon"
            className="stat--icon"
          />
        </span>
        <span className="stat--text">
            <span className="stat--heading">
            Today's No-show
            </span>
            <span className="stat--value">
                3
            </span>
        </span>
      </div>
    </div>
  );
}

export default Stats;
