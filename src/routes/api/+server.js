import { json } from '@sveltejs/kit';

export async function GET({ url }) {
  return json({
    beskjed: "hallis!",
    adresse: url
  })
}