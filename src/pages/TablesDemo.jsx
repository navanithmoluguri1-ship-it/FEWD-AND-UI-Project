import { useEffect, useState, useMemo } from "react";
import Table from "../components/Table";
import Loader from "../components/Loader";

const TableDemo = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData([
        { name: "Rajinikanth", age: 70 },
        { name: "Sai Charan", age: 20 },
        { name: "Shyam Snehal", age: 22 },
        { name: "Navanith", age: 19 },
        { name: "Vijay Thalapathy", age: 50 },
        { name: "Varanasi", age: 21 }
      ]);
    }, 1500);
  }, []);

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  if (!data) return <Loader />;

  return (
    <div className="table-wrapper">
      <div className="table-card">
        <h2>Interactive Data Table</h2>

        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <Table data={filteredData} />
      </div>
    </div>
  );
};

export default TableDemo;