import React, { useEffect, useState } from "react";
import '../css/covid19.css';

const Covid19 = () => {

  const [country, setCountry] = useState(null);
  const [search, setSearch] = useState('pakistan');

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://corona.lmao.ninja/v2/countries/${search}`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCountry(resJson);
    }
    fetchApi();
  }, [search]);

  return (
    <>
      <div id="main">
        <div className="box0">
          <div>
            <input
              type="search"
              className="inputField0"
              value={search}
              onChange={(event) => { setSearch(event.target.value) }} />
          </div>

          {!country ? (
            <p className="errorMsg0">No Data Found</p>
          ) : (
              <div>
                <br />
                <h2>{search}</h2>
                <br />
                <h2>Cases: {country.todayCases}</h2>
                <br />
                <h2>Deaths: {country.deaths} </h2>
                <br />
                <h2>Recovered: {country.recovered} </h2>
                <br />
                <h2>Cases Reported Today: {country.todayCases} </h2>
                <br />
                <h2>Critical: {country.critical} </h2>
              </div>
            )}
        </div>
      </div>
    </>
  );
}
export default Covid19;


