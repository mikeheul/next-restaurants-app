import Restaurant from "@/app/models/Restaurant";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // get all tickets order by createdAt ASC
        const restaurants = (await Restaurant.find().sort({ nom: 1 }));
        // const restaurants = (await Restaurant.find({ ville: 'Paris' }).sort({ nom: 1 }));
        return NextResponse.json({ restaurants }, { status: 200})
    } catch (error) {
        return NextResponse.json({message: "Error", error}, { status: 500})
    }
}