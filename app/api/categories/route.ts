import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
// Import Prisma Client

// GET - Fetch all categories
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: { products: true },  // Optionally include products in the response
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

// POST - Create a new category
export async function POST(request: Request) {
  const { name, imageUrl } = await request.json();

  try {
    const newCategory = await prisma.category.create({
      data: { name, imageUrl },
    });
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

// PUT - Update an existing category
export async function PUT(request: Request) {
  const { id, name, imageUrl } = await request.json();

  try {
    const updatedCategory = await prisma.category.update({
      where: { id },
      data: { name, imageUrl },
    });
    return NextResponse.json(updatedCategory);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

// DELETE - Delete a category
export async function DELETE(request: Request) {
  const { id } = await request.json();

  try {
    await prisma.category.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
