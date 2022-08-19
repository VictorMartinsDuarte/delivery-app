import React, { useState, useEffect, useCallback } from 'react';
import { apiGetUsers, apiDeleteAdmin } from '../services/api';

function TableUsers(usersAdmin) {
  const { token } = usersAdmin;
  const [usersAllTable, setusersAllTable] = useState([]);
  const userssellers = useCallback(async () => {
    const users = await apiGetUsers();
    const usersAll = users.filter(({ role }) => role !== 'administrator');
    setusersAllTable(usersAll);
  }, [setusersAllTable]);

  useEffect(() => {
    userssellers();
  }, []);

  const handleRemove = async (id) => {
    await apiDeleteAdmin(id, token);
    // const remove = usersAllTable.filter((e) => e.id !== id);
    // setusersAllTable(remove);
  };

  // useEffect(() => {
  //   handleRemove()
  // },[cart])

  return (
    <div>
      {usersAllTable.map((item, index) => (
        <div key={ index }>
          <span
            data-testid={
              `admin_manage__element-user-table-item-number-${index}`
            }
          >
            {index + 1}

          </span>
          <span
            data-testid={ `admin_manage__element-user-table-name-${index}` }
          >
            {item.name}

          </span>
          <span
            data-testid={ `admin_manage__element-user-table-email-${index}` }
          >
            {item.email}

          </span>
          <span
            data-testid={ `admin_manage__element-user-table-role-${index}` }
          >
            {item.role}

          </span>
          <button
            data-testid={ `admin_manage__element-user-table-remove-${index}` }
            onClick={ () => handleRemove(item.id) }
            type="button"
          >
            Excluir

          </button>
        </div>
      ))}
    </div>
  );
}

export default TableUsers;
