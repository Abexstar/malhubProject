import React, { useState } from 'react';

const ProfilePictureUpload = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
  
    // Function to handle file selection
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setImage(file);
        setPreview(URL.createObjectURL(file)); // Create a preview URL
      }
    };
  
    // Optional: Function to handle the upload to a server
    const handleUpload = () => {
      const formData = new FormData();
      formData.append('profilePicture', image);
  
      // Make a POST request to upload the image
      // Replace 'YOUR_API_ENDPOINT' with your actual endpoint
      fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          alert('Profile picture uploaded successfully!');
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Failed to upload profile picture.');
        });
    };
  
    return (
      <div style={styles.container}>
        <h2>Upload Profile Picture</h2>
        <div style={styles.previewContainer}>
          {preview ? (
            <img src={preview} alt="Profile Preview" style={styles.preview} />
          ) : (
            <div style={styles.placeholder}>No image selected</div>
          )}
        </div>
        <input type="file" accept="image/*" onChange={handleImageChange} style={styles.fileInput} />
        <button onClick={handleUpload} style={styles.uploadButton}>Upload</button>
      </div>
    );
  };