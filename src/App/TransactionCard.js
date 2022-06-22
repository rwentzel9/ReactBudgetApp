import React from "react";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";

export default function TransactionCard(props) {
  return (
    <div>
      <Card
        style={{ maxWidth: 400, marginTop: 20, marginLeft: 20, padding: 25 }}
      >
        <Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{props.transaction.name}</div>
            <div>{props.transaction.amount}</div>
          </div>
        </Typography>
      </Card>
    </div>
  );
}
