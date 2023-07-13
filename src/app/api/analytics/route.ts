import { NextResponse } from 'next/server'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

 
export async function POST() {
  const data = { 'foo': 'bar'}
  await sleep(3000)
  return NextResponse.json(data)
}