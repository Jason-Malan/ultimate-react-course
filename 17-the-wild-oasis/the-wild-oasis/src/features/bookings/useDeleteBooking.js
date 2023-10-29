import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: () => {
      toast.success("Booking successfully deleted");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteBooking };
}
