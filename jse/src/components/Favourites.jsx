import React from "react";
import { connect } from "react-redux";
import { deleteFavourite } from "../redux/actions/actions";
import { Button, Image } from "react-bootstrap";

const mapStateToProps = (state) => ({ list: state.jobs.favourites });

const mapDispatchToProps = (dispatch) => ({
  deleteFromFavourite: (index) => {
    dispatch(deleteFavourite(index));
  },
});

const Favourites = ({ list, deleteFromFavourite }) => {
  return (
    <div>
      {list.map((j, i) => (
        <div className="box">
          Title : <p>{j.title}</p>
          Company Name : <p>{j.company_name}</p>
          <Button
            variant="danger"
            onClick={() => {
              deleteFromFavourite(i);
            }}
          >
            <Image
              src="https://img.icons8.com/ios-glyphs/20/000000/add-to-favorites.png"
              className="m-1"
            />
            Remove from favourite
          </Button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
