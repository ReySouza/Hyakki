const data = {
      attribute: [
      {
        name:'abcd',
        cost:3,
        description:'jdfs9f9ees',
     },
   ],
      expertise: [
       {
         name:'abcd',
         cost:5,
         description:'abcdefghijklmnopqrstuvwxyz',
       },
    ],
   }

data.attribute.map((attribute, index) => {
   addAttributeToTable(attribute, index)
})

data.expertise.map((expertise, index) => {
   addExpertiseToTable(expertise, index)
})

const input = document.querySelector("input");
input.addEventListener("input", function(event) {
  console.log(event.target.value);
});

$(window).click(function (event) {
  if (event.target.id == 'diceAttributes') {
    diceModal.css('display', 'none')
    $('#diceNumber').text('')
    $('#diceType').text('')

    $('.modalDice').css('transform', 'rotate(0deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
  } else if (event.target.id == 'lifeModal') {
    lifeModal.css('display', 'none')
  } else if (event.target.id == 'sanityModal') {
    sanityModal.css('display', 'none')
  } else if (event.target.id == 'addWeaponModal') {
    closeModal('#addWeaponModal')
  } else if (event.target.id == 'addExpertiseModal') {
     closeModal('#addExpertiseModal')
  } else if (event.target.id == 'addExpertise2Modal') {
     closeModal('#addExpertise2Modal')
  } else if (event.target.id == 'addFocusModal') {
      closeModal('#addFocusModal')
  } else if (event.target.id == 'addAttributeModal') {
      closeModal('#addAttributeModal')
  }
})


$('#addAttribute').click(function() {
   openModal('#addAttributeModal')
})

$('#addAttributeForm').submit(function (event) {
  var attributeCost = ''

  if ($('#attributeCost').val() == 1) {
    attributeCost = 1
  } else if ($('#attributeCost').val() == 2) {
    attributeCost = 2
  } else if ($('#attributeCost').val() == 3) {
    attributeCost = 3
  }

  const attribute = {
    name: $('#attributeName').val(),
    cost: $('#attributeCost').val(),
    description: $('#attributeDescription').val(),
  }

  data.attribute.push(attribute)
  const id = data.attribute.length - 1
  addAttributeToTable(attribute, id)

  closeModal('#addAttributeModal')
  event.preventDefault()
})

function addAttributeToTable(attribute, id) {
  const newattribute = $(`<tr id="attribute_${id}">
        <td>
            <button onclick="deleteAttribute(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${attribute.name}
        </td>
        <td>${attribute.cost}</td>
        <td>${attribute.description}</td>
    </tr>`)
  $('table#attribute').append(newattribute)
}

function deleteAttribute(id) {
  $(`tr#${id}`).remove()
}

$('#addExpertise').click(function() {
   openModal('#addExpertiseModal')
})

$('#addExpertiseForm').submit(function (event) {
  var expertiseCost = ''

  if ($('#expertiseCost').val() == 1) {
    expertiseCost = 1
  } else if ($('#expertiseCost').val() == 2) {
    expertiseCost = 2
  } else if ($('#expertiseCost').val() == 3) {
    expertiseCost = 3
  }

  const expertise = {
    name: $('#expertiseName').val(),
    cost: $('#expertiseCost').val(),
    description: $('#expertiseDescription').val(),
  }

  data.expertise.push(expertise)
  const id = data.expertise.length - 1
  addExpertiseToTable(expertise, id)

  closeModal('#addExpertiseModal')
  event.preventDefault()
})

function addExpertiseToTable(expertise, id) {
  const newexpertise = $(`<tr id="expertise_${id}">
        <td>
            <button onclick="deleteExpertise(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${expertise.name}
        </td>
        <td>${expertise.cost}</td>
        <td>${expertise.description}</td>
    </tr>`)
  $('table#expertise').append(newexpertise)
}

function deleteExpertise(id) {
  $(`tr#${id}`).remove()
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Animation
    hamburger.classList.toggle("toggle");
});

 function convertNumber() {
      // Get the input value
      var input = document.getElementById("input").value;
      // Perform the conversion
      var output = input / 3;
      // Display the results
      document.getElementById("outputDisplay").innerHTML = "Output: " + output;
    }
