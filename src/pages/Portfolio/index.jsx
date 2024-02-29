import { useState } from "react";
import Card from "../../components/Card";
import Modal from '../../components/Modal';

const dummy = [
    {id: 1, name: 'Name One', description: 'Description1', content: 'Content One'},
    {id: 2, name: 'Name Two', description: 'Description2', content: 'Content Two'},
    {id: 3, name: 'Name Three', description: 'Description3', content: 'Content Three'},
    {id: 4, name: 'Name Four', description: 'Description4', content: 'Content Four'},
  ];

function Portfolio() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleOpenModal = (id) => {
    setModalOpen(true);
    const selected = dummy.find((dum) => dum.id === id);
    setSelectedId(selected)
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const img = './uplift-favicon-32x32.png';
  const title = 'Sample Title';
  const subtitle = 'Sample Subtitle';
  const content = 'Sample Content';
  return (
    <>
        <div className="card-container">
        {dummy.map((dum) => (
          <Card
          key={dum.id}
          id={dum.id}
          img={img}
          title={dum.name}
          subtitle={dum.description}
          content={dum.content}
          onClick={handleOpenModal}
          />
        ))}
      </div>
     
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedId ? <>
          <h2>{selectedId.name}</h2>
          <p>{selectedId.content}</p>
          </>
      : null}
      </Modal>
    </>
  );
}

export default Portfolio;