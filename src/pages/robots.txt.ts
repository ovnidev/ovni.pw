import type { APIRoute } from 'astro';

const robotsTxt = `
# OVNI.pw robots.txt file
# If you are reading this, I have a message for you:
# https://www.youtube.com/watch?v=dQw4w9WgXcQ

User-agent: *

Allow: /
`.trim();

export const GET: APIRoute = () => {
    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};