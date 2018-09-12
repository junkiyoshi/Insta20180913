#version 150

uniform float time;
uniform vec2 resolution;

out vec4 outputColor;

void main() {

  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

  float r = 0.03 / abs(0.5 - length(p)) * abs(sin(p.x + p.y + time));
  float g = 0.03 / abs(0.5 - length(p)) * abs(sin(p.x + p.y + time * 0.5) * cos(p.x + p.y + time * 0.5));
  float b = 0.03 / abs(0.5 - length(p)) * abs(cos(p.x + p.y + time));
  vec3 color = vec3(r, g, b);

  outputColor = vec4(color, 1.0);
}
