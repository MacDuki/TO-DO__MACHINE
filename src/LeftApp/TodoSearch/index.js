import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { TodoContext } from "../../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const {
    selectDayPanel,
    setSelectDayPanel,

    setSelectedDay,
  } = React.useContext(TodoContext);

  const handleDaySelected = (arg) => {
    setSelectedDay(arg.target.value);
    setSelectDayPanel(!selectDayPanel);
  };

  useEffect(() => {
    const fecha = new Date();

    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const dia = String(fecha.getDate()).padStart(2, "0");

    const fechaFormateada = `${año}-${mes}-${dia}`;
    setSelectedDay(fechaFormateada);
  }, []);

  return (
    <div>
      {!selectDayPanel ? (
        <div>
          <div className="first-container">
            <span
              whileHover={{
                scale: 1.1,
                color: "#547980",
              }}
            >
              <BsArrowLeftCircle className="arrow-icons" />
            </span>
            <h2
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              className="left-tittle"
            >
              date:
            </h2>
            <span>Today</span>
            <span
              whileHover={{
                scale: 1.1,
                color: "#547980",
              }}
            >
              <BsArrowRightCircle className="arrow-icons" />
            </span>
            <MdOutlineDateRange
              onClick={() => {
                setSelectDayPanel(!selectDayPanel);
              }}
            />
          </div>
        </div>
      ) : (
        <div>
          <AiOutlineCloseCircle
            onClick={() => {
              setSelectDayPanel(!selectDayPanel);
            }}
            className="plus-icon"
          />
          <input type="date" onChange={(e) => handleDaySelected(e)} />
        </div>
      )}

      <input placeholder="Buscar ToDoS" className="TodoSearch" />
    </div>
  );
}

export { TodoSearch };
