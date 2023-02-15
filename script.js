const data = {
      attribute: [
      {
        name:'Esoterica/Youjutsu',
        cost:'1',
        description:'Atributo básico de mana, consumido quando magias são conjuradas',
     },
     {
        name:'Energia Sazonal',
        cost:'2',
        description:'Atributo de energia sazonal nativa para todas as criaturas vivas',
     },
      {
        name:'Ponto de vida (PV)',
        cost: '3',
        description:'Garantem que um personagem consiga sobreviver',
     },
      {
        name:'Ponto de Fatiga/Stamina',
        cost:'10',
        description:'Quantidade de pontos de stamina de um personagem, se ele zerar estes pontos, terá sua STR cortada pela metade',
     },
   ],
      expertise: [
       {
         name:'Visão Aguçada',
         cost:'3',
         description:'Personagem ganhará +1 em testes de PER associados ao sentido da visão',
       },
       {
         name:'Audição Aguçada',
         cost:'3',
         description:'Personagem ganhará +1 em testes de PER associados ao sentido da audição',
       },
       {
         name:'Paladar Aguçado',
         cost:'3',
         description:'Personagem ganhará +1 em testes de PER associados ao sentido do paladar',
       },
       {
         name:'Olfato Aguçado',
         cost:'3',
         description:'Personagem ganhará +1 em testes de PER associados ao sentido do olfato',
       },
       {
         name:'Tato Aguçado',
         cost:'3',
         description:'Personagem ganhará +1 em testes de PER associados ao sentido do tato',
       },
       {
         name:'Ambidestria',
         cost:'10',
         description:'Pode lutar com dextreza igual em ambas as mãos, e não estará sujeito ao modificador de -4 em testes caso use a mão não dominante',
       },
       {
         name:'Benção',
         cost:'8',
         description:'Recebe visões e orientações de algum Deus, estas visões podem demorar até 1h para aparecerem e poderão custar até 10 pontos de fatiga',
       },
       {
         name:'Benção Superior',
         cost:'15',
         description:'Além dos efeitos anteriores, você recebe +5 para interpretar a visão recebida',
       },
       {
         name:'Feito Heróico',
         cost:'10',
         description:'Uma vez por sessão, você pode rolar 1d6 de adicionar ao seu atributo de STR, DEX, IQ ou HT',
       },
       {
         name:'Brachiator',
         cost:'5',
         description:'+1 para testes de escalada, você consegue se mover com metade do valor de sua movimentação básica em cordas, cipós e vinhas',
       },
       {
         name:'Prendendo a respiração',
         cost:'2',
         description:'Aumenta o tempo que você consegue ficar debaixo da água em 2d6 minutos',
       },
       {
         name:'Senso Comum',
         cost:'6',
         description:'Faça um teste de VON, se você suceder, ele poderá te avisar quando você fizer merda',
       },
       {
         name:'Clarissenciência',
         cost:'15',
         description:'Escolha um ponto que consegue enxergar com clareza, você fará um teste de PER como se estivesse lá',
       },
       {
         name:'Talento Selvagem',
         cost:'20',
         description:'Ganha a chance de substituir um teste de um atributo por outro, gerando o mesmo resultado',
       },
       {
         name:'Mestre Armamentista',
         cost:'10',
         description:'Pode reduzir o teste padrão de armas por 1 ponto',
       },
       {
         name:'Talento Vocal',
         cost:'10',
         description:'Sua voz será sempre naturalmente clara, ressonante e atrativa. Você ganha +2 em testes de performance, diplomacia, canção e mimica',
       },
       {
         name:'Visualização',
         cost:'10',
         description:'Você imagina todas as probabilidades de fracassar em um teste que estiver prestes a fazer, essa visualização lhe dá +2 para realmente fazer o teste',
       },
       {
         name:'Sentido de Vibração',
         cost:'8',
         description:'Você pode saber o tamanho e a localização de algo a partir das vibrações emitidas e captadas por sua pele',
       },
       {
         name:'Empatia com Animais',
         cost:'4',
         description:'Seu personagem pode descobrir a motivação de animais, ao suceder em um teste de IQ, ele saberá seu estado emocional e se está sob algum controle',
       },
       {
         name:'Poço de Mana',
         cost:'12',
         description:'Você cria um círculo que naturalmente emite mana, este círculo começa com um raio de 4ft e duplica a cada nível',
       },
       {
         name:'Mana Variável',
         cost:'8',
         description:'Escolha algum período do ano ou do dia e você receberá 2 pontos por turno',
       },
       {
         name:'Aspecto de Mana',
         cost:'6',
         description:'Conecta sua mana a algum feitiço que você escolher, você terá um modificador de +2 para este, mas deve escolher um -2 para outro',
       },
       {
         name:'Mana Selvagem',
         cost:'8',
         description:'Qualquer sucesso em uma rolada será tratado como sucesso crítico e qualquer fracasso como um fracasso crítico',
       },
       {
         name:'Mana Distorcida',
         cost:'6',
         description:'Quando você conjurar um feitiço, o resultado do dado será invertido, você precisará tirar mais que a dificuldade do teste para suceder',
       },
       {
         name:'Pulo do Gato',
         cost:'6',
         description:'Faça um teste de DEX ao cair, se suceder, o dano de queda será dividido pela metade',
       },
       {
         name:'Reflexos de Combate',
         cost:'8',
         description:'Recebe +1 em jogadas de parry, esquiva e bloqueio além de +6 em testes de vontade para acordar',
       },
       {
         name:'Noção de Perigo',
         cost:'6',
         description:'O Personagem possui uma percepção passiva que o avisa quando algo estiver errado',
       },
       {
         name:'Venturoso',
         cost:'9',
         description:'Personagem ganha +1 em testes quando correr um risco desnecessário, ele pode também repetir falhas críticas quando estiver se arriscando',
       },
       {
         name:'Empatia',
         cost:'4',
         description:'Ao encontrar uma pessoa pela primeira vez, o Yama poderá dizer o que a pessoa sente de seu personagem',
       },
       {
         name:'Bloqueio Ampliado',
         cost:'10',
         description:'+1 em testes de bloqueio com escudo ou parry',
       },
       {
         name:'Esquiva Ampliada',
         cost:'8',
         description:'+1 em testes de esquiva',
       },
       {
         name:'Destemor',
         cost:'4',
         description:'Some seu nível de Destemor a sua Vontade sempre que fizer uma verificação de pânico, resistir a uma intimidação ou a um poder sobrenatural',
       },
       {
         name:'Flexibilidade',
         cost:'4',
         description:'+3 em testes de escalada e fuga',
       },
       {
         name:'Ultra Flexibilidade',
         cost:'10',
         description:'+5 em testes de escalada e fuga',
       },
       {
         name:'Hipoalgia',
         cost:'6',
         description:'+3 em testes de HT para resistir a dor e evitar quedas',
       },
       {
         name:'Visão Noturna',
         cost:'1',
         description:'Reduz -1 do modificador de escuridão',
       },
       {
         name:'Equilíbrio Perfeito',
         cost:'8',
         description:'+6 em testes para se manter em pé em superfícies escorregadias ou instáveis',
       },
       {
         name:'Imunidade a doenças',
         cost:'3',
         description:'+3 em testes de HT para se recuperar de doenças',
       },
       {
         name:'Imunidade a veneno',
         cost:'5',
         description:'+3 em testes para se recuperar de venenos',
       },
       {
         name:'Direção Absoluta',
         cost:'2',
         description:'Sempre sabe onde é o Norte e pode retraçar passos que tenha feito a menos de 1 mês, recebe +3 em testes de navegação',
       },
       {
         name:'Dextreza no Braço',
         cost:'6',
         description:'Aumenta +1 de dextreza para um de seus braços',
       },
       {
         name:'Voar',
         cost:'40',
         description:'Pode voar livremente',
       },
       {
         name:'Saṃjñā',
         cost:'8',
         description:'Ao suceder em um teste de HT, pode consumir Esoterica/Youjutsu para usar uma habilidade sazonal',
       },
       {
         name:'Cerimonia Secreta',
         cost:'6',
         description:'Recebe +1 em testes relacionados a habilidades sazonais ao combinar com outro personagem',
       },
       {
         name:'Bom condicionamento físico',
         cost:'10',
         description:'+1 em testes para recuperar PF, recupera 2x mais que o normal',
       },
       {
         name:'Resiliente',
         cost:'50',
         description:'Morre apenas quando atingir -50% de sua vida total',
       },
       {
         name:'Muito Resiliente',
         cost:'100',
         description:'Morre apenas quando atingir -100% de sua vida',
       },
    ],
   }

