// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
const channelEl = document.getElementById("channels");

async function getRadio() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  ); //get data
  const radio = await response.json();
  //console.log(radio);

  radio.channels.forEach((channel) => {
    
    const container = document.createElement("div"); //create div - container for all
    const textContainer = document.createElement("div"); //create div for name and audio
    //create image, audio, source, name elements
    const name = document.createElement("h1");
    const audio = document.createElement("audio"); 
    const source = document.createElement("source");
    const image = document.createElement("img");

    //set attributes
    container.setAttribute("id", "container"); //add id to container
    source.setAttribute("src", channel.liveaudio.url); //set src to source
    source.setAttribute("type", "audio/mpeg"); //set type attr to source
    audio.controls = true; //add controls
    image.setAttribute("src", channel.image) //add src attr to image
    name.setAttribute("id", "title") //give h1 an id-title
    name.innerText = `${channel.name}`; //channel-name to the h1
    textContainer.setAttribute("id", "textContent") //give div an id-textContent
    
    textContainer.style.backgroundColor = "#" + channel.color //add the # and the color to the textContainer bg
    
    //append elements
    audio.appendChild(source); //add source inside audio
    textContainer.appendChild(name); //add name to textcontainer
    textContainer.appendChild(audio); //add audio to textcontainer

    container.appendChild(image); //add img to container
    container.appendChild(textContainer); //add text/audio to container
    channelEl.appendChild(container); //add contaienr to page
  });
}

getRadio();

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
