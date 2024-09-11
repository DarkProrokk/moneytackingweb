import React, { useState } from "react";

const Filter = ({ filterType, filterLabel }) => {
  const [isActive, setIsActive] = useState(false);
  const [filterValue, setFilterValue] = useState("");

  const handleInputChange = (event) => {
    setFilterValue(event.target.value);
  };

  const renderInputField = () => {
    switch (filterType) {
      case "text":
        return (
          <input
            type="text"
            value={filterValue}
            onChange={handleInputChange}
            placeholder="Введите название"
          />
        );
      case "date":
        return (
          <input
            type="date"
            value={filterValue}
            onChange={handleInputChange}
          />
        );
      case "numberRange":
        return (
          <>
            <input
              type="number"
              value={filterValue.min || ""}
              onChange={(e) =>
                setFilterValue({ ...filterValue, min: e.target.value })
              }
              placeholder="Мин. значение"
            />
            <input
              type="number"
              value={filterValue.max || ""}
              onChange={(e) =>
                setFilterValue({ ...filterValue, max: e.target.value })
              }
              placeholder="Макс. значение"
            />
          </>
        );
      case "boolean":
        return (
          <select value={filterValue} onChange={handleInputChange}>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className="filter">
      <label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={() => setIsActive(!isActive)}
        />
        {filterLabel}
      </label>
      {isActive && (
        <div className="filter-input">
          {renderInputField()}
        </div>
      )}
    </div>
  );
};

const Filters = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="filter-area"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="filter-label">Наведи сюда, чтобы открыть фильтры</div>
      
      {/* Условный рендеринг: показываем фильтры только при наведении */}
      {isHovered && (
        <div className="filters">
          <Filter filterType="text" filterLabel="Название" />
          <Filter filterType="date" filterLabel="Дата" />
          <Filter filterType="numberRange" filterLabel="Диапазон чисел" />
          <Filter filterType="boolean" filterLabel="Статус" />
        </div>
      )}
    </div>
  );
};

export default Filters;
