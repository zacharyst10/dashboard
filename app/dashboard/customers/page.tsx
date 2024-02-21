import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

export default async function CustomerPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) {
  const customers = await fetchFilteredCustomers(searchParams?.query || '');
  return (
    <div>
      <CustomersTable customers={customers} />
    </div>
  );
}
