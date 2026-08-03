


import Link from "next/link";

import type { LucideIcon } from "lucide-react";


type Props = {

  title:string;

  description:string;

  href:string;

  icon:LucideIcon;

};



export default function AdminActionCard({

  title,

  description,

  href,

  icon:Icon,

}:Props){


return (

<Link

href={href}

className="
flex
items-center
gap-4
border
rounded-xl
p-4
hover:bg-muted
transition
"

>


<div

className="
p-3
rounded-lg
bg-green-100
text-green-700
"

>

<Icon

className="
w-5
h-5
"

/>

</div>



<div>

<h3

className="
font-semibold
"

>
{title}
</h3>


<p

className="
text-sm
text-muted-foreground
"

>
{description}
</p>


</div>


</Link>

);


}