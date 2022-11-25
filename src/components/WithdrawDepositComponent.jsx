import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { depositMoney, withdrawMoney } from "../state/action-creators";
export default function WithdrawDepositComponent() {
  const dispatch = useDispatch();

  // const withdrawAmount = () => {
  //   dispatch(actionCreators.withdrawMoney(100));
  // };
  // const depositAmount = () => {
  //   dispatch(actionCreators.depositMoney(100));
  // };

  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <button className="btn btn-info" onClick={() => depositMoney(100)}>
        Deposit $100
      </button>
      <br />
      <br />
      <br />
      <button className="btn btn-danger" onClick={() => withdrawMoney(100)}>
        Withdraw $100
      </button>
    </div>
  );
}
