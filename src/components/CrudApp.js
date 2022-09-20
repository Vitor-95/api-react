import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
    { id: 1, name: 'VICTOR CAMACHO', carnet: 123456 },
    { id: 2, name: 'SEBASTIAN RODRIGUEZ', carnet: 321654 },
    { id: 3, name: 'ANDRES PEREIRA', carnet: 987654 },
    { id: 4, name: 'MARTIN PANIAGUA', carnet: 456789 },
    { id: 5, name: 'JOSE PAREDES', carnet: 147852},
    { id: 6, name: 'CARLOS CONTRERAS', carnet: 258963},
    { id: 7, name: 'ROBERTO SORIA', carnet: 51382},
    { id: 8, name: 'MARIA CHOQUE', carnet: 12648},
    { id: 9, name: 'CLAUDIA CAMARGO', carnet: 1619848},
    { id: 10, name: 'CAROLINA PEREZ', carnet: 2987163}
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;
