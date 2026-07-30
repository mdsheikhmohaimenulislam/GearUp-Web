import { serverUrl } from "@/lib/serverUrl";
import { GearQuery } from "@/lib/types";


export const getGears = async (
  query: GearQuery = {}
) => {


  const params = new URLSearchParams();



  if(query.search){
    params.set("search", query.search);
  }


  if(query.brand){
    params.set("brand", query.brand);
  }


  if(query.slug){
    params.set("slug", query.slug);
  }


  if(query.minPrice){
    params.set(
      "minPrice",
      String(query.minPrice)
    );
  }


  if(query.maxPrice){
    params.set(
      "maxPrice",
      String(query.maxPrice)
    );
  }


  if(query.page){
    params.set(
      "page",
      String(query.page)
    );
  }


  if(query.sortBy){
    params.set(
      "sortBy",
      query.sortBy
    );
  }


  if(query.sortOrder){
    params.set(
      "sortOrder",
      query.sortOrder
    );
  }



  const res = await fetch(
    `${serverUrl}/api/gear?${params.toString()}`,
    {
      cache:"no-store"
    }
  );


  return res.json();

};

export const getSingleGear = async (id: string) => {
  const res = await fetch(`${serverUrl}/api/gear/${id}`, {
    cache: "no-store",
  });

  return res.json();
};

export const getCategories = async () => {
  const res = await fetch(`${serverUrl}/api/categories`, {
    cache: "no-store",
  });

  return res.json();
};
