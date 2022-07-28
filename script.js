function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('submitComment').addEventListener('click', (event) => {
  let element_list1 = document.getElementById('list1');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('text').value);

  element_list1.appendChild(new_li);

});
var current, array;


array = [
  'https://images.unsplash.com/photo-1606907568258-d095a110889a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1525160354320-d8e92641c563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1590506995460-d0d9892b54da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1571646078462-3a00bdd5eb73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1506424482693-1f123321fa53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',  'https://media.istockphoto.com/photos/helmet-fallen-on-the-street-road-accidents-picture-id1291394614?b=1&k=20&m=1291394614&s=170667a&w=0&h=nQjBB5xAvvjpviQAV_r8nu8OTbjx5s0aL2_z4cHJdWw='];
let element_image = document.getElementById('image');
element_image.setAttribute("src", array.shift());


document.getElementById('button').addEventListener('click', (event) => {
  current = array.pop();
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", current);
  array.unshift(current);

});

document.getElementById('button2').addEventListener('click', (event) => {
  current = array.shift();
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", current);
  array.push(current);

});
/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/