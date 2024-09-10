import { NextResponse } from "next/server";


export async function POST (request){
    try {
    const {TransferStockQty, recievingBranchId , notes }=await request.json();
   
    const adjustments ={TransferStockQty, recievingBranchId , notes};
    console.log(adjustments)
    return NextResponse.json(adjustments)

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