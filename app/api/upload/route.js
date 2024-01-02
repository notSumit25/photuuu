import connectMongoDB from "@/lib/mongodb";
import Images from "@/models/image";
import { NextResponse } from "next/server";

export async function POST(req){
    const { url } = await req.json();
    await connectMongoDB();
    const data = await Images.create({ url})
    return NextResponse.json({ msg: "Image created successfully"}, { data });
}

export async function GET(req){
    await connectMongoDB();
    const images = await Images.find()
    return NextResponse.json({ images})
}