import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";

function HomePage({ jobs, setJobs }) {
  //   const [jobs, setJobs] = useState([]);

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
  //

  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">JOB SEARCH ENGINE</Navbar.Brand>
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
              <hr />
            </div>
          ))}
      </Container>
    </>
  );
}

export default HomePage;
