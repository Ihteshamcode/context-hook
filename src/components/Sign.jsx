import React, { useContext } from "react";
import context from "../context/Context";

const Sign = () => {
  const { user } = useContext(context);

  if (!user) return <div>please login</div>;
  if (user) return <div>welcome {`${user.userName}`}</div>;
};

export default Sign;
