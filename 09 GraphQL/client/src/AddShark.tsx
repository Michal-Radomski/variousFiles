import React from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";

const AddShark = ({
  sharkForm,
  onChange,
  onSubmit,
  onReset,
}: {
  sharkForm: Shark;
  onChange: Function;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onReset: React.FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <React.Fragment>
      <Form style={{ width: "50%", margin: "1rem auto" }} onSubmit={onSubmit} onReset={onReset}>
        <h4>Add a New Shark</h4>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Shark Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Shark Name"
            name="name"
            value={sharkForm.name}
            onChange={(event) => onChange(event)}
            required={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formColor">
          <Form.Label>Shark Color</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Shark Color"
            name="color"
            value={sharkForm.color}
            onChange={(event) => onChange(event)}
            required={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formWeight">
          <Form.Label>Shark Weight</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Shark Weight"
            name="weight"
            value={sharkForm.weight}
            onChange={(event) => onChange(event)}
            required={true}
          />
        </Form.Group>

        <ButtonGroup>
          <Button
            variant="primary"
            type="submit"
            disabled={sharkForm.weight && sharkForm.color && sharkForm.name ? false : true}
          >
            Submit
          </Button>
          <Button variant="secondary" type="reset">
            Reset
          </Button>
        </ButtonGroup>
      </Form>
    </React.Fragment>
  );
};

export default AddShark;
