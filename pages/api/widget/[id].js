import dbConnect from '../../../lib/dbConnect';
import Widget from '../../../models/widget';

function loadData (id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        widget: {
          _id: "64e97b7c62eba5ae537d64f6",
          layout: "lend_power",
          fonts: {
            name: "Poppins",
            link: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          }
        },
        testimonials: [
          {
            _id: "64f29a3ade9406f4fcc7d55f",
            widget: "64e97b7c62eba5ae537d64f6",
            order: 3,
            text: "So there you have it. We've done all the heavy lifting so you can relax and watch your sales grow.",
            video: {
              url: "tx4Y9iqWfeW4aTiUaDVkp0017RAEaVnIictODi01q8gCM",
              poster: "https://image.mux.com/tx4Y9iqWfeW4aTiUaDVkp0017RAEaVnIictODi01q8gCM/thumbnail.png?width=350&height=312&time=07.2"
            },
            author: {
              name: "Farzan",
              designation: "Co-founder Testimonial Donut"
            }
          },
          {
            _id: "64f29a3ade9406f4fcc7d560",
            widget: "64e97b7c62eba5ae537d64f6",
            order: 1,
            text: "Welcome to Testimonial Donut. It's great to have you with us. Watch this to learn what we're all about.",
            video: {
              url: "6YA1uuFVwLrL364zRlYPDURmId5iONNvJioWwQdcDus",
              poster: "https://image.mux.com/6YA1uuFVwLrL364zRlYPDURmId5iONNvJioWwQdcDus/thumbnail.png?width=350&height=312&time=0.3"
            },
            author: {
              name: "Farzan",
              designation: "Co-founder Testimonial Donut"
            }
          },
          {
            _id: "64f29a3ade9406f4fcc7d561",
            widget: "64e97b7c62eba5ae537d64f6",
            order: 2,
            text: "Now you know what we're about, you need to register for our free Beta. Watch to learn what'll happen next.",
            video: {
              url: "kVq1d3qZBAwF01SBSy7rdmgZE5KKSapsW1xUQafA701HU",
              poster: "https://image.mux.com/kVq1d3qZBAwF01SBSy7rdmgZE5KKSapsW1xUQafA701HU/thumbnail.png?width=350&height=312&time=1"
            },
            author: {
              name: "Farzan",
              designation: "Co-founder Testimonial Donut"
            }
          }
        ]
      })
    }, 300);
  });
}

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
        // const {
        //   widget,
        //   testimonials,
        // } = await loadData(id);
        
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