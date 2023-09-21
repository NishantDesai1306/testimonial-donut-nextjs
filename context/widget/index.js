import { createContext, useState } from "react";

export const WidgetContext = createContext({
  playingTestimonial: null,
  setPlayingTestimonial: () => {},
});

export default function WidgetContextProvider ({ children }) {
  const [playingTestimonial, setPlayingTestimonial] = useState(null);

  return (
    <WidgetContext.Provider
      value={{
        playingTestimonial,
        setPlayingTestimonial,
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
}
