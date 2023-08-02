import { useContext } from "react";
import FeatureFlagProvider, { featureFlag } from "./context/FeatureFlag";
import "./styles.css";

export default function App() {
  return (
    <FeatureFlagProvider>
      <Feature value={true} feature={"isPaidForF1"}>
        <h1> F1 is live </h1>
      </Feature>
      <Feature value={false} feature={"isPaidForCricket"}>
        <h1> cricket is live </h1>
      </Feature>
    </FeatureFlagProvider>
  );
}

function Feature({ children, value, feature }) {
  const { features } = useContext(featureFlag);
  return features[feature] === value ? children : null;
}
import { createContext, useState } from "react";

export const featureFlag = createContext({});

function FeatureFlagProvider({ children }) {
  const [features, setFeatures] = useState({
    isPaidForF1: true,
    isPaidForCricket: false
  });
  return (
    <featureFlag.Provider value={{ features }}>{children}</featureFlag.Provider>
  );
}
export default FeatureFlagProvider;
