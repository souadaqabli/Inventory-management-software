import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST (request){
    try {
    const {transferStockQty, givingWarehouseId , recievingWarehouseId , notes, itemId, referenceNumber }=await request.json();
   
    const adjustment = await db.TransferStockAdjustment.create({
        data: {
            transferStockQty: parseInt(transferStockQty), 
            givingWarehouseId , 
            recievingWarehouseId , 
            notes,
            itemId,
            referenceNumber
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
       const adjustment = await db.TransferStockAdjustment.findMany({
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