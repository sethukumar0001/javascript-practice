import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

function App() {

  const finalSpaceCharacters = [
    {
      id: 'gary',
      name: 'Gary Goodspeed',
    },
    {
      id: 'gary2',
      name: 'Gary Goodspeed2',
    },
    {
      id: 'gary3',
      name: 'Gary Goodspeed3',
    }
  ]

  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  // useEffect(() => {
  //   const parsedCount = JSON.parse(localStorage.getItem("characters"));
  //   updateCharacters(parsedCount);
  // }, [updateCharacters])

  useEffect(() => {
    localStorage.setItem('characters', JSON.stringify(characters));
  }, [characters])

  const handleOnDragEnd = result => {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
console.log(characters)
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
            {characters&&characters.map(({id, name, thumb}, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <div className="characters-thumb">
                        {/* <img src={thumb} alt={`${name} Thumb`} /> */}
                      </div>
                      <p>
                        { name }
                      </p>
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
