import { useState } from "react";
import CreateCabinForm from "../../features/cabins/CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowForm((show) => !show)}>
        Add new cabin
      </Button>

      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <CreateCabinForm onCloseModal={() => setShowForm(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
