
import Restaurant from "@/app/models/Restaurant";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        const { id } = params;
        await Restaurant.findByIdAndDelete(id);

        return NextResponse.json({ message: "Restaurant deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}