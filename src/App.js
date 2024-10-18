import './App.css';
import { Container, Row, Col, InputGroup, Button, Table } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [ideas, setIdeas] = useState([]); // Stores the list of ideas

  const inputChangeHandler = (event) => {
    setInputText(event.target.value); // Updates the input field state
  };

  const buttonClickHandler = () => {
    if (inputText.trim()) {
      setIdeas([...ideas, inputText]); // Adds the new idea to the list
      setInputText(''); // Clears the input field
    }
  };

  const deleteHandler = (index) => {
     const updatedIdeas = ideas.filter((_, i) => i !== index); // Removes the specific idea
    setIdeas(updatedIdeas);
  };

  return (
    <Container>
      <Row className="mb-4 pt-5 input-row">
        <Col md={8}>
          <InputGroup>
            <input
              className="idea-input"
              placeholder="Add idea"
              value={inputText}
              onChange={inputChangeHandler}
            />
          </InputGroup>
        </Col>
        <Col md={4}>
          <Button onClick={buttonClickHandler} className="add-button">
            Add
          </Button>
        </Col>
      </Row>

      <Table bordered className="idea-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Idea</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ideas.map((idea, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{idea}</td>
              <td>
                <Button variant="danger" onClick={() => deleteHandler(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
