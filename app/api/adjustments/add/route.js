import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST (request){
    try {
    const {addStockQty, itemId ,recievingWarehouseId , notes, referenceNumber }=await request.json();
    
    
    const adjustment = await db.AddStockAdjustment.create({
        data: {
            addStockQty:parseInt(addStockQty) ,
            recievingWarehouseId , 
            notes,
            referenceNumber,
            itemId 
        },
    });
    console.log(adjustment)
    return NextResponse.json(adjustment)

}catch (error) {
    console.log(error)
    return NextResponse.json({
        error,
        message: "Failed to create adjustment"
    },{
        status: 500

    })
}
}



export async function GET(request){
    try {
       const adjustment = await db.AddStockAdjustment.findMany({
        orderBy: {
            createdAt: 'desc',
        },
       });
       return NextResponse.json(adjustment)
    } catch (error) {
        console.log(error)
    return NextResponse.json({
        error,
        message: "Failed to fetch an adjustment"
    },{
        status: 500

    })
    }
}