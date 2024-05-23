//* Based on useIdleTimer (TC-Webapp)
import React from "react";

const useIdleTimerHook = (isActive: boolean, onIdle: Function, defaultTimeout_ms = 3600 * 1000): void => {
  // console.log("isActive:", isActive);

  const timerRef: React.MutableRefObject<number | null> = React.useRef<number | null>(null);

  const resetTimer = React.useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef?.current);
    }
    timerRef.current = setTimeout(onIdle, defaultTimeout_ms);
  }, [onIdle, defaultTimeout_ms]);

  React.useEffect(() => {
    if (isActive) {
      const events: string[] = ["mousemove", "mousedown", "keypress", "scroll", "touchstart", "mouseup"];

      events.forEach((event) => window.addEventListener(event, resetTimer));

      resetTimer();

      return () => {
        events.forEach((event) => window.removeEventListener(event, resetTimer));
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }
  }, [isActive, resetTimer]);
};

export default useIdleTimerHook;
