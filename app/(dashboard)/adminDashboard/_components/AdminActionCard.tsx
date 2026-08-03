
import {
  Users,
  Package,
  ShoppingCart,
  CreditCard,
} from "lucide-react";


const iconMap = {
  users: Users,
  package: Package,
  shoppingCart: ShoppingCart,
  creditCard: CreditCard,
};


type Props = {
  title: string;
  description: string;
  href: string;
  icon: keyof typeof iconMap;
};


export default function AdminActionCard({
  title,
  description,
  href,
  icon,
}: Props) {


  const Icon = iconMap[icon];


  return (

    <a
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

        <Icon size={22}/>

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


    </a>

  );
}