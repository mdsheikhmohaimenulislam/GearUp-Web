import { getCategories } from "@/server/category.service";
import CategoryForm from "../_components/(categoris)/CategoryForm";
import CategoryTable from "../_components/(categoris)/CategoryTable";




export default async function CategoriesPage(){


const response =
await getCategories();



const categories =
response?.data?.categories || [];



return (

<div
className="
container
mx-auto
py-10
"
>


<h1
className="
text-3xl
font-bold
mb-6
"
>

Manage Categories

</h1>



<CategoryForm />



<CategoryTable

categories={categories}

/>



</div>


);


}