function createButton(item, cart) {
  const button = document.createElement('button');
  button.textContent = 'Add to Cart';
  button.addEventListener('click', () => {
    const cartItem = document.createElement('li');
    cartItem.textContent = item.name;
    cart.appendChild(cartItem);
  });
  return button;
}

function renderTable(tableData, cart) {
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'Nome';
  const costHeader = document.createElement('th');
  costHeader.textContent = 'Gasto';
  const descriptionHeader = document.createElement('th');
  descriptionHeader.textContent = 'Descrição';
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(costHeader);
  headerRow.appendChild(descriptionHeader);
  table.appendChild(headerRow);
  for (const item of tableData) {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    const costCell = document.createElement('td');
    costCell.textContent = item.cost;
    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = item.description;
    const buttonCell = document.createElement('td');
    const button = createButton(item, cart);
    buttonCell.appendChild(button);
    row.appendChild(nameCell);
    row.appendChild(costCell);
    row.appendChild(descriptionCell);
    row.appendChild(buttonCell);
    table.appendChild(row);
  }
  return table;
}

const attributeTable = renderTable(data.attribute, document.getElementById('attributeCart'));
document.getElementById('attribute').appendChild(attributeTable);

const expertiseTable = renderTable(data.expertise, document.getElementById('expertiseCart'));
document.getElementById('expertise').appendChild(expertiseTable);

// Get a reference to the cart unordered list element
const cart = document.getElementById("cart");

// Add a new item to the cart
function addToCart(name, cost) {
  // Create a new li element to represent the item in the cart
  const item = document.createElement("li");
  item.textContent = `${name} - ${cost} pontos`;
  
  // Add the item to the cart list
  cart.appendChild(item);
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
