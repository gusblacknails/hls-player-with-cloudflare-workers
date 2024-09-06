export default {
  async fetch(request, env, ctx) {
    const allowedIP = '85.50.8.64'; // Cambia esta IP por la que quieras permitir
    const clientIP = request.headers.get('CF-Connecting-IP') || '127.0.0.1'; // Simulamos IP localmente si no está disponible

    console.log(`IP del visitante: ${clientIP}`);

    if (clientIP !== allowedIP) {
      return new Response('Acceso denegado. Tu IP no tiene permiso para acceder a este sitio.', { status: 403 });
    }

    return new Response('Acceso permitido', { status: 200 });
  }
};
