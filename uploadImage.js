const cloudinary = require('cloudinary').v2;

require('dotenv').config()

cloudinary.config({ 
    cloud_name: dan7chjkh, 
    api_key: 984869243212386, 
    api_secret: 7sPQU_TI54kvJ8JKk4eJLw2dpY8 
  });



module.exports= cloudinary
