import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import KButton from "../components/KButton";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>

      <TouchableOpacity onPress={increment}>
        <Text style={{ fontSize: 24, color: "blue", marginTop: 10 }}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement}>
        <Text style={{ fontSize: 24, color: "blue", marginTop: 10 }}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

// const PlaygroundScreen = () => {
//   const [name, setName] = useState("Jeff");
//   const [age, setAge] = useState(40);

//   const onChange1 = (event: {
//     target: { value: React.SetStateAction<string> };
//   }) => {
//     setName(event.target.value);
//   };

//   const onClick1 = () => {
//     setAge(age + 1);
//   };

//   const handleLogClick = () => {
//     console.log(age);
//     onClick1();
//   };

//   return (
//     <View style={styles.container}>
//       <KButton
//         title={"Increment by 1 (useState)"}
//         textColor={"#ffffff"}
//         onPress={handleLogClick}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
// export default PlaygroundScreen;
