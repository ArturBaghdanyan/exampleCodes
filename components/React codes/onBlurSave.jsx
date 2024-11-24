import React, { ChangeEvent, FC, useState } from 'react';


const ColumnHeader = props => {
  const { title, id, handleMenuState } = props;
  const [columnTitle, setColumnTitle] = useState(title);

  const editColumnTitle = async (id, title) => {
    try {
      const column = getColumnById(id);

      await request(`/columns/${id}`, {
        method: 'PUT',
        data: {
          ...column,
          title,
        },
      });

      const updatedColumns = columns.map(item => {
        if (item.id === id) {
          return {
            ...item,
            title,
          };
        }
        return item;
      });
      setColumns(updatedColumns);
      return { status: 'success' };
    } catch (err) {
      return { status: 'failed' };
    }
  };


  const onSaveTitle = () => {
    if (columnTitle.length > 0) {
      editColumnTitle(id, columnTitle);
    }
  };

  const onChangeTitle = (event) => {
    setColumnTitle(event.target.value);
  };

  return (
    <div className={style.columns_title}>
      <input
        type="text"
        value={columnTitle}
        onChange={onChangeTitle}
        onBlur={onSaveTitle}
      />
      <button className={style.image} onClick={handleMenuState}>
        <img src={title_menu} alt="menu" />
      </button>
    </div>
  );
};
export default ColumnHeader;
