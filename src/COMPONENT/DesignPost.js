// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Container, Typography, TextField, Button, Grid, InputBase, IconButton, Paper } from '@mui/material';
// import { CloudUploadOutlined as CloudUploadOutlinedIcon } from '@mui/icons-material';
// import { useDispatch, useSelector } from 'react-redux';
// import { UploadDesign } from '../redux-config/DesignPostslice';
// // id = design_id
// const DesignPost = () => {
//     const { id } = useParams();
//     console.log("In DesignPost DesignId " + id);

//     const [image_url, setImageURL] = useState('');
//     const [description, setDescription] = useState('');
//     const [excelFile, setExcelFile] = useState(null);
//     const [errorMessage, setErrorMessage] = useState('');
//     const {AllDesignPost,isLoading,error} = useSelector((store)=>store.AllDesignP)
//     const dispatch = useDispatch();

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!image_url.trim() && !excelFile) { // 
//             setErrorMessage("Please enter an image URL or upload an Excel file.");
//             return;
//         }

//         // Validate image URL extension if provided
//         if (image_url.trim()) {
//             const allowedExtensions = ['jpg', 'jpeg', 'png'];
//             const extension = image_url.split('.').pop().toLowerCase();
//             if (!allowedExtensions.includes(extension)) {
//                 setErrorMessage("Image URL must be in jpg, jpeg, or png format.");
//                 return;
//             }
//         }

//         // Perform submission or other actions here
//         console.log("Form submitted:", {image_url, description, excelFile });

//         // Reset form fields and error message after submission
//         setImageURL('');
//         setExcelFile(null);
//         setErrorMessage('');

        

//         dispatch(UploadDesign({design_id: id,image_url,description}))
//         .then((AllDesignPost)=>{
//             console.log("Design post sucessfully..")
//             console.log(AllDesignPost)
//         })
//     };
//     useEffect(()=>{
//         if(!isLoading && !error && AllDesignPost){
//         }
//     },[AllDesignPost,isLoading,error])

//     return (
//         <Container maxWidth="md" style={{ marginTop: '50px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
//             <Typography variant="h4" gutterBottom style={{ marginBottom: '20px' }}>Upload Design</Typography>
//             {errorMessage && <Typography variant="body1" style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</Typography>}
//             <form onSubmit={handleSubmit}>
//                 <Grid container spacing={2}>
//                     <Grid item xs={12}>
//                         <TextField
//                             label="Image URL (jpg, png ,jpeg only)"
//                             fullWidth
//                             value={image_url}
//                             onChange={(e) => setImageURL(e.target.value)}
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             label={"Description (Description limit: 200 characters)"}
//                             multiline
//                             fullWidth
//                             rows={4}
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             inputProps={{ maxLength: 200 }}
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Paper
//                             component="form"
//                             sx={{ p: '10px', display: 'flex', alignItems: 'center', backgroundColor: '#f9f9f9', borderRadius: '5px' }}
//                             onSubmit={(e) => e.preventDefault()}
//                         >
//                             <InputBase
//                                 sx={{ flex: 1 }}
//                                 placeholder="Upload Excel File"
//                                 inputProps={{ 'aria-label': 'upload excel file' }}
//                                 type="file"
//                                 accept=".xlsx,.xls"
//                                 onChange={(e) => setExcelFile(e.target.files[0])}
//                             />
//                             <IconButton type="submit" aria-label="upload" component="span">
//                                 <CloudUploadOutlinedIcon />
//                             </IconButton>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Button type="submit" variant="contained" color="primary">Upload</Button>
//                     </Grid>
//                 </Grid>
//             </form>
//         </Container>
//     );
// };

// export default DesignPost;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, TextField, Button, Grid, InputBase, IconButton, Paper } from '@mui/material';
import { CloudUploadOutlined as CloudUploadOutlinedIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { UploadDesign } from '../redux-config/DesignPostslice';
import axios from 'axios';
import Header from './Header';
// id = design_id
const DesignPost = () => {
    const { id } = useParams();
    console.log("In DesignPost DesignId " + id);

    const [image_url, setImageURL] = useState('');
    const [description, setDescription] = useState('');
    const [excelFile, setExcelFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const {AllDesignPost,isLoading,error} = useSelector((store)=>store.AllDesignP)
    const dispatch = useDispatch();

    const handleFileUpload = (e) => {
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

        if (!image_url.trim() && !excelFile) { // 
            setErrorMessage("Please enter an image URL or upload an Excel file.");
            return;
        }
            // Validate image URL extension if provided
        if (image_url.trim()) {
            const allowedExtensions = ['jpg', 'jpeg', 'png'];
            const extension = image_url.split('.').pop().toLowerCase();
            if (!allowedExtensions.includes(extension)) {
                setErrorMessage("Image URL must be in jpg, jpeg, or png format.");
                return;
            }
        }
        console.log("Form submitted:", {image_url, description, excelFile });

        // Reset form fields and error message after submission
        setImageURL('');
        setDescription('');
        setExcelFile(null);
        setErrorMessage('');

        if (excelFile) {
            const formData = new FormData();
            formData.append('excelFile', excelFile);
            try {
                axios.post("http://localhost:3001/design/addDesignImages", formData)
                    .then(response => {
                        console.log(response.data);
                        setExcelFile(response.data);

                    }).catch(err => {
                        console.log(err);
                    })
            } catch (error) {
                console.log("error while upload excel"
                    + error)
                }
        } else {

        dispatch(UploadDesign({design_id: id,image_url,description}))
        .then((AllDesignPost)=>{
            console.log("Design post sucessfully..")
            console.log(AllDesignPost);
            const designImg_id = AllDesignPost.payload.data.designImg_id;
        }).catch((err)=>{
            console.error("error in post data ", err);
            setErrorMessage("Error uploading video. Please try again.");
        })
    }
    };
    useEffect(()=>{
        if(!isLoading && !error && AllDesignPost){
        }
    },[AllDesignPost,isLoading,error])

    return <>
        <div style={{ marginTop: '75px' }}>
        <Header />
      </div>
  
        <Container maxWidth="md" style={{ marginTop: '50px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
            <Typography variant="h4" gutterBottom style={{ marginBottom: '20px' }}>Upload Design</Typography>
            {errorMessage && <Typography variant="body1" style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</Typography>}
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Image URL (jpg, png ,jpeg only)"
                            fullWidth
                            value={image_url}
                            onChange={(e) => setImageURL(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label={"Description (Description limit: 200 characters)"}
                            multiline
                            fullWidth
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            inputProps={{ maxLength: 200 }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Paper
                            component="form"
                            sx={{ p: '10px', display: 'flex', alignItems: 'center', backgroundColor: '#f9f9f9', borderRadius: '5px',cursor:'pointer' }}
                            // onSubmit={(e) => e.preventDefault()}
                            onClick={()=>document.getElementById('fileInput').click()}
                        >
                            <InputBase
                                sx={{ flex: 1 }}
                                placeholder="Upload Excel File"
                                inputProps={{ 'aria-label': 'upload excel file' }}
                                type="file"
                                accept=".xlsx,.xls"
                                // onChange={(e) => setExcelFile(e.target.files[0])}
                                onChange={handleFileUpload} 
                                id="fileInput" //for onclick

                            />
                            <IconButton type="submit" aria-label="upload" component="span">
                                <CloudUploadOutlinedIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">Upload</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    {/* ); */}
    </>
};

export default DesignPost;

