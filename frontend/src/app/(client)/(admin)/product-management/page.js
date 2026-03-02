import Link from "next/link"

const productManagementPage = () => {
  return (
    <div className="pt-10">
      <Link className="border bg-primary p-4 rounded-lg w-max" href={"/product-management/add"}>Add New Product</Link>
    </div>
  )
}

export default productManagementPage