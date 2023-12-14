function Counter({ items }) {
  const itemsLength = items.length;
  const finishLength = items.filter((item) => item.done).length;
  return (
    <>
      {finishLength === itemsLength &&
      itemsLength !== 0 &&
      finishLength !== 0 ? (
        <p>Parabéns, Você é demais 🎆</p>
      ) : (
        <p>
          <b>
            {finishLength} / {itemsLength} tarefas
          </b>
        </p>
      )}
    </>
  );
}

export default Counter;
