export async function onRequest(context) {
  const allowedIP = '85.50.8.64'; // Cambia esta IP por la que quieras permitir
  const clientIP = context.request.headers.get('CF-Connecting-IP'); // Obtenemos la IP del visitante

  if (clientIP !== allowedIP) {
    return new Response('Acceso denegado. Tu IP no tiene permiso para acceder a este sitio.', { status: 403 });
  }

  // Si la IP es permitida, continúa con la respuesta normal
  return fetch(context.request);
}
