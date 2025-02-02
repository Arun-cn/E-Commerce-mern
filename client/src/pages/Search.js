import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../Context/search";
import Card from "../components/Card/Card";

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="container-fluid">
            <div className="row">
              {values?.results.map((p) => (
                <div className="col-md-3 mr-1 mb-4">
                  <Card product={p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
