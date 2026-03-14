
// import { getOrderById } from "@/apis/order.api";
import Form from "@/components/admin/orders/Form";

const updateOrderPage = async ({ params }) => {
  const id = (await params).id;
  // const order = await getOrderById(id);

  return (
    <section className="w-max mx-auto">
      <div className="py-2 px-4 mx-auto max-w-2xl lg:py-4">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update order</h2>
        {/* <Form  order={order?.result}/> */}
        <Form id={id}/>
      </div>
    </section>
  )
}

export default updateOrderPage