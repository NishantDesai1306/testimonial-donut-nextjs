import dbConnect from '../../../lib/dbConnect';
import Widget from '../../../models/widget';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const {
          widget,
          testimonials,
        } = await Widget.getWidgetWithTestimonials(id);

        if (!widget) {
          return res.status(400).json({ success: false })
        }

        res.status(200).json({ widget, testimonials });
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}