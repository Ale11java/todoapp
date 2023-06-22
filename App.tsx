import "react-native-reanimated";
import "react-native-gesture-handler";
import Pocketbase from "pocketbase";

import React from "react";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return <Navigation />;
}

// Pocketbase.init({
//   appId: "YOUR_APP_ID",
//   appSecret: "YOUR_APP_SECRET",
//   apiEndpoint: "https://api.pocketbase.io",
// });
