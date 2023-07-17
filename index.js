Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent= `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.status === 'Declined' ? 
    'danger' : order.status === 'Pending' ? 'warning'
     : 'primary'}">${order.status}</td>
     <td class="primary">Details</td>
    `;
    tr.innerHTML= trContent;
    document.querySelector('table tbody').appendChild(tr);
})

$(function() {
    const sideMenu = $('aside');
    const menuBtn = $('#menu-btn');
    const closeBtn = $('#close-btn');

    const darkMode = $('.dark-mode');
  
    menuBtn.on('click', function() {
      sideMenu.css('display', 'block');
    });
  
    closeBtn.on('click', function() {
      sideMenu.css('display', 'none');
    });
  
    darkMode.on('click', function() {
      $('body').toggleClass('dark-mode-variables');
      darkMode.find('span:nth-child(1)').toggleClass('active');
      darkMode.find('span:nth-child(2)').toggleClass('active');
    });
  });
  
const popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}