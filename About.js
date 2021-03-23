import React from 'react';
import './About.css';
import {Card,Form,Row,Col,Table,Button} from 'react-bootstrap';
function About()
    {
return (
    <div>
      <Row>
    <Col>
    
 
        <Card>
  <Card.Header>Student Form</Card.Header>
  
  <Form>
  <Form.Group as={Row} controlId="formPlaintextName">
    <Form.Label column sm="2">
      Name
    </Form.Label>
    <Col sm="10">
    <Form.Control type="text" placeholder="Enter student name" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextDateofbirth">
    <Form.Label column sm="2">
      Date Of Birth(DOB)
    </Form.Label>
    <Col sm="10">
      <Form.Control type="date" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextClass">
    <Form.Label column sm="2">
Class
    </Form.Label>
    <Col sm="10">
    <Form.Group controlId="exampleForm.SelectCustom">
   
    <Form.Control as="select" custom>
    <option></option>
      
      <option>I</option>
      <option>II</option>
      <option>III</option>
      <option>IV</option>
      <option>V</option>
     <option>V1</option>
      <option>V11</option>
      <option>V111</option>
      <option>1X</option>
      <option>X</option>
      <option>X11</option>
      <option>X12</option>
     
    </Form.Control>
  </Form.Group>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextDivision">
    <Form.Label column sm="2">
    Division
    </Form.Label>
    <Col sm="10">
    <Form.Group controlId="exampleForm.SelectCustom">
    
    <Form.Control as="select" custom>
        <option></option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
      
    
    </Form.Control>
  </Form.Group>
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
      Gender
      </Form.Label>
      <Col sm="10">
      <Row sm={10}>
        <Form.Check
          type="radio"
          label="male"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="female"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        
      </Row>
      </Col>
    </Form.Group>
  </fieldset>
 
  <Button variant="primary">Submit</Button>{' '}

</Form>
</Card></Col>
<Col>
        <card>
        <Card.Header>Student Details</Card.Header>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Roll No</th>
      <th> Name</th>
      <th>Date Of Birth</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      
    </tr>
    <tr>
      
    </tr>
    <tr>
     
    </tr>
  </tbody>
</Table>
        </card>
        </Col>
        </Row>

    </div>
)
    }
    export default About;
