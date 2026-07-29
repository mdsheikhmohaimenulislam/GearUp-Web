// "use client";

// import Link from "next/link";
// import { ArrowRight, ShoppingBag } from "lucide-react";
// import coverImage from "@/public/assets/cover.jpg";

// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import CountUp from "react-countup";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden">
//       <div className="container mx-auto grid min-h-[calc(100vh-64px)] items-center gap-10 px-4 py-16 md:grid-cols-2">
//         {/* Left Content */}
//         <div className="space-y-6">
//           <span className="inline-block dark:text-green-300 dark:bg-primary/50 dark:rounded-full  rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
//             🏕️ Rent Sports & Outdoor Gear Instantly
//           </span>

//           <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//             Gear Up For
//             <span className="block text-green-600">Every Adventure</span>
//           </h1>

//           <p className="max-w-xl text-muted-foreground text-base sm:text-lg">
//             Explore and rent premium sports equipment, camping gear, and outdoor
//             essentials without buying expensive equipment. Get the gear you
//             need, when you need it.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <Button asChild size="lg">
//               <Link href="/gear">
//                 Explore Gear
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>

//             <Button asChild variant="outline" size="lg">
//               <Link href="/rents">
//                 <ShoppingBag className="mr-2 h-5 w-5" />
//                 My Rentals
//               </Link>
//             </Button>
//           </div>

//           {/* Stats */}
//           {/* <div className="grid grid-cols-3 gap-5 pt-6">
//             <div>
//               <h3 className="text-2xl font-bold">500+</h3>
//               <p className="text-sm text-muted-foreground">Gear Items</p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold">50+</h3>
//               <p className="text-sm text-muted-foreground">Providers</p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold">24/7</h3>
//               <p className="text-sm text-muted-foreground">Support</p>
//             </div>
//           </div> */}

//           <div className="grid grid-cols-3 gap-5 pt-6">
//             <div className="text-center">
//               <h3 className="text-2xl font-bold text-primary dark:text-green-600">
//                 <CountUp
//                   end={500}
//                   duration={8}
//                   suffix="+"
//                   enableScrollSpy
//                   scrollSpyOnce
//                 />
//               </h3>
//               <p className="text-sm text-muted-foreground"> Gear Items </p>{" "}
//             </div>
//             <div className="text-center">
//               <h3 className="text-2xl font-bold text-primary dark:text-green-600">
//                 <CountUp
//                   end={50}
//                   duration={8}
//                   suffix="+"
//                   enableScrollSpy
//                   scrollSpyOnce
//                 />
//               </h3>
//               <p className="text-sm text-muted-foreground"> Providers </p>{" "}
//             </div>
//             <div className="text-center">
//               <h3 className="text-2xl font-bold text-primary dark:text-green-600">
//                 <CountUp
//                   end={24}
//                   duration={8}
//                   suffix="/7"
//                   enableScrollSpy
//                   scrollSpyOnce
//                 />
//               </h3>
//               <p className="text-sm text-muted-foreground"> Support </p>{" "}
//             </div>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="relative">
//           <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl bg-muted">
//             <Image
//               src={coverImage}
//               alt="Outdoor adventure gear"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* Floating Card */}

//           <div className="absolute bottom-5 left-5 rounded-xl border bg-background/90 p-4 shadow-lg backdrop-blur">
//             <p className="text-sm text-muted-foreground dark:text-green-600">Available Today</p>

//             <h3 className="text-xl font-bold">100+ Gear Ready</h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
