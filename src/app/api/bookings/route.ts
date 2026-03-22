import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'bookings.json');

async function initDataFile() {
  try {
    await fs.mkdir(path.join(process.cwd(), 'data'), { recursive: true });
    try {
      await fs.access(dataFilePath);
    } catch {
      await fs.writeFile(dataFilePath, JSON.stringify([]));
    }
  } catch (error) {
    console.error('Error initializing data file:', error);
  }
}

export async function GET() {
  await initDataFile();
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json({ error: 'Failed to read bookings' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await initDataFile();
  try {
    const body = await request.json();
    const data = await fs.readFile(dataFilePath, 'utf8');
    const bookings = JSON.parse(data);
    
    const newBooking = {
      id: Date.now().toString(),
      ...body,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    bookings.push(newBooking);
    await fs.writeFile(dataFilePath, JSON.stringify(bookings, null, 2));
    
    return NextResponse.json({ success: true, booking: newBooking });
  } catch {
    return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  await initDataFile();
  try {
    const { id, status } = await request.json();
    const data = await fs.readFile(dataFilePath, 'utf8');
    const bookings = JSON.parse(data);
    
    const index = bookings.findIndex((b: { id: string }) => b.id === id);
    if (index !== -1) {
      bookings[index].status = status;
      await fs.writeFile(dataFilePath, JSON.stringify(bookings, null, 2));
      return NextResponse.json({ success: true, booking: bookings[index] });
    }
    
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
  } catch {
    return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 });
  }
}
