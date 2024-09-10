import { NextResponse } from "next/server";
import db from '@/lib/db';

export async function GET(request, {params:{id}}){
    try {
       const brand = await db.brand.findUnique({
        where: {
            id
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


export async function PUT(request, {params:{id}}){
    try {
    const {title} = await request.json()
       const brand = await db.brand.update({
        where: {
            id
        },
        data: {
            title
        },
       });
       console.log(brand)
       return NextResponse.json(brand)
    } catch (error) {
        console.log(error)
    return NextResponse.json({
        error,
        message: "Failed to update the brand"
    },{
        status: 500

    })
    }
}