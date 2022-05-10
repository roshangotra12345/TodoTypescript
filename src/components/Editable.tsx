import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TaskTodo} from './interface';

const Editable = ({
  elem,
  index,
  deleteElement,
  setItem,
  handleEdit,
}: ///edit1,
//edit1,
//edit1,
// edit1,
{
  elem: {taskName: string; id: number};
  index: number;
  //edit1: Boolean;
  deleteElement: (index: number) => void;
  setItem: (item: string, index: number) => void;
  handleEdit: (
    elem: {taskName: string; id: number},
    updateText: string,
  ) => void;
}) => {
  const [edit, setEdit] = useState(true);
  const [updateText, setUpdateText] = useState('');

  const editElemnt = (elem: {taskName: string}) => {
    setEdit(false);
    // setItem(elem: {taskName: string});
  };
  //const {elem, index} = props;
  // const handleEdit = () => {
  //   setEdit(true);
  // };

  useEffect(() => {
    setUpdateText(elem.taskName);
  }, []);

  console.log(elem, index);
  return (
    <ScrollView>
      <View>
        <View style={styles.folder}>
          <View style={styles.text2}>
            <TouchableOpacity
              onPress={() => {
                editElemnt(elem);
              }}>
              {edit ? (
                <Text style={styles.text}>{elem.taskName}</Text>
              ) : (
                <TextInput
                  style={styles.text4}
                  value={updateText}
                  onChangeText={text => setUpdateText(text)}
                />
              )}
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
              onPress={() => {
                handleEdit(elem, updateText);
                setEdit(true);
              }}
              style={styles.appButtonContainer1}>
              <Text style={styles.appButtonText1}>+</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Editable;

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',

    marginRight: 5,
  },
  appButtonContainer: {
    display: 'flex',
    elevation: 3,
    backgroundColor: '#009688',
    borderRadius: 14,
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
    borderRadius: 54,
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
    marginTop: 20,
    marginBottom: 45,
  },
  // btn: {
  //   marginTop: 30,
  //   marginBottom: 30,
  // },

  appButtonContainer1: {
    backgroundColor: '#009688',
    borderRadius: 100,
    // paddingVertical: 5,
    // paddingHorizontal: 8,
    // marginTop: 20,
    // marginBottom: 20,
    maxHeight: 50,
    width: 50,
  },
  appButtonText1: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    // marginTop: 20,
    // marginBottom: 20,
    borderRadius: 100,
  },
  text4: {
    padding: -10,
    backgroundColor: 'grey',
  },
});
