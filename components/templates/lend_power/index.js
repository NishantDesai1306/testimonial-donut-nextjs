import { useCallback, useContext, useMemo } from "react";
import MuxPlayer from "@mux/mux-player-react";

import { WidgetContext } from "../../../context/widget";
import styles from "./index.module.scss";
import Play from "../../../public/images/play.svg";
import Pause from "../../../public/images/pause.svg";

export default function Widget({ widget, testimonial }) {
  const {
    playingTestimonial,
    setPlayingTestimonial,
  } = useContext(WidgetContext);

  const isPlaying = useMemo(() => playingTestimonial === testimonial._id, [ playingTestimonial, testimonial ]);
  const togglePlayback = useCallback(() => {
    if (isPlaying) {
      setPlayingTestimonial(null);
    } else {
      setPlayingTestimonial(testimonial._id);
    }
  }, [isPlaying, setPlayingTestimonial, testimonial]);

  return (
    <div className={styles.testimonial}>
      <div
        className={styles["testimonial-video"]}
        id={`video-container-${testimonial._id}`}
      >
        <MuxPlayer
          nohotkeys
          className={`mux-player ${styles["testimonial-video-player"]}`}
          streamType="on-demand"
          paused={!isPlaying}
          playbackId={testimonial.video.url}
          poster={testimonial.video.poster}
        />

        <div className={styles['trigger-button']} onClick={togglePlayback}>
          {
            isPlaying ? (
              <Pause />
            ) : (
              <Play />
            )
          }
        </div>        
      </div>

      <div className={styles["testimonial-text-container"]}>
        <div className={styles["testimonial-text"]}>
          {testimonial.text}
        </div>
        <div className={styles["testimonial-author-name"]}>
          {testimonial.author.name}
        </div>
        <div className={styles["testimonial-author-designation"]}>
          {testimonial.author.designation}
        </div>
      </div>
    </div>
  );
}