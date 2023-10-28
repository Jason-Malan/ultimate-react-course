import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useEffect, useState } from "react";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isLoading, cabins: queryCabins, error } = useCabins();
  const [searchParams] = useSearchParams();

  const [cabins, setCabins] = useState([]);

  useEffect(() => {
    setCabins(queryCabins ?? []);
  }, [queryCabins]);

  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resource="cabins" />;

  // Filter
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

  // Sort
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const filteredAndSortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

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
          data={filteredAndSortedCabins}
          render={(cabin) => (
            <CabinRow cabin={cabin} setCabins={setCabins} key={cabin.id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
