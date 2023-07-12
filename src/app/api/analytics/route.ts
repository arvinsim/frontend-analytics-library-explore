import { NextResponse } from 'next/server'
 
export async function POST() {
  const data = { 'foo': 'bar'}
 
  return NextResponse.json(data)
}