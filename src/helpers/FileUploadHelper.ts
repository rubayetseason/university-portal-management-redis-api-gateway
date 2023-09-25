import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'doi2yyvnj',
  api_key: '168459993363291',
  api_secret: 'cWe3f962nFJN62LxSZ755WuwZ8s'
});

const uploadToCloudinary = async () => {
  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    }
  );
};

export const FileUploadHelper = { uploadToCloudinary };
