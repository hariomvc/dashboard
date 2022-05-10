import "./Requests.css";

function RequestCard() {
  return (
    <div className="request--card">
      <div className="request--card--profile">AM</div>
      <div className="request--card--detials">
        <span className="request--card--name">Akash Mandal</span>
        <span className="request--card--age">45 </span>
        <span className="request--card--gender">Male </span>
        &bull;
        <span className="request--card--time"> 10.30 AM</span>
      </div>
      <div className="requests--card--buttons">
        <div className="requests--card-button--group">
          <span className="requests--card--button decline">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L14.9996 14.9996"
                stroke="#194AF5"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M15.0015 1L1.00187 14.9996"
                stroke="#194AF5"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <span className="requests--card--button accept">
            <svg
              width="19"
              height="13"
              viewBox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.82267 10.1163C6.82221 10.1159 6.82214 10.1152 6.8225 10.1147C6.93138 9.95588 6.99862 9.81005 7.10766 9.70517C10.2932 6.6344 13.4836 3.56896 16.6699 0.499717C16.9692 0.211143 17.2874 -0.00814343 17.7355 0.000232093C18.2453 0.0101304 18.6253 0.228656 18.8525 0.659614C19.0868 1.10504 19.0393 1.54437 18.729 1.94792C18.6435 2.05909 18.5366 2.15655 18.4345 2.25477C14.9101 5.64533 11.3857 9.03513 7.8613 12.4249C7.06729 13.1886 6.4403 13.1909 5.65578 12.4364C3.93079 10.7772 2.20976 9.11432 0.477644 7.4613C0.064406 7.06689 -0.112922 6.6207 0.0746977 6.08543C0.374731 5.22808 1.4672 4.99204 2.1678 5.64305C3.0117 6.4273 3.83184 7.23516 4.66148 8.03388C5.34942 8.69554 6.03577 9.35797 6.82267 10.1163Z"
                fill="#F8F8F8"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

function Requests() {
  return (
    <div className="requests--container">
      <div className="requests--header">
        <span className="requests--title">Requests (46)</span>
        <span className="requests--viewall"> View all &gt;</span>
      </div>
      <div className="requests--body">
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </div>
    </div>
  );
}

export default Requests;
