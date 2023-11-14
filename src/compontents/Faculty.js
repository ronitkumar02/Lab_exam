import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import formContainerStyle from "../Utils.js";
import { Link } from 'react-router-dom';

const Faculty = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeFrom, setSelectedTimeFrom] = useState("12:00");
  const [selectedTimeTo, setSelectedTimeTo] = useState("13:00");
  const [labExamName, setLabExamName] = useState('');
  const [inputs, setInputs] = useState([{ id: 1, value: '' }]);
  const [inputImages, setInputsImages] = useState([]);

  const handleTimeChange = (event, setTimeFunction) => {
    const inputTime = event.target.value;

    // Validate the time format (HH:mm)
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (timeRegex.test(inputTime) || inputTime === '') {
      setTimeFunction(inputTime);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleLabExamNameChange = (event) => {
    setLabExamName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace the console.log statements with your logic
    console.log('Selected Date:', selectedDate ? selectedDate.toDateString() : 'No date selected');
    console.log('Selected Time (From):', selectedTimeFrom);
    console.log('Selected Time (To):', selectedTimeTo);
    console.log('Lab Exam Name:', labExamName);
    console.log('Instructions:', inputs.map((input) => input.value));
    console.log('Question Bank:', inputImages.map((input) => input.value));
  };

  const addInput = () => {
    setInputs([...inputs, { id: inputs.length + 1, value: '' }]);
  };

  const removeInput = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const addInputImage = () => {
    const newInput = {
      id: inputImages.length + 1,
      value: '',
    };
    setInputsImages([...inputImages, newInput]);
  };

  const removeInputImage = (id) => {
    const updatedInputs = inputImages.filter((input) => input.id !== id);
    setInputsImages(updatedInputs);
  };

  return (
    <div style={formContainerStyle}>
      <div className="container" style={{ marginTop: "30px" }}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid" style={{ backgroundColor: "#efe5e5", margin: "-8px 0" }}>
            <Link className="navbar-brand" to="#">Faculty details</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="#">Teacher's name</Link>
                <Link className="nav-link" to="#">Profile</Link>
              </div>
            </div>
          </div>
        </nav>
        <hr />
        <div className="test-details" style={{ marginBottom: "20px" }}>
          <h2>Exam details:</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="col-6">
            <input
              type="text"
              id="labExamName"
              value={labExamName}
              onChange={handleLabExamNameChange}
              className="form-control"
              placeholder="Enter Lab exam name"
            />
          </div>
          <hr />
          <div className="input-group">
            <span className="input-group-text">Select Date (DD/MM):</span>
            <DatePicker
              id="dateInput"
              selected={selectedDate}
              onChange={handleDateChange}
              className="custom-datepicker"
              dateFormat="dd/MM" // Specify your desired date format
            />
          </div>
          <div className="input-group">
            <span className="input-group-text">
              Select Time (From):
            </span>
            <input
              type="text"
              id="timeInputFrom"
              className='me-4'
              value={selectedTimeFrom}
              onChange={(e) => handleTimeChange(e, setSelectedTimeFrom)}
              placeholder="Enter time (HH:mm)"
            />
            <label htmlFor="timeInputTo" style={{ margin: "auto 0px" }} className="me-4">
              To:
            </label>
            <input
              type="text"
              id="timeInputTo"
              value={selectedTimeTo}
              onChange={(e) => handleTimeChange(e, setSelectedTimeTo)}
              placeholder="Enter time (HH:mm)"
            />
          </div>
          <hr />
          <div className='instruction'>
            {inputs.map(input => (
              <div key={input.id} className="input-container">
                <input className='me-4'
                  type='text'
                  placeholder='Add any instruction for the students'
                  value={input.value}
                  onChange={(e) => {
                    const updatedInputs = [...inputs];
                    const updatedInput = { ...input, value: e.target.value };
                    updatedInputs[input.id - 1] = updatedInput;
                    setInputs(updatedInputs);
                  }}
                />
                <button className="btn" type="button" onClick={() => removeInput(input.id)}>
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            ))}
            <button className="btn" style={{ backgroundColor: "#fff" }} onClick={addInput}>
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
          <hr />
          <div className='question-bank'>
  <h4 style={{ marginBottom: "20px" }}>Question Bank</h4>
    {inputImages.map((input) => (
      <div key={input.id} className="input-container row">
        <div className="mb-3 col-6">
          <input
            className='form-control me-4'
            style={{width:"100%"}}
            type='text'
            placeholder='Enter the question or upload it'
            value={input.value}
            onChange={(e) => {
              const updatedInputs = [...inputImages];
              const updatedInput = { ...input, value: e.target.value };
              updatedInputs[input.id - 1] = updatedInput;
              setInputsImages(updatedInputs);
            }}
          />
          </div>
          <div className='col-4'>
          <input
            type='file'
            accept='image/*'
            className="form-control"
            style={{width:"100%"}}
            onChange={(e) => {
              const updatedInputs = [...inputImages];
              const updatedInput = { ...input, value: e.target.files[0]?.name };
              updatedInputs[input.id - 1] = updatedInput;
              setInputsImages(updatedInputs);
            }}
          />
        </div>
          <div className='col-2'>
        <button className="btn" type="button" onClick={() => removeInputImage(input.id)}>
          <i className="bi bi-x-lg"></i>
        </button>
        </div>
      </div>
    ))}
  <button className="btn" style={{ backgroundColor: "#fff" }} onClick={addInputImage}>
    <i className="bi bi-plus-lg"></i>
  </button>
</div>
          <button type="submit" className="btn form-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Faculty;

