import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {FC, useState} from 'react';
import {TaskTodo} from './interface';
import Editable from './Editable';
//import Icon from 'react-native-vector-icons/FontAwesome';
const TodoAdd: FC = () => {
  const [item, setItem] = useState<string>('');
  const [todoList, setTodoList] = useState<TaskTodo[]>([]);
  //const [edit, setEdit] = useState(true);
  // const [edit1, setEdit2] = useState<Boolean>(false);

  const addTodoItem = () => {
    if (item) {
      const newTask = {taskName: item, id: todoList.length + 1};
      setTodoList([...todoList, newTask]);
      console.log(todoList);
    } else {
      Alert.alert('Please write Something');
    }
    setItem('');
    //setEdit2(false);
  };

  const deleteElement = (index: number) => {
    const deleteItems = todoList.filter((elem, id: number) => {
      return id != index;
    });
    setTodoList(deleteItems);
    // setEdit2(true);
  };

  const handleEdit = (
    elem: {taskName: string; id: number},
    updateText: string,
  ) => {
    const UpdatedTodo = todoList.map((item: TaskTodo) => {
      if (item.id == elem.id) {
        item.taskName = updateText;
        return item;
      } else {
        return item;
      }
    });
    setTodoList(UpdatedTodo);
    //setEdit2(true);
  };
  return (
    <View>
      <View style={styles.contain}>
        <View style={styles.container}>
          <TextInput
            style={styles.text1}
            value={item}
            onChangeText={text => setItem(text)}
            placeholder="Add ToDo"
          />
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={() => addTodoItem()}>
            <Text style={styles.appButtonText}>ADDTodo</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>{item}</Text>
      <ScrollView>
        <View>
          {todoList.map((elem: TaskTodo, index: number) => {
            return (
              <Editable
                elem={elem}
                index={index}
                deleteElement={deleteElement}
                setItem={setItem}
                handleEdit={handleEdit}
                // edit1={edit1}
              />
            );
          })}

          {/* {todoList.map((elem, index) => (
          <> */}
          {/* <View style={styles.folder}>
              <View style={styles.text2}>
                <TouchableOpacity onPress={() => handleEdit()}>
                  {edit ? <Text>{elem.taskName}</Text> : <TextInput />}
                </TouchableOpacity>
              </View>
              {edit ? (
                <TouchableOpacity
                  onPress={() => deleteElement(index)}
                  style={styles.appButtonContainer1}>
                  <Text style={styles.appButtonText1}>X</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => addTodoItem()}
                  style={styles.appButtonContainer1}>
                  <Text style={styles.appButtonText1}>+</Text>
                </TouchableOpacity>
              )}
            </View> */}
          {/* <Editable elem={elem} index={index} />
          </>
        ))} */}
        </View>
      </ScrollView>
    </View>
  );
};

export default TodoAdd;

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'white',
    width: '70%',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    padding: 10,

    marginRight: 5,
  },
  appButtonContainer: {
    display: 'flex',
    elevation: 3,
    backgroundColor: '#009688',
    borderRadius: 4,
    paddingVertical: 1,
    paddingHorizontal: 2,
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
    marginLeft: 5,
  },
  appButtonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    justifyContent: 'center',
  },
  contain: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 1,

    backgroundColor: 'grey',
    height: 70,
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  text1: {
    backgroundColor: 'white',
    width: '80%',

    marginRight: 5,
  },
  folder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text2: {
    width: '60%',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginTop: 30,
    marginBottom: 30,
  },
  // btn: {
  //   marginTop: 30,
  //   marginBottom: 30,
  // },

  appButtonContainer1: {
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    maxHeight: 60,
    width: 50,
  },
  appButtonText1: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    marginTop: 20,
    marginBottom: 20,
  },
});
