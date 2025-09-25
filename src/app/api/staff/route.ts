import { NextResponse } from 'next/server';

interface Staff {
  id: number;
  name: string;
  email: string;
  roleId: number;
  roleName?: string; // Optional for easier display in UI
}

let mockStaff: Staff[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', roleId: 1, roleName: 'Teacher' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', roleId: 2, roleName: 'Management' },
];

const mockStaffRoles = [
  { id: 1, name: 'Teacher' },
  { id: 2, name: 'Management' },
  { id: 3, name: 'Admin' },
];

export async function GET(request: Request) {
  const staffWithRoles = mockStaff.map(s => ({
    ...s,
    roleName: mockStaffRoles.find(r => r.id === s.roleId)?.name
  }));
  return NextResponse.json(staffWithRoles);
}

export async function POST(request: Request) {
  const { name, email, roleId } = await request.json();

  const newStaff: Staff = {
    id: mockStaff.length > 0 ? Math.max(...mockStaff.map(s => s.id)) + 1 : 1,
    name,
    email,
    roleId,
    roleName: mockStaffRoles.find(r => r.id === roleId)?.name,
  };
  mockStaff.push(newStaff);

  return NextResponse.json(newStaff, { status: 201 });
}
