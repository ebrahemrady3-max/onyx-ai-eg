import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const dir = path.join(process.cwd(), 'apps', 'web', 'data');
    const file = path.join(dir, 'leads.json');

    await fs.mkdir(dir, { recursive: true });

    let leads: any[] = [];
    try {
      const existing = await fs.readFile(file, 'utf-8');
      leads = JSON.parse(existing);
    } catch {
      leads = [];
    }

    const newLead = {
      ...body,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };

    leads.push(newLead);
    await fs.writeFile(file, JSON.stringify(leads, null, 2), 'utf-8');

    return Response.json({
      success: true,
      message: 'تم تسجيل الطلب بنجاح',
      lead: newLead,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: 'فشل في حفظ الطلب',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
