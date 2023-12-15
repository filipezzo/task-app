import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Item from "./Item";

function AddItem({ onAdd, onReset, onDelete, onAllDone, onNotDone }) {
  return (
    <div className="sidebar">
      <Item onAdd={onAdd} />
      <ButtonGroup>
        <Button btnType="secondary" onClick={onAllDone}>
          Todas completas 🥷
        </Button>
        <Button btnType="secondary" onClick={onNotDone}>
          Todas incompletas 😿
        </Button>
        <Button btnType="secondary" onClick={onReset}>
          Resetar
        </Button>
        <Button btnType="secondary" onClick={onDelete}>
          Remover tudo
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default AddItem;
