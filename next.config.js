/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
   images: {
    // Habilita formatos modernos
    formats: ['image/avif', 'image/webp'],
    // Lista de anchos de dispositivo para los cuales optimizar las imágenes
    deviceSizes: [320, 390, 412, 414, 428, 430, 480, 640, 960, 1280, 1600, 1920, 2048],
    // Habilita el uso de SVG
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    // Deshabilita la carga de scripts (útil para evitar problemas de CSP)
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
