export async function uploadFiles(name: string, files: File[]): Promise<boolean> {
  const formData = new FormData();

  // Adiciona o nome ao FormData
  formData.append('name', name);

  // Adiciona os arquivos ao FormData
  files.forEach((file) => formData.append('files', file));

  try {
    const response = await fetch('http://localhost:3001/pdf/merge', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar arquivos: ${response.statusText}`);
    }

    console.log('Arquivos enviados com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro durante o upload:', error);
    return false;
  }
}
