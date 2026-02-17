import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración de optimización
const QUALITY = 85; // Calidad JPEG (85% es buen balance)
const MAX_WIDTH = 1200; // Ancho máximo para productos
const MAX_HEIGHT = 900; // Alto máximo para productos

const inputDir = join(__dirname, 'temp-images'); // Carpeta temporal con las imágenes originales
const outputDir = join(__dirname, 'src', 'assets');

async function optimizeImages() {
  try {
    console.log('🖼️  Iniciando optimización de imágenes...\n');

    // Leer archivos de la carpeta de entrada
    const files = await readdir(inputDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    if (imageFiles.length === 0) {
      console.log('⚠️  No se encontraron imágenes en:', inputDir);
      console.log('Por favor, coloca las 5 imágenes en la carpeta temp-images/');
      return;
    }

    console.log(`📁 Encontradas ${imageFiles.length} imágenes\n`);

    // Procesar cada imagen
    for (const file of imageFiles) {
      const inputPath = join(inputDir, file);
      const outputPath = join(outputDir, file.replace(/\.png$/i, '.jpeg'));

      console.log(`⚙️  Procesando: ${file}`);

      // Obtener metadata de la imagen original
      const metadata = await sharp(inputPath).metadata();
      console.log(`   📏 Original: ${metadata.width}x${metadata.height} - ${(metadata.size / 1024).toFixed(2)} KB`);

      // Optimizar imagen
      await sharp(inputPath)
        .resize(MAX_WIDTH, MAX_HEIGHT, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({
          quality: QUALITY,
          progressive: true,
          mozjpeg: true
        })
        .toFile(outputPath);

      // Obtener metadata de la imagen optimizada
      const optimizedMetadata = await sharp(outputPath).metadata();
      console.log(`   ✅ Optimizada: ${optimizedMetadata.width}x${optimizedMetadata.height} - ${(optimizedMetadata.size / 1024).toFixed(2)} KB`);
      
      const savings = ((1 - optimizedMetadata.size / metadata.size) * 100).toFixed(1);
      console.log(`   💾 Ahorro: ${savings}%\n`);
    }

    console.log('✨ Optimización completada!\n');
    console.log('📝 Próximos pasos:');
    console.log('   1. Renombra las imágenes según el producto:');
    console.log('      - Piedra 19/38 → 19-38.jpeg');
    console.log('      - Piedra 6/19 → 6-19.jpeg');
    console.log('      - Piedra 3/4 → 3-4.jpeg');
    console.log('      - Base 0/38 → 0-38.jpeg');
    console.log('      - Arena 0/6 → 0-6.jpeg');

  } catch (error) {
    console.error('❌ Error:', error.message);
    
    if (error.code === 'ENOENT') {
      console.log('\n💡 Tip: Crea la carpeta "temp-images" y coloca ahí las imágenes originales');
    }
  }
}

optimizeImages();
