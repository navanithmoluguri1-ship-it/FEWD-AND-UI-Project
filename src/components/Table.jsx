import { useMemo } from "react";

function Table({ data }) {

  const rows = useMemo(() => {
    return data.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.age}</td>
      </tr>
    ));
  }, [data]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default Table;