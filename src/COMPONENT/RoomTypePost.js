
import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FiUpload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { UploadVideo } from "../redux-config/RoomTypePostslice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Header from "./Header";


////upload MUI
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#D89619',

  color: '#fff',
  '&:hover': {
    backgroundColor: '#b37714',
  },
  padding: '10px 20px',
  borderRadius: '8px',
  fontWeight: 'bold',
  textTransform: 'none',
}));


const RoomTypePost = () => {
  const [roomType, setRoomType] = useState('');
  const [title, setVideoTitle] = useState('');
  const [video, setVideoLink] = useState('');
  const [excelFile, setExcelFile] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');
  const { AllVideoList, isLoading, error } = useSelector((store) => store.AllVideo)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Portfolio perticuler pro_id for RoomTypePost in session strg
  //OR  Portfolio m Upload Designs ke btn par click p state yha pass se bhi pro_id recieve kr skte hai

  const handleRoomTypeChange = (e) => {
    const roomType = e.target.value;
    console.log(roomType);
    setRoomType(roomType);
  };

  const handleVideoTitleChange = (e) => {
    const title = e.target.value;
    console.log(title);
    setVideoTitle(title);
  };

  const handleVideoLinkChange = (e) => {
    const video = e.target.value;
    console.log("videoLink " + video)
    setVideoLink(video);
    // setVideoLink(e.target.value);
  };

  const handleFileUpload = (e) => {
    // const files = Array.from(e.target.files);
    const files = e.target.files[0];
    console.log(files);
    if (files && files.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      setExcelFile(files);
    } else {
      alert('Please select an Excel file.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!roomType && !excelFile) {
      setErrorMessage("Please select a room type or upload an excel.");
      return;
    }

    if (!title.trim() && !excelFile) {
      setErrorMessage("Please enter a video title or upload an Excel file..");
      return;
    }

    if (!video.trim() && !excelFile) {
      setErrorMessage("Please enter video link or upload an Excel file..");
      return;
    }

    setErrorMessage('');
 
    if (excelFile) {
      const formData = new FormData();
      formData.append('excelFile', excelFile);
      try {
        axios.post("http://localhost:3001/design/addDesignVideo", formData)
          .then(response => {
            const designId = response.data.design_id;
            console.log(response.data);
            setExcelFile(response.data);
            // navigate(`/DesignPost/${designId}`);
            navigate(`/RoomTypePost/DesignPost/`)

          }).catch(err => {
            console.log(err);
          })
      } catch (error) {
        console.log("error while upload excel"
          + error)
      }
    } else {

      const professional_id = sessionStorage.getItem('professional_id');
      console.log("RoomTypePost pro_id " + professional_id);

      dispatch(UploadVideo({ roomType, title, video, professional_id }))
        .then((AllVideoList) => {
          console.log("video post successfully....");
          console.log(AllVideoList);
          //const payload = AllVideoList.payload;
          // const data = payload.data;
          // const designId = data.design_id;

          const designId = AllVideoList.payload.data.design_id;
          console.log(designId);
          setRoomType('');
          setVideoTitle('');
          setVideoLink('');
          setExcelFile(null);

          navigate(`/DesignPost/${designId}`)
        })

        .catch((err) => {
          console.error("error in post data ", err);
          setErrorMessage("Error uploading video. Please try again.");
        });
    }
  }
  useEffect(() => {
    if (!isLoading && !error && AllVideoList) {
    }
  }, [AllVideoList, isLoading, error]);
  return <>
      <Header/>

    <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",marginTop:'20px' }}>
      <Form onSubmit={handleSubmit} style={{ width: "60%", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "10px" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          {/* <h1>Send us your Files!</h1> */}
          <h1 className="text-blk heading">
          Send us your Files!</h1>

          <p  style={{ fontSize: "18px" }} className="text-blk heading ">Upload Room Type</p>
        </div>
        {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}
        <Form.Group controlId="roomTypeSelect">
          <Form.Label>Select Room Type</Form.Label>
          <Form.Control
            as="select"
            value={roomType}
            onChange={handleRoomTypeChange}
            style={{ width: "100%", height: "30px", fontSize: "14px" }}
          >
            <option value="">Please Select</option>
            <option value="Puja Mandir">Puja Mandir</option>
            <option value="Living Room">Living Room</option>
            <option value="Foyer">Foyer</option>
            <option value="Outdoors And Balcony">Outdoors And Balcony</option>
            <option value="TV Unit">TV Unit</option>
            <option value="Kitchens">Kitchens</option>
            <option value="Bedrooms">Bedrooms</option>
            <option value="Wardrobes">Wardrobes</option>
            <option value="Bathrooms">Bathrooms</option>
            <option value="Kids Bedroom">Kids Bedroom</option>
            <option value="Dining Area">Dining Area</option>
            <option value="Out of Box Designs">Out of Box Designs</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="videoTitleInput">
          <Form.Label>Enter Video Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={handleVideoTitleChange}
            style={{ width: "100%", height: "30px", fontSize: "14px" }}
          />
          <Form.Text className="text-muted">.mp4 Format required</Form.Text>
        </Form.Group>
        <Form.Group controlId="videoLinkInput">
          <Form.Label>Enter Video Link</Form.Label>
          <Form.Control
            type="text"
            value={video}
            onChange={handleVideoLinkChange}
            style={{ width: "100%", height: "30px", fontSize: "14px" }}
          />
          <Form.Text className="text-muted">.mp4 Format required</Form.Text>
        </Form.Group>
        <Form.Label className="mt-2">Upload your Video here</Form.Label>
        <Form.Group controlId="fileUpload" style={{ textAlign: "center" }}>
          <div
            style={{ border: "2px dashed #ccc", padding: "20px", borderRadius: "10px", cursor: "pointer" }}
            onClick={() => document.getElementById('fileInput').click()}   >
            <FiUpload style={{ fontSize: "40px" }} />
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>Upload an Excel file</p>
            <p>Drag and drop files here</p>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileUpload}
              style={{ display: "none" }}
              id="fileInput" //for onclick
            />
          </div>
        </Form.Group>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {/* <Button variant="primary" type="submit" style={{ width: "200px", height: "40px", fontSize: "16px" }}>
            Submit
          </Button> */}
          <CustomButton variant="contained " // endIcon={<SendIcon />} 
          style={{ width: "150px", height: "45px", fontSize: "16px" }}> Submit</CustomButton>

        </div>
      </Form>
    </Container>
    </>
};

export default RoomTypePost;

