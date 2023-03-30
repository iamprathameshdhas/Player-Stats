var  hype;
fetch("./cricket.json")
        .then(response => {
                
                return response.json();
        })
        .then(
                data => hype = data);

function myFunction(id) {

        document.getElementById("fileContent").innerHTML = ` <div>
                                <img class = "image" src="${hype[id].image}" alt="" ></img>
                                <h1 id="title">${hype[id].name}</h1>
                                <h3 id="country">${hype[id].country}</h3>
                                <h6 id="matchesplayed">Matches Played : ${hype[id].matchesPlayed}</h6>
                                <h6 id="runsscored">Runs Scored : ${hype[id].runsScored}</h6>
                                <h6 id="higestscore">Highest Scored : ${hype[id].highestScore}</h6>
                                <h6 id="average">Average : ${hype[id].average}</h6>
                                <h6 id="centuries">Centuries : ${hype[id].centuries}</h6>
                                <h6 id="fifties">Fifties : ${hype[id].fifties}</h6>
                                <h6 id="wicketstaken">Wickets Taken : ${hype[id].wicketsTaken}</h6>
                                <h6 id="catchestaken">Catches Taken : ${hype[id].catchesTaken}</h6>
                        </div>
                `;
}

