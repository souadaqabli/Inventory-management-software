import Newbrand from "../../new/page";
import { getData } from "@/lib/getData";

export  default  async function  update ({params:{id}}) {
  const data = await getData(`brands/${id}/`);
  return <Newbrand initialData={data} isUpdate={true}/>;
  
}