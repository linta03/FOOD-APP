import { useEffect, useState } from "react";

const useNetworkStatus = () => {
  const [online, setonline] = useState(true);// initial value of online set to true

  useEffect(() => {
    const handleOnline = () => {
      setonline(true);// set the network status to true when event triggered is 'online'
    };
    const handleOffline = () => {
      setonline(false);// set the network status to false when event triggered is 'offline'
    };

    window.addEventListener("online", handleOnline);// attach event listener to DOM for 'online' event
    window.addEventListener("offline", handleOffline);// attach event listener to DOM for 'offline' event

    return () => {
      window.removeEventListener("online", handleOnline);// remove event listener from DOM for 'online' event
      window.removeEventListener("offline", handleOffline);// remove event listener from DOM for 'offline' event
    };
  }, []);

  return online;
};

export default useNetworkStatus;
