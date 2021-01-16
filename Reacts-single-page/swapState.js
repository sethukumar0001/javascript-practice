 handleSwap = () => {
    this.setState({ swap: !this.state.swap });
    var from = this.state.flightRequest.whereFrom;
    var to = this.state.flightRequest.whereTo;
    this.state.flightRequest.whereFrom = to;
    this.state.flightRequest.whereTo = from;
    this.setState((prevState) => ({
      ...prevState.flightRequest,
      whereFrom: from,
      whereTo: to,
    }));
    this.setState({ swap: !this.state.swap });
  };
