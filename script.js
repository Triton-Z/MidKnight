const canvas = (w, l) =>
{
  for (let y = 0; y < l; y++)
  {
    for (let x = 0; x < w; x++)
    {
      const span = document.createElement("span");
      span.innerHTML = "E";
      span.id = `${x} ${y}`;
      document.body.appendChild(span);
    }
    const br = document.createElement("br");
    document.body.appendChild(br);
  }
}

window.onload = canvas(200, 200);
