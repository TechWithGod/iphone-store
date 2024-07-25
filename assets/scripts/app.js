const firstRow = document.getElementById('row-first');
const secondRow = document.getElementById('row-second');
const themeBtn = document.querySelector('.theme-btn');
const aboutUs = document.getElementById('about-us');
const contactUs = document.getElementById('contact-us');
themeBtn.addEventListener('click', ()=> {
   
        themeBtn.classList.toggle('btn-translate');
        document.body.classList.toggle('theme-class');
        aboutUs.classList.toggle('dark-theme-border');
        contactUs.classList.toggle('dark-theme-border');
});
const productNames = [
    'Iphone 13',
    'Iphone 14',
    'Iphone 15',
    'Iphone 15 Pro',
    'Iphone SE',
    'Iphone 13 Pro',
    'Iphone 14 Pro',
    'Iphone 15 Plus',
    'Iphone SE Plus'
]
const productItem = document.createElement('div');
productItem.className = 'product-item';

for ( let i=0; i<5; i++ ) {
    const productItem = document.createElement('div');
productItem.className = 'product-item';
    productItem.innerHTML = `
    <div class='product-img' style="background-image: url('./assets/images/${1}.png');"></div>
    <div class='product-title'>${productNames[i]}</div>
    <div class='view-details btn'>View Details</div>
    `;
    firstRow.appendChild(productItem);
}
for ( let j=5; j<9; j++ ) {
    const productItem = document.createElement('div');
productItem.className = 'product-item';
    productItem.innerHTML = `
    <div class='product-img' style="background-image: url('./assets/images/${1}.png');"></div>
    <div class='product-title'>${productNames[j]}</div>
    <div class='view-details btn'>View Details</div>
    `;
    secondRow.appendChild(productItem);
}


