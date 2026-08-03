"use client";


type Rental = {

  id:string;

  status:string;

  quantity:number;

  totalPrice:string | number;

  user?:{

    name:string;

    email:string;

  };


  gearItem?:{

    title:string;

  };

};



export default function RentalTable({

  rentals,

}:{

  rentals:Rental[];

}){


return (

<div

className="
border
rounded-xl
overflow-hidden
"

>


<table

className="
w-full
"

>


<thead

className="
bg-muted
"

>

<tr>


<th className="p-4 text-left">
Customer
</th>


<th className="p-4 text-left">
Gear
</th>


<th className="p-4 text-left">
Quantity
</th>


<th className="p-4 text-left">
Price
</th>


<th className="p-4 text-left">
Status
</th>


</tr>

</thead>





<tbody>


{
rentals.map((rental)=>(


<tr

key={rental.id}

className="
border-t
"

>


<td className="p-4">

<div>

<p className="font-medium">

{
rental.user?.name ||
"N/A"
}

</p>


<p className="text-sm text-muted-foreground">

{
rental.user?.email ||
""
}

</p>

</div>


</td>





<td className="p-4">

{
rental.gearItem?.title ||
"N/A"
}

</td>





<td className="p-4">

{
rental.quantity
}

</td>





<td className="p-4">

৳
{
Number(
rental.totalPrice
)
.toLocaleString()
}

</td>





<td className="p-4">


<span

className="
px-3
py-1
rounded-full
text-sm
border
"

>

{
rental.status
}

</span>


</td>



</tr>


))

}



</tbody>


</table>


</div>


);


}