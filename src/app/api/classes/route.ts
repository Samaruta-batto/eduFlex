import { NextResponse } from 'next/server';

const mockClasses = [
  { id: 1, name: 'Class IA' },
  { id: 2, name: 'Class IB' },
  { id: 3, name: 'Class IIA' },
  { id: 4, name: 'Class IIB' },
];

export async function GET(request: Request) {
  return NextResponse.json(mockClasses);
}
