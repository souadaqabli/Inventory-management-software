import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST (request){
    try {
    const itemData =await request.json();
   
    
    console.log(itemData)
    const item = await db.item.create({
        data:{
            title:itemData.title, 
            categoryId: itemData.categoryId ,
            sku :itemData.Sku,
            barcode :itemData.Barcode, 
            quantity:parseInt(itemData.Quantity) , 
            unitId:itemData.UnitId , 
            brandId:itemData.BrandId, 
            supplierId :itemData.supplierId ,
            reorderPoint :parseInt(itemData.reorderpoint) ,
            buyingPrice :parseFloat(itemData.buyingprice), 
            sellingPrice:parseFloat(itemData.sellingprice), 
            warehouseId :itemData.warehouseId, 
            weight:parseFloat(itemData.weight) , 
            dimensions :itemData.dimensions, 
            taxRate :parseFloat(itemData.taxRate), 
            description:itemData.description, 
            notes :itemData.notes, 
            imageUrl :itemData.imageUrl
        }
    })
    return NextResponse.json(item)

}catch (error) {
    console.log(error)
    return NextResponse.json({
        error,
        message: "Failed to create a Item"
    },{
        status: 500

    })
}
}


export async function GET(request){
    try {
       const item = await db.item.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        include:{
            category:true,
            
        }
       });
       return NextResponse.json(item)
    } catch (error) {
        console.log(error)
    return NextResponse.json({
        error,
        message: "Failed to fetch an item"
    },{
        status: 500

    })
    }
}