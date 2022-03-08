import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis cupiditate veniam quae autem atque dolorum non harum dolorem? Non, repudiandae officia illum tenetur accusamus, hic, itaque nihil iste ullam sit cum quis cumque inventore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
