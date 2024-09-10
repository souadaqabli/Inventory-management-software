import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST (request){
    try {
    const {title, phone, email, address, contactPerson, notes, paymentTerms, supplierCode, taxID}=await request.json();
   
   
    const supplier = await db.supplier.create({
        data: {
            title, 
            phone, 
            email, 
            adresse:address, 
            contactPerson, 
            notes, 
            paymentTerms, 
            supplierCode, 
            taxID
            
        },
    });
    console.log(supplier)
    return NextResponse.json(supplier)

}catch (error) {
    console.log(error)
    return NextResponse.json({
        error,
        message: "Failed to create a supplier"
    },{
        status: 500

    })
}
}




export async function GET(request){
    try {
       const supplier = await db.supplier.findMany({
        orderBy: {
            createdAt: 'desc',
        },
       });
       return NextResponse.json(supplier)
    } catch (error) {
        console.log(error)
    return NextResponse.json({
        error,
        message: "Failed to fetch a supplier"
    },{
        status: 500

    })
    }
}