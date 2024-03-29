import { useEffect, useReducer } from "react";
import styled from "styled-components";
import "./Paginations.css";

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
`;

function reducer(state, action) {
  const limit = action.limit;
  const startNum = (Math.ceil(action.currentPage / limit) - 1) * limit + 1;
  const counts =
    Math.min(action.totalPage, startNum + limit - 1) - startNum + 1;
  const numbers = new Array(counts).fill(startNum).map((v, i) => v + i);
  return {
    ...state,
    pageNumbers: numbers,
    before: startNum - limit,
    after: startNum + limit,
  };
}

const initialState = {
  pageNumbers: [],
  before: 0,
  after: 0,
};

// props : currentPage , setCurrentPage , totalPage , limit
export default function Paginations(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(props);
    function setNumbers() {
      dispatch({
        currentPage: props.currentPage ? props.currentPage : 0,
        totalPage: props.totalPage ? props.totalPage : 0,
        limit: props.limit ? props.limit : 0,
      });
    }
    setNumbers();
  }, [props]);

  function setCurrent(number) {
    props.setCurrentPage(number);
  }

  return (
    <div className="page-menu">
      {state.before > 0 && (
        <Button onClick={() => setCurrent(state.before)}>
          {state.before + "..."}
        </Button>
      )}
      {state.pageNumbers?.map((num) => (
        <Button key={num} onClick={() => setCurrent(num)}>
          {num}
        </Button>
      ))}
      {state.after <= props.totalPage && (
        <Button onClick={() => setCurrent(state.after)}>
          {state.after + "..."}
        </Button>
      )}
    </div>
  );
}
