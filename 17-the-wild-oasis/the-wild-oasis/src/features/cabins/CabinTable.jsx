import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useEffect, useState } from "react";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { isLoading, cabins: queryCabins, error } = useCabins();
  const [searchParams] = useSearchParams();

  const [cabins, setCabins] = useState([]);

  useEffect(() => {
    setCabins(queryCabins ?? []);
  }, [queryCabins]);

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get("discount");
  let filteredCabins;
  switch (filterValue) {
    case "all":
      filteredCabins = cabins;
      break;
    case "no-discount":
      filteredCabins = cabins.filter((c) => c.discount === 0);
      break;
    case "with-discount":
      filteredCabins = cabins.filter((c) => c.discount > 0);
      break;
    default:
      filteredCabins = cabins;
      break;
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredCabins}
          render={(cabin) => (
            <CabinRow cabin={cabin} setCabins={setCabins} key={cabin.id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
