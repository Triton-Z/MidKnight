const canvas = (w, l) =>
{
  for (let i = 0; i < l; i++)
  {
    for (let j = 0; j < w; j++)
    {
      const span = document.createElement("span");
      span.innerHTML = "E";
      document.body.appendChild(span);
    }
    const br = document.createElement("br");
    document.body.appendChild(br);
  }
}

window.onload = canvas(200, 200);
