import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import AccountList from "./AccountList";

const Container = styled.View`
  flex: 1;
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

const EmptyText = styled.Text`
  font-family: Roboto-Bold;
  font-size: 64px;
  color: white;
  margin: 24px;
  margin-top: 48px;
  line-height: 60px;
`;

export const AccountListContainer = ({ items, navigation }) => {
  const redirect = item => {
    navigation.navigate("AccountDetail", { account: item });
  };

  return (
    <Container>
      {items.length > 0 ? (
        <ScrollContainer>
          <AccountList items={items} onPress={redirect} />
        </ScrollContainer>
      ) : (
        <EmptyText>No Accounts were found.</EmptyText>
      )}
    </Container>
  );
};

AccountListContainer.propTypes = {
  items: PropTypes.array,
  navigation: PropTypes.object
};

AccountListContainer.defaultProps = {
  items: []
};

const mapStateToProps = ({ accounts }) => ({ items: accounts });

export default connect(mapStateToProps)(AccountListContainer);
