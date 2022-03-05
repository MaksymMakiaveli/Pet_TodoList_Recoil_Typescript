import React, { useCallback, useState } from 'react';

import { CustomButton, Modals } from '../UIComponents';

import './ActionBlock.scss';

const ActionBlock = () => {
  const [openAddTodo, setOpenAddTodo] = useState(false);

  const handleModalAddTodo = useCallback(() => {
    setOpenAddTodo(!openAddTodo);
  }, [openAddTodo]);

  return (
    <section className="action-block">
      <div className="actions">
        <div className="action_addTodo">
          <CustomButton label="Add Todo" color="green" onClick={handleModalAddTodo} />
        </div>
      </div>
      {openAddTodo ? <Modals.AddTodo open={openAddTodo} onClose={handleModalAddTodo} /> : null}
    </section>
  );
};

export default React.memo(ActionBlock);
