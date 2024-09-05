import { createContext, useState, useEffect } from "react";
import featureFlagDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      const response = await featureFlagDataServiceCall();
      setEnableFlags(response);
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagsContext.Provider value={{ loading, enableFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
