import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useProducts() {
  function getRecent() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  let response = useQuery({
    queryKey: ["recentProducts"],
    queryFn: getRecent,
    // refetchInterval: 3000,
    // refetchIntervalInBackground: true,
    // staleTime:8000,
  });

  return response;
}
