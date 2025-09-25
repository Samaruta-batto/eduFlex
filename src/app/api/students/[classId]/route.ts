import { NextResponse } from 'next/server';

interface Student {
  id: number;
  name: string;
  classId: number;
}

let mockStudents: Student[] = [
  { id: 1, name: 'Alice Smith', classId: 1 },
  { id: 2, name: 'Bob Johnson', classId: 1 },
  { id: 3, name: 'Charlie Brown', classId: 2 },
];

export async function GET(
  request: Request,
  { params }: { params: { classId: string } }
) {
  const classId = parseInt(params.classId);
  const studentsInClass = mockStudents.filter(student => student.classId === classId);
  return NextResponse.json(studentsInClass);
}

export async function POST(
  request: Request,
  { params }: { params: { classId: string } }
) {
  const classId = parseInt(params.classId);
  const { name } = await request.json();

  const newStudent: Student = {
    id: mockStudents.length > 0 ? Math.max(...mockStudents.map(s => s.id)) + 1 : 1,
    name,
    classId,
  };
  mockStudents.push(newStudent);

  return NextResponse.json(newStudent, { status: 201 });
}
