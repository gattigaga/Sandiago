import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { format, isToday } from "date-fns";

import Account from "./Account";

const AccountList = ({ items, onPress }) => {
  return (
    <View>
      {items.map(item => {
        const schema = isToday(item.date)
          ? "hh:mm A"
          : "MMM DD, YYYY - hh:mm A";

        return (
          <Account
            key={item.id}
            name={item.name}
            description={item.description}
            date={format(item.date, schema)}
            onPress={() => onPress(item)}
          />
        );
      })}
    </View>
  );
};

AccountList.propTypes = {
  items: PropTypes.array,
  onPress: PropTypes.func
};

export default AccountList;
