import React, { useState, useContext } from "react";
import { View, FlatList } from "react-native";
import { Store } from "../store";
import { CheckBox } from "react-native-elements";
import { getUniqueProperty, TYPE_COLORS, sliceValue } from "../utils";
import Card from "./Card";

const Item = ({ item, dispatch, selectedTypes }) => {
  const [checked, setChecked] = useState(false);
  types = selectedTypes;
  return (
    <View>
      <CheckBox
        style={style(item.type)}
        key={item.index}
        title={`Type ${item.type}`}
        checked={checked}
        onPress={() => {
          if (checked) {
            sliceValue(types, item.type);
          } else {
            types.push(item.type);
          }
          setChecked(!checked);
          dispatch({ type: "SELECTED_TYPE", payload: types });
        }}
      />
    </View>
  );
};

export default Main = () => {
  const { state, dispatch } = useContext(Store);
  const types = getUniqueProperty(state.items, "type");
  return (
    <View>
      <FlatList
        horizontal={true}
        data={types}
        renderItem={({ item }) => (
          <Item item={item} dispatch={dispatch} selectedTypes={state.type} />
        )}
        keyExtractor={item => item.index.toString()}
      />
      <Card />
    </View>
  );
};
const style = type => ({
  backgroundColor: TYPE_COLORS[type],
  marginTop: 10,
  marginBottom: 10
});
