import { useEffect, useState } from "react";

const useNetworkStatus = () => {
  const [online, setonline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setonline(true);
    };
    const handleOffline = () => {
      setonline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return online;
};

export default useNetworkStatus;
