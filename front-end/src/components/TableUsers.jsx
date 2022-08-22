import React from 'react';

function TableUsers(usersAdmin) {
  const { email, name, role, index } = usersAdmin;

  // useEffect(() => {
  //   handleRemove()
  // },[cart])

  return (
    <div>
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
        {name}

      </span>
      <span
        data-testid={ `admin_manage__element-user-table-email-${index}` }
      >
        {email}

      </span>
      <span
        data-testid={ `admin_manage__element-user-table-role-${index}` }
      >
        {role}

      </span>
    </div>
  );
}

export default TableUsers;
