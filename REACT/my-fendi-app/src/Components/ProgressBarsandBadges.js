// ProgressBars.js
import React from 'react';

function ProgressBars() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-2">
          <div className="progress-bar-container">
            <div className="text">MENS VARITY</div>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={{ width: '85%' }}
                aria-valuenow={85}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                85%
              </div>
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="text">WOMEN VARITY</div>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                75%
              </div>
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="text">KIDS VARITY</div>
            <div className="progress">
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={{ width: '50%' }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                50%
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 offset-md-4">
          <div className="btn-group" role="group" aria-label="Button group with badges">
            <button type="button" className="btn btn-dark">
              Messages <span className="badge bg-light text-dark">4</span>
            </button>
            <button type="button" className="btn btn-dark ms-3">
              Notifications <span className="badge bg-light text-dark">7</span>
            </button>
          </div>
          <div className="btn-group mt-3" role="group" aria-label="Button group with badges">
            <button type="button" className="btn btn-dark">
              Updates <span className="badge bg-light text-dark">2</span>
            </button>
            <button type="button" className="btn btn-dark ms-3">
              Alerts <span className="badge bg-light text-dark">5</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBars;
