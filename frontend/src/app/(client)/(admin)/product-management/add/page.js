import ProductForm from "@/components/admin/products/ProductForm/page";

const addProductPage = () => {

  return (
    <section className="w-max mx-auto">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
        <ProductForm />
      </div>
    </section>
  )
}

export default addProductPage