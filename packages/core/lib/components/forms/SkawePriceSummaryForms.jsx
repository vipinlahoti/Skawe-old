import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap';

class SkawePriceSummaryForms extends Component {

  handleChange = async e => {
    const name = e.target.name;
    const value = e.target.value;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    // TODO: add submit form function
    // this.props.submitForm()
    console.log('Form Submit: ', this.state);
  }

  render() {
    const { buttonText, heading, fields } = this.props;

    console.log(fields)

    return (
      <Container>
        <Row>
          <Col>
            <div className="section-xsmall">
              <h5 className="title-5 mb-1">{heading}</h5>
            </div>
          </Col>
        </Row>

        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col sm={12} md={8}>
              {fields.map((field, index) =>
                <div className="section-distributions mb-1 bg-light" key={index}>
                  <Form.Group controlId={field.id}>
                    <h6 className="title-6 mb-1">
                      {field.label}
                      {field.required ? <span className="required-field">(Required)</span> : null }
                    </h6>
                    {field.type === 'radio' ?
                    <Row>
                      {field.select && field.select.map((select, index) =>
                        <Col md={4} key={index}>
                          <ListGroup>
                            <Form.Label className="admin-checkbox">
                              <input 
                                type="radio"
                                name={field.id}
                                onChange={this.handleChange}
                              />
                              <ListGroup.Item className="p-1">
                                <div className="admin-card-description">
                                  <h6 className="title-6 mb-0">{select.label}</h6>
                                </div>
                              </ListGroup.Item>
                            </Form.Label>
                          </ListGroup>
                        </Col>
                      )}
                    </Row>
                    : 
                    <Row>
                      <Col md={6}>
                        <Form.Control
                          autoComplete="off"
                          name={field.id}
                          type={field.type}
                          placeholder={field.placeholder ? field.placeholder : null}
                          onChange={this.handleChange}
                          required={field.required} />
                        </Col>
                      </Row>
                    }
                    {field.help ? 
                      <Form.Text className="text-muted form-text" dangerouslySetInnerHTML={{ __html: field.help }}>
                      </Form.Text>
                    : null}
                  </Form.Group>
                </div>
              )}
            </Col>

            <Col sm={12} md={4}>
              <div className="price-summary">
                <h5 className="title-5 text-primary">Summary</h5>

                {this.state !== null && Object.entries(this.state).map(([key, value], index) => 
                <React.Fragment key={index}>
                  {value ?
                    <div className="section-xsmall border-bottom">
                      <h6 className="title-6">{key}</h6>
                      <p className="mb-0">{value}</p>
                    </div>
                  : null}
                </React.Fragment>
                )}

                <div className="section-xsmall">
                  <h5 className="title-5 text-primary">₹200 <small>/mo</small></h5>
                </div>
                
                <Skawe.components.Button variant="primary" type="submit" block>
                  Create
                </Skawe.components.Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    )
  }
}

Skawe.registerComponent('SkawePriceSummaryForms', SkawePriceSummaryForms);
