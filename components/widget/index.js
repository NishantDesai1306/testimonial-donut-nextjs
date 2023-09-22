import dynamic from "next/dynamic";
import styles from "./widget.module.scss";
import WidgetContextProvider from "../../context/widget";

const TestimonialDonutWidget = dynamic(() => import("../templates/testimonial_donut"));
const LendPowerWidget = dynamic(() => import("../templates/lend_power"));

function Testimonial(props) {
  const { widget } = props;

  if (widget.layout === 'testimonial_donut') {
    return (
      <TestimonialDonutWidget {...props} />
    );
  } else if (widget.layout === 'lend_power') {
    return (
      <LendPowerWidget {...props} />
    );
  } else {
    return (
      <div>
        <div>Rendering Widget</div>
      </div>
    );
  }
}

export default function Widget(props) {
  const {
    widget,
    testimonials = [],
  } = props;

  return (
    <div className={styles['testimonial-container']}>
      <style jsx>{`
        @import url('${widget.fonts.link}');

        * {
          font-family: '${widget.fonts.name}', sans-serif;
        }
      `}</style>

      <WidgetContextProvider>
        {
          testimonials.map((testimonial) => (
            <div
              key={testimonial._id}
              className={styles.testimonial}
            >
              <Testimonial
                widget={widget}
                testimonial={testimonial}
              />
            </div>
          ))
        }
      </WidgetContextProvider>
    </div>
  )
}