// import {
//   Tent,
//   Bike,
//   Mountain,
//   Dumbbell,
//   Camera,
//   Waves,
// } from "lucide-react";


// const categories = [
//   {
//     icon: Tent,
//     title: "Camping",
//     description: "Tents, sleeping bags and outdoor essentials",
//   },
//   {
//     icon: Bike,
//     title: "Cycling",
//     description: "Mountain bikes and cycling accessories",
//   },
//   {
//     icon: Mountain,
//     title: "Hiking",
//     description: "Hiking gear for your adventure",
//   },
//   {
//     icon: Dumbbell,
//     title: "Sports",
//     description: "Sports equipment for every game",
//   },
//   {
//     icon: Camera,
//     title: "Photography",
//     description: "Camera and photography equipment",
//   },
//   {
//     icon: Waves,
//     title: "Water Sports",
//     description: "Kayaks and water adventure gear",
//   },
// ];


// export default function CategorySection() {
//   return (
//     <section className="container mx-auto px-5 py-16">

//       <div className="text-center mb-10">

//         <h2 className="text-3xl font-bold">
//           Explore Categories
//         </h2>

//         <p className="text-muted-foreground mt-2">
//           Find the perfect gear for your next adventure
//         </p>

//       </div>


//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

//         {categories.map((item)=>{

//           const Icon = item.icon;

//           return (
//             <div
//               key={item.title}
//               className="
//                 border
//                 rounded-xl
//                 p-6
//                 hover:shadow-lg
//                 transition
//               "
//             >

//               <Icon
//                 size={35}
//                 className="text-green-700"
//               />


//               <h3 className="text-xl font-semibold mt-4">
//                 {item.title}
//               </h3>


//               <p className="text-sm text-muted-foreground mt-2">
//                 {item.description}
//               </p>


//             </div>
//           );

//         })}

//       </div>

//     </section>
//   );
// }