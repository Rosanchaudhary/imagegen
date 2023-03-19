import Post from "@/lib/models/post";
import dbConnect from "@/lib/mongodb";
import { v2 as cloudinary } from "cloudinary";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "100mb",
    },
  },
};

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
  });

  switch (method) {
    case "GET":
      try {
        const posts = await Post.find({});
        res.status(201).json({ success: true, data: posts });
      } catch (error) {
        res.status(500).json({ success: false, message: error });
      }
      break;
    case "POST":
      try {

        const { name, prompt, photo } = req.body;

        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await Post.create({
          name,
          prompt,
          photo: photoUrl.url,
        });

        res.status(201).json({ sucess: true, data: newPost });
      } catch (error) {
        res.status(500).json({ success: false, message: error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
