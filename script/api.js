const phoenLoade = async (inputText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`);
     const data = await res.json();
     const phones =data.data;
    //  console.log(phones)
    displayPhones(phones)
    
}

const displayPhones = phones =>{
    const phonsContainer = document.getElementById('card-container');
    // scarce old phone clear and new scarce phone show it 
    phonsContainer.textContent = ' ';

    // 1. forEach 
   phones.forEach(phone => {
    // console.log(phone)
    // 2.create a div 

    const phonCard = document.createElement('div');
    phonCard.classList = `card p-4 bg-white shadow-xl`;
    // 3.innerHTML set 
    phonCard.innerHTML =`
    <figure><img src="${phone.image}" alt="" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end text-center">
        <button onclick="showHandleDetails('${phone.slug}') 
        my_details.showModal()" class="btn btn-primary ">Show detail</button>
      </div>
    </div>
    `;
    // 4. append chaild 
    phonsContainer.appendChild(phonCard)


   })
}

// show detalie btn 
const showHandleDetails =  async (id) =>{
  // console.log('show details',id)
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  console.log(data);
 const phone = data.data;
  showPhoneDetails(phone);
}

// show phone details 
const showPhoneDetails = (phone) => {
  const phoneName = document.getElementById('set-phone-name');
  phoneName.innerText = phone.name;
  const showDetailsContainer = document.getElementById('show-detail-container');
  showDetailsContainer.innerHTML= `
<img src="${phone.image}" alt="">
<p><span>storage:</span>${phone.mainFeatures.storage}</p>
<p><span>chipSet:</span>${phone.mainFeatures.chipSet}</p>
<p><span>display size:</span>${phone.mainFeatures.displaySize}</p>
<p><span>Brand :</span>${phone.brand}</p>

  
  `

  my_details.showModal(phone)
}

// scerce 
const scarcehanglar = () =>{
    const inputfllid = document.getElementById('input-filde');
    const inputText = inputfllid.value;
    console.log(inputText);
    phoenLoade(inputText);

}

phoenLoade();