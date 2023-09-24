import { Schema, model, models } from "mongoose";

const testimonialSchema = new Schema({
  widget: {
    type: Schema.Types.ObjectId,
    ref: "Widget",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  video: {
    poster: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    },
  },
  author: {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
  },
  order: {
    type: Number,
    required: true,
  },
});

export default models.Testimonial || model("Testimonial", testimonialSchema);
