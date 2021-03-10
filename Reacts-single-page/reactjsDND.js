import React, { Component } from "react";
import { Row, Col, Input, Label, Button } from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AddSVG from "../components/svg/add-svg";
import DropdownSVG from "../components/svg/dropdown";
import Collapse from "reactstrap/lib/Collapse";
import DragSVG from "../components/svg/drag-svg";

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;


class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10),
      isOpen: false,
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  openCollapseForParticularAirline = (data) => {
    let { paymentsData } = this.state;
    paymentsData = paymentsData.map((ele) => {
      if (ele._id === data._id) {
        return { ...ele, isOpen: !ele.isOpen };
      } else {
        return { ...ele, isOpen: false };
      }
    });
    this.setState({
      paymentsData,
      isOpen: false,
    });
  };

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }
  render() {
    const { isOpen } = this.state;
    console.log(this.state.items)
    return (
      <div className="custom-form">
        <Row>
          <Col md="4">
            <div className="form-group">
              <Input type="select">
                <option>SpiceJet</option>
                <option>Indigo</option>
              </Input>
              <Label className="on-hover">Airline</Label>
            </div>
          </Col>
        </Row>
        <h4 className="mb-0">Frequently Asked Questions</h4>
        <p>These below questions will be listed in the FAQ section of main or microsite</p>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {this.state.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div
                          className={"flight-list-card " + (this.state.isOpen ? "active" : "mb-3")}
                        >
                          <Row>
                            <Col
                              md="6"
                              onClick={() => this.setState({ isOpen: !isOpen })}
                            >
                              <div
                                className="flight-img-name icon"
                              >
                                <DragSVG />
                                <h5 className="detail-heading py-2">What is the cancellation Policy?</h5>
                              </div>
                            </Col>
                            <Col md="6">
                              <div className="flight-action-buttons">
                                {this.state.isOpen && (
                                  <>
                                    <Button
                                      color="border"
                                    >
                                      Delete
                                  </Button>
                                    <Button
                                      color="border"
                                    >
                                      Edit
                                  </Button>
                                  </>
                                )}
                              </div>
                            </Col>
                          </Row>
                          <div
                            className="flight-list-card-arrow"
                            onClick={() => this.setState({ isOpen: !isOpen })}
                          >
                            <DropdownSVG />
                          </div>
                        </div>
                        <Collapse
                          isOpen={isOpen}
                          className="flight-list-dropdown"
                        >
                          <h5 className="mb-1">What is the return policy?</h5>
                          <hr className="my-1" />
                          <div className="px-4 pt-2">
                            Lorem Ipsum is simply dummy text used by designers. Lorem Ipsum is simply dummy text used by designers. Lorem Ipsum is simply dummy text used by designers. Lorem Ipsum is simply dummy text used by designers. Lorem Ipsum is simply dummy text used by designers. Lorem Ipsum is simply dummy text used by designers. Lorem Ipsum is simply dummy text used by designers.
                          </div>
                        </Collapse>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="mt-4">
          <Button color="nothing" className="add-document-btn text-blue"><AddSVG /> Add more</Button>
        </div>
      </div>
    );
  }
}

export default Faq;
