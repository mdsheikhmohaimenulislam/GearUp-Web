
import React from "react";


interface Props {

 title:string;

 value:string | number;

 icon:React.ReactNode;

}



export default function DashboardCard({
 title,
 value,
 icon,
}:Props){


return (

<div
className="
border
rounded-xl
p-5
bg-card
shadow-sm
hover:shadow-md
transition
"
>


<div className="flex justify-between items-center">


<div>

<p className="text-sm text-muted-foreground">
{title}
</p>


<h2 className="text-3xl font-bold mt-2">
{value}
</h2>


</div>



<div
className="
p-3
rounded-lg
bg-green-100
text-green-700
"
>

{icon}

</div>



</div>



</div>

);


}