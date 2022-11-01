
                    // // select item by id name.

// const title=document.getElementById('main-heading');
// console.log(title);

                    // // select item by class name.

// const title2=document.getElementsByClassName('list-item');
// console.log(title2);

                     // // select item by tag.

// const title3=document.getElementsByTagName('li');
// console.log(title3);

                    // // select item by query selector.
      // // It always select the first item in the given criteria.


// const container=document.querySelector('div');
// console.log(container);

// const title=document.querySelector('#main-heading');
// title.style.color="red";
// console.log(title);

// const listItems=document.querySelectorAll('.list-item');
// for(i=0;i<listItems.length;i++){
//     listItems[i].style.fontSize="1rem";
// }
// console.log(listItems);

                   // Creating the element.


// const ul = document.querySelector('ul');
// const li = document.createElement('li');

                    // Adding elements.

// ul.prepend(li);

                    // Modifying the text.

// const firstListItem=document.querySelector('.list-item');
// console.log(firstListItem.innerText);
// console.log(firstListItem.innerContent);
// console.log(firstListItem.innerHTML);

// li.innerText = 'X-Men';

                    // Modifying attributes & classes

// li.setAttribute('id','main-heading');
// li.removeAttribute('id');

// const title=document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

// li.classList.remove('list-items');
// li.classList.toggle('list-items');
// console.log(li.classList.contains('list-items'));

                        // Remove elements

// li.remove();

                        // Parent Node Traversaal

// let ul=document.querySelector('body');
// console.log(ul.parentNode.parentNode);  //also check the type
// console.log(ul.parentElement.parentElement) ;//don't check the type.

                        // Child Node Traversal

//  let ul=document.querySelector('ul');
//  console.log(ul.childNodes);
//  console.log(ul.childElementCount)
//  console.log(ul.firstChild);    
//  console.log(ul.children);    
//  console.log(ul.firstElementChild);    
//  console.log(ul.lastElementChild);    
//  ul.childNodes[1].style.backgroundColor="blue"; 
               
                        // Siblings Node Traversel
 
//   let ul=document.querySelector('ul');  
//   const div=document.querySelector('div');
  
//   console.log(div.childNodes);
//   console.log(ul.previousSibling);
//   console.log(ul.previousElementSibling);
//   console.log(ul.nextSibling);
//   console.log(ul.nextElementSibling);
const buttonTwo=document.querySelector('.main');
console.log(buttonTwo)
function alertBtn(){
    // alert('I also Love JAvascript');
    buttonTwo.style.backgroundColor="blue";

}
function alertBt(){
    // alert('I also Love JAvascript');
    buttonTwo.style.backgroundColor="white";

}
buttonTwo.addEventListener("mouseover",alertBtn);
buttonTwo.addEventListener("mouseout",alertBt);
