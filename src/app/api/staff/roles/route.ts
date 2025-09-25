import { NextResponse } from 'next/server';

interface StaffRole {
  id: number;
  name: string;
}

let mockStaffRoles: StaffRole[] = [
  { id: 1, name: 'Teacher' },
  { id: 2, name: 'Management' },
  { id: 3, name: 'Admin' },
];

export async function GET(request: Request) {
  return NextResponse.json(mockStaffRoles);
}

export async function POST(request: Request) {
  const { name } = await request.json();

  const newRole: StaffRole = {
    id: mockStaffRoles.length > 0 ? Math.max(...mockStaffRoles.map(r => r.id)) + 1 : 1,
    name,
  };
  mockStaffRoles.push(newRole);

  return NextResponse.json(newRole, { status: 201 });
}
