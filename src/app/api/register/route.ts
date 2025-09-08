import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';

// Define the registration data type
type RegistrationData = {
  eventId: string;
  eventTitle: string;
  fullName: string;
  email: string;
  yearBranch: string;
  contactNumber: string;
  whatsappJoined: boolean;
  timestamp: string;
};

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data: RegistrationData = await request.json();
    
    // Validate required fields
    if (!data.eventId || !data.eventTitle || !data.fullName || !data.email || 
        !data.yearBranch || !data.contactNumber) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create a sanitized filename from the event title
    const sanitizedFilename = data.eventTitle
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    // Define the Excel file path
    const uploadsDir = path.join(process.cwd(), 'registrations');
    const filePath = path.join(uploadsDir, `${sanitizedFilename}.xlsx`);
    
    // Create the directory if it doesn't exist
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    
    // Create a new workbook or open existing one
    const workbook = new ExcelJS.Workbook();
    let worksheet;
    
    // Check if file exists
    if (fs.existsSync(filePath)) {
      // Open existing file
      await workbook.xlsx.readFile(filePath);
      worksheet = workbook.getWorksheet('Registrations');
    } else {
      // Create new file with headers
      worksheet = workbook.addWorksheet('Registrations');
      worksheet.columns = [
        { header: 'Name', key: 'name', width: 30 },
        { header: 'Email', key: 'email', width: 30 },
        { header: 'Year/Branch', key: 'yearBranch', width: 20 },
        { header: 'Contact Number', key: 'contactNumber', width: 15 },
        { header: 'WhatsApp Joined', key: 'whatsappJoined', width: 15 },
        { header: 'Timestamp', key: 'timestamp', width: 25 }
      ];
    }
    
    // Add the new registration data
    worksheet.addRow({
      name: data.fullName,
      email: data.email,
      yearBranch: data.yearBranch,
      contactNumber: data.contactNumber,
      whatsappJoined: data.whatsappJoined ? 'Yes' : 'No',
      timestamp: new Date(data.timestamp).toLocaleString()
    });
    
    // Save the workbook
    await workbook.xlsx.writeFile(filePath);
    
    return NextResponse.json(
      { success: true, message: 'Registration successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing registration:', error);
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    );
  }
}