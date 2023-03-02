import React from "react";

import "./Photos.css";

function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map((photos, index) => {
            return (
              <div className="col-6 col-sm-4 img" key={index}>
                <a href={photos.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photos.src.landscape}
                    alt=""
                    className="img-fluid rounded shadow"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Photos;
