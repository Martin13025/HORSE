import "./Uslugi.css";
import React, { useState, useEffect } from "react";

const services = [
  { id: 1, name: "Конные прогулки по живописному лесу", price: 1200 },
  { id: 2, name: "Обучение верховой езде для взрослых и детей от 2-х лет", price: 1500 },
  { id: 3, name: "Фотосессии с лошадьми", price: 1000 },
  { id: 4, name: "Экскурсии на конюшню", price: 800 },
  { id: 5, name: "Подарочные сертификаты", price: 1000 },
];

function Uslugi() {
  const [filteredServices, setFilteredServices] = useState(services);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleFilter = (minPrice) => {
    setFilteredServices(services.filter(service => service.price >= minPrice));
  };

  const handleSort = () => {
    const sortedServices = [...filteredServices].sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });
    setFilteredServices(sortedServices);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="Uslugi">
      <h1>Наши услуги</h1>
      <div className="controls">
        <button onClick={() => handleFilter(1000)}>Фильтр по цене ({">"}= 1000 руб.)</button>
        <button onClick={handleSort}>Сортировка по цене ({sortOrder === "asc" ? "по возрастанию" : "по убыванию"})</button>
      </div>
      <ol>
        {filteredServices.map(service => (
          <li key={service.id}>{service.name}, {service.price} руб.</li>
        ))}
      </ol>
    </div>
  );
}

export default Uslugi;



