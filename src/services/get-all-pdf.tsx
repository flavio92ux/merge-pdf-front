export async function getAllPdfs() {
  return await fetch('http://localhost:3001/pdfStorage')
}