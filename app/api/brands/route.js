import { NextResponse } from "next/server";
import db from '@/lib/db';

export async function POST (request){
    try {
    const {title}=await request.json();
   
    const brand = await db.brand.create({
        data: {
            title
        },
    });
    console.log(brand)
    return NextResponse.json(brand)

}catch (error) {
    console.log(error)
    return NextResponse.json({
        error,
        message: "Failed to create a brand"
    },{
        status: 500

    })
}
}





export async function GET(request){
    try {
       const brand = await db.brand.findMany({
        orderBy: {
            createdAt: 'desc',
        },
       });
       return NextResponse.json(brand)
    } catch (error) {
        console.log(error)
    return NextResponse.json({
        error,
        message: "Failed to fetch a brand"
    },{
        status: 500

    })
    }
}