import { Schema, model } from "mongoose";
import Testimonial from "./testimonial.js";

const WidgetSchema = new Schema({
  layout: {
    type: String,
    required: true,
  },
  fonts: {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
});

WidgetSchema.statics.getWidgetWithTestimonials = async function (id) {
  const model = this;
  const widget = await model.findById(id);

  if (!widget) {
    throw new Error(`Could not find widget ${id}`);
  }

  const testimonials = await Testimonial
    .find({ widget: widget._id })
    .sort('field order');

  return {
    widget,
    testimonials,
  };
}

const Widget = model("Widget", WidgetSchema);

export default Widget;
