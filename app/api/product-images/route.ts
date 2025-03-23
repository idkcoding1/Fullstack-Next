import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';


// GET - Fetch all product images
export async function GET() {
  try {
    const productImages = await prisma.productImage.findMany({
      include: { product: true },  // Optionally include associated product
    });
    return NextResponse.json(productImages);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

// POST - Create a new product image
export async function POST(request: Request) {
  const { url, productId, isMain } = await request.json();

  try {
    const newProductImage = await prisma.productImage.create({
      data: { url, productId, isMain },
    });
    return NextResponse.json(newProductImage, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

// PUT - Update an existing product image
export async function PUT(request: Request) {
  const { id, url, isMain } = await request.json();

  try {
    const updatedProductImage = await prisma.productImage.update({
      where: { id },
      data: { url, isMain },
    });
    return NextResponse.json(updatedProductImage);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

// DELETE - Delete a product image
export async function DELETE(request: Request) {
  const { id } = await request.json();

  try {
    await prisma.productImage.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Product image deleted successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
