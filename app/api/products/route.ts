import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

// GET - Fetch all products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: { category: true, images: true },  // Include category and images
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

// POST - Create a new product
export async function POST(request: Request) {
  const { name, description, price, stock, categoryId, images } = await request.json();

  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        stock,
        categoryId,
        images: {
          create: images,  // Assuming you are creating product images in the same request
        },
      },
    });
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

// PUT - Update an existing product
export async function PUT(request: Request) {
  const { id, name, description, price, stock, categoryId } = await request.json();

  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: { name, description, price, stock, categoryId },
    });
    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

// DELETE - Delete a product
export async function DELETE(request: Request) {
  const { id } = await request.json();

  try {
    await prisma.product.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
