import { useEffect, useState } from "react";

export function useMountedAnim(isMounted, delayTime) {
  const [isRendered, setIsRendered] = useState(false);
  // delaying the unmount of TaskList component so it performs the closing animation
  useEffect(() => {
    let timerID;
    //if the TaskList component is closing and is currently rendered
    //set isRendered to false after 0.5 seconds
    if (!isMounted && isRendered) {
      timerID = setTimeout(() => setIsRendered(false), delayTime);
    } else if (isMounted && !isRendered) {
      //if TaskList is opening and not currently rendered on the screen
      // set isRendered to true so the TaskList component will be rendered on the screen
      setIsRendered(true);
    }

    return () => clearTimeout(timerID);
  }, [isMounted, delayTime, isRendered]);

  return isRendered;
}
