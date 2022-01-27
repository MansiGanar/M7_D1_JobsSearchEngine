import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import { addToFavourite } from "../redux/actions/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToFavouritesList: (jobItem) => {
    dispatch(addToFavourite(jobItem));
  },
});

function HomePage({ addToFavouritesList }) {
  const [jobs, setJobs] = useState([]);

  const [search, setSearch] = useState("");

  const fetchJobs = async () => {
    const response = await fetch(
      "https://strive-jobs-api.herokuapp.com/jobs?search=developer&limit=10"
    );
    const json = await response.json();
    console.log(json);
    //   setJobs(response.data);
    setJobs(json.data);
    console.log(jobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">JOB SEARCH ENGINE</Navbar.Brand>
            <Link to="/favourites">
              <Image src="https://img.icons8.com/stickers/40/000000/add-to-favorites.png" />
              {/* <h5>Favourite</h5> */}
            </Link>
          </Container>
          <Form>
            <FormControl
              type="search"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </Navbar>
      </Container>
      <Container>
        {/* CompanyDetails */}

        {jobs
          .filter((j) => {
            if (search === "") {
              return j;
            } else if (
              j.title.toLowerCase().includes(search.toString().toLowerCase())
            ) {
              return search;
            }
          })
          .map((j) => (
            <div className="box">
              Title : <p>{j.title}</p>
              Company Name : <p>{j.company_name}</p>
              <Button variant="warning" onClick={() => addToFavouritesList(j)}>
                <Image
                  src="https://img.icons8.com/ios-glyphs/20/000000/add-to-favorites.png"
                  className="m-1"
                />
                Favourite
              </Button>
              <hr />
            </div>
          ))}
      </Container>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
