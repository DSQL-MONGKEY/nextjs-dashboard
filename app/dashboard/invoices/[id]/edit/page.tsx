import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';

interface Params {
   params: {
      id: string
   }
}


export default async function Page({ params }:Params ) {
   const id = params.id;
   const [invoice, customers] = await Promise.all([
      fetchInvoiceById(id),
      fetchCustomers()
   ]) 

   
   return(
      <main>
         <Breadcrumbs
            breadcrumbs={[
               {
                  label: 'Invoices',
                  href: '/dashboard/invoices'
               },
               {
                  label: 'Edit Invoices',
                  href: `/dashboard/invoices/${id}/edit`,
                  active: true,
               }
            ]}
         />
         <Form invoice={invoice} customers={customers} />
      </main>
   )
}
