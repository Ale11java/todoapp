import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { Svg, Circle, Text as SvgText } from "react-native-svg";
import ImagePicker from "react-native-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItemSwipeable from "react-native-elements/dist/list/ListItemSwipeable";

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

const TodoScreen: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userImage, setUserImage] = useState<string | null>(null);

  useEffect(() => {
    const timerID = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === "") {
      return;
    }
    const todoItem: TodoItem = {
      id: Math.random().toString(),
      title: newTodo,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, todoItem]);
    setNewTodo("");
  };

  const toggleTodoCompletion = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const openImagePicker = () => {
    ImagePicker.showImagePicker(
      { title: "Select Image" },
      (response: {
        didCancel: any;
        error: any;
        uri: React.SetStateAction<string | null>;
      }) => {
        if (!response.didCancel && !response.error) {
          setUserImage(response.uri);
        }
      }
    );
  };

  const renderTodoItem = ({ item }: { item: TodoItem }) => (
    <View style={styles.todoItem}>
      <CheckBox
        checked={item.completed}
        onPress={() => toggleTodoCompletion(item.id)}
        containerStyle={styles.checkboxContainer}
        checkedColor="#333"
      />
      <TextInput style={styles.todoTitle} editable={false} value={item.title} />
    </View>
  );

  const RenderCircle = () => {
    return (
      <View
        style={{
          height: 200,
          width: 200,
          borderRadius: 9999,
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </View>
    );
  };
  const HSpacer = ({ height = 20 }: { height?: number }) => {
    return <View style={{ height }} />;
  };

  const ItemCount = () => {
    return (
      <View
        style={{
          padding: 2,
          height: 40,
          width: 40,
          borderRadius: 999,
          position: "absolute",
          top: 50,
          right: 15,
          backgroundColor: "grey",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>{todos.length}</Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={{ paddingHorizontal: 20, flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <RenderCircle />
          <HSpacer />
          <Text>Welcome</Text>
        </View>
        <HSpacer />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.input}
              placeholder="Add a new todo"
              value={newTodo}
              onChangeText={setNewTodo}
            />
          </View>
          <Button title="Add" onPress={addTodo} />
        </View>
        <HSpacer />
        <FlatList
          ListEmptyComponent={
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Add stuff</Text>
            </View>
          }
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </SafeAreaView>

      <ItemCount />
    </>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  innerContainer: {
    width: "80%",
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  todoItem: {
    flexDirection: "row",
  },
  checkboxContainer: {
    margin: 0,
    padding: 0,
    marginRight: 8,
  },
  todoTitle: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  todoList: {
    backgroundColor: "red",
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default TodoScreen;
