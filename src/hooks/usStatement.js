import { useQuery } from "@tanstack/react-query";

import { getFeeStatement } from "@/services/StatementServices";
import moment from "moment";
import { formatCurrency } from "@/lib/utils";

const useStatement = () => {
  /**
 * Query to fetch user's fee statement
 */
  const query = useQuery({
    queryKey: ["fee-statement"],
    queryFn: getFeeStatement,
  });

  const getStatement = () => {
    if (query?.data?.length) {
      const statement = query?.data || [];

      return statement?.map((state) => {
        return {
          paidBy: state?.transaction?.first_name && state?.transaction?.last_name ?  `${state?.transaction?.first_name} ${state?.transaction?.last_name}` : state?.student?.name,
          paidVia: state?.transaction?.system?.toLowerCase() === 'lipa na m-pesa' ? 'Lipa na M-Pesa' : 'M-Pesa',
          dop: moment(state?.transaction ? state?.transaction?.origination_time : state?.created_at).format("DD/MM/YYYY HH:mmA"),
          amount: formatCurrency(state?.amount),
        };
      });
    }

    return [];
  }
  return {
    query,
    isFetching: query.isFetching || query.isLoading,
    getStatement,
  };
}

export default useStatement
