export default function test(callback) {
  const ul = document.createElement('ul');
  document.body.appendChild(ul);

  function addTest(title, result) {
    var li = document.createElement('li');

    var h2 = document.createElement('h2');
    h2.innerHTML = title;
    li.appendChild(h2);

    var p = document.createElement('p');
    p.innerHTML = result;
    li.appendChild(p);

    ul.appendChild(li);
  }

  window.onload = () => callback(addTest);
}
