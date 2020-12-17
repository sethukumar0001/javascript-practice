import React, { Component } from 'react';
import csc from "country-state-city";
import {
  Col,
  Input,
  Label,
  NavLink as NavLink1,
} from "reactstrap";

class CountryStateCity extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      country: "",
      region: "",
      city: "",
      countries: [],
      states: [],
      cities: [],

      selectedCountry: "",
      selectedState: "",
      selectedCity: "",
    }
  }

  componentDidMount() {
    // country-state-city
    const countries = csc.getAllCountries();
    this.setState({ countries: countries });
  }


  handleCountries = (e) => {
    let name = this.state.countries.filter((con) => {
      if (con.id === e.target.value) {
        return con.name;
      }
    });
    console.log(name);
    if (name) {
      this.setState({
        country: name[0].name,
      });
      const states = csc.getStatesOfCountry(e.target.value);
      this.setState({ states: states });
    }
  };

  handleRegion = (e) => {
    let name = this.state.states.filter((con) => {
      if (con.id === e.target.value) {
        return con.name;
      }
    });
    this.setState({
      region: name[0].name,
    });
    const cities = csc.getCitiesOfState(e.target.value);
    this.setState({ cities });
  };
  handleNumberChange = (value) => {
    this.setState({
      number: value,
    });
  };

  handleCity = (e) => {
    let name = this.state.cities.filter((con) => {
      if (con.id === e.target.value) {
        return con.name;
      }
    });
    console.log(name);
    this.setState({
      city: name[0].name,
    });
  };


  componentDidUpdate(preProps, preState) {
    if (this.state.country !== preState.country) {
      const countries = csc.getAllCountries();
      const findCountry = countries.filter(
        (ele) => ele.name.toLowerCase() === this.state.country.toLowerCase()
      );
      if (findCountry.length !== 0) {
        this.setState({
          selectedCountry: findCountry[0].id,
        });

        const getStates = csc.getStatesOfCountry(
          findCountry && findCountry[0].id
        );
        this.setState({ states: getStates });
        console.log(findCountry);

        if (this.state.region) {
          const findState = getStates.filter(
            (x) => x.name.toLowerCase() === this.state.region.toLowerCase()
          );
          console.log(findState);
          if (findState.length !== 0) {
            this.setState({
              selectedState: findState[0].id,
            });
          }
          if (this.state.city && findState.length !== 0) {
            const getCities = csc.getCitiesOfState(findState[0].id);
            this.setState({ cities: getCities });

            const findCity = getCities.filter(
              (y) => y.name.toLowerCase() === this.state.city.toLowerCase()
            );
            console.log(findCity);
            if (findCity.length !== 0) {
              this.setState({
                selectedCity: findCity[0].id,
              });
            }
          }
        }
      }
    }
  }

  render() {
    return (
      <>

        <Col md="5">
          <div className="form-group">
            <Label>Country</Label>
            <Input type="select" onChange={this.handleCountries}>
              <option value={0}>Select Country</option>
              {this.state.countries &&
                this.state.countries.map((ele, i) => {
                  return (
                    <option
                      key={i}
                      value={ele.id}
                      selected={ele.id === this.state.selectedCountry}
                    >
                      {ele.name}
                    </option>
                  );
                })}
            </Input>

          </div>
        </Col>

        <Col md="5">
          <div className="form-group">
            <Label>State</Label>
            <Input type="select" onChange={this.handleRegion}>
              <option value={0} default>
                Select State
                      </option>
              {this.state.states &&
                this.state.states.map((ele, i) => {
                  return (
                    <option
                      key={i}
                      value={ele.id}
                      selected={ele.id === this.state.selectedState}
                    >
                      {ele.name}
                    </option>
                  );
                })}
            </Input>
          </div>
        </Col>

        <Col md="5">
          <div className="form-group">
            <Label>City</Label>
            <Input type="select" onChange={this.handleCity}>
              <option value={0}>Select City</option>
              {this.state.cities &&
                this.state.cities.map((ele, x) => {
                  return (
                    <option
                      key={x}
                      value={ele.id}
                      selected={ele.id === this.state.selectedCity}
                    >
                      {ele.name}
                    </option>
                  );
                })}
            </Input>

          </div>
        </Col>
      </>
    );
  }
}

export default CountryStateCity;