import getWidgetData from '../../../services/get-widget-data';

import WidgetComponent from '../../../components/widget';

export default function Widget({ widget, testimonials }) {

  return (
    <div className="testimonial-container">
      <WidgetComponent
        widget={widget}
        testimonials={testimonials}
      />
    </div>
  )
}

export async function getServerSideProps(context) {
  const {
    params: {
      widgetId,
    },
  } = context;

  const {
    data: {
      widget,
      testimonials,
    }
  } = await getWidgetData(widgetId);
  
  return {
    props: {
      widget,
      testimonials,
    }
  };
}